package africa.safaricompass.app;

import android.app.Activity;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.os.Bundle;
import android.content.Intent;
import android.os.Handler;
import android.os.Looper;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowInsets;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONObject;
import org.maplibre.android.MapLibre;
import org.maplibre.android.annotations.Marker;
import org.maplibre.android.annotations.MarkerOptions;
import org.maplibre.android.camera.CameraPosition;
import org.maplibre.android.camera.CameraUpdateFactory;
import org.maplibre.android.geometry.LatLng;
import org.maplibre.android.geometry.LatLngBounds;
import org.maplibre.android.maps.MapView;
import org.maplibre.android.maps.MapLibreMap;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/** A native, touch-safe Africa safari map. No WebView gesture handling is involved. */
public class SafariMapActivity extends Activity {
    public static final String EXTRA_QUERY = "safari_map_query";
    public static final String EXTRA_OPEN_SOS = "open_sos";
    private static final String STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";
    private static final String SEARCH_SOURCE = "OpenStreetMap Nominatim";
    private static final LatLngBounds AFRICA_BOUNDS = new LatLngBounds.Builder()
        .include(new LatLng(38.0, -26.0)).include(new LatLng(-39.0, 64.0)).build();

    private static final Place[] SAFARI_PLACES = {
        new Place("Maasai Mara", "Kenya", -1.49, 35.14), new Place("Serengeti", "Tanzania", -2.33, 34.83),
        new Place("Bwindi", "Uganda", -1.05, 29.72), new Place("Volcanoes", "Rwanda", -1.46, 29.49),
        new Place("Okavango Delta", "Botswana", -19.28, 22.90), new Place("Chobe", "Botswana", -18.67, 24.50),
        new Place("Moremi & Khwai", "Botswana", -19.18, 23.75), new Place("Northern Tuli", "Botswana", -22.22, 29.12),
        new Place("Savuti & Linyanti", "Botswana", -18.45, 23.75), new Place("Central Kalahari", "Botswana", -21.58, 23.35),
        new Place("Makgadikgadi & Nxai Pan", "Botswana", -20.15, 24.75), new Place("Kgalagadi", "Botswana", -24.80, 22.20),
        new Place("Etosha", "Namibia", -18.86, 16.33), new Place("Kruger", "South Africa", -23.99, 31.55),
        new Place("Victoria Falls", "Zimbabwe / Zambia", -17.92, 25.86), new Place("Loango", "Gabon", -2.22, 9.59),
        new Place("Andasibe", "Madagascar", -18.93, 48.42), new Place("Kakum", "Ghana", 5.35, -1.38),
        new Place("Marrakech & Atlas", "Morocco", 31.63, -7.99), new Place("Luxor & the Nile", "Egypt", 25.69, 32.64),
        new Place("Dakar", "Senegal", 14.72, -17.47), new Place("Seychelles", "Seychelles", -4.62, 55.45)
    };

    private final ExecutorService network = Executors.newSingleThreadExecutor();
    private final Handler main = new Handler(Looper.getMainLooper());
    private MapView mapView;
    private MapLibreMap map;
    private EditText search;
    private TextView status;
    private ListView suggestions;
    private final List<Place> visibleResults = new ArrayList<>();
    private final List<Marker> markers = new ArrayList<>();

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        getWindow().setStatusBarColor(Color.rgb(35, 31, 27));
        getWindow().setNavigationBarColor(Color.rgb(251, 248, 240));
        MapLibre.getInstance(this);

        FrameLayout root = new FrameLayout(this);
        mapView = new MapView(this);
        mapView.onCreate(state);
        root.addView(mapView, new FrameLayout.LayoutParams(-1, -1));
        root.addView(buildTopPanel(), topPanelParams());
        root.addView(buildStatus(), statusParams());
        root.addView(buildSuggestions(), suggestionParams());
        root.addView(buildSos(), sosParams());
        setContentView(root);
        root.setOnApplyWindowInsetsListener((view, insets) -> {
            int top = insets.getSystemWindowInsetTop();
            int bottom = insets.getSystemWindowInsetBottom();
            view.setPadding(0, top, 0, bottom);
            return insets;
        });

        mapView.getMapAsync(ready -> {
            map = ready;
            map.setMinZoomPreference(2.4);
            map.setMaxZoomPreference(18.0);
            map.setLatLngBoundsForCameraTarget(AFRICA_BOUNDS);
            map.setCameraPosition(new CameraPosition.Builder().target(new LatLng(1.8, 20.5)).zoom(2.6).build());
            map.getUiSettings().setCompassEnabled(true);
            map.getUiSettings().setAttributionEnabled(true);
            map.setStyle(STYLE_URL, style -> {
                addCuratedMarkers();
                status.setText("Safari places loaded · search parks, reserves, lodges or countries");
                String query = getIntent().getStringExtra(EXTRA_QUERY);
                if (query != null && !query.trim().isEmpty()) { search.setText(query); runSearch(query); }
            });
        });
    }

    private View buildTopPanel() {
        LinearLayout panel = new LinearLayout(this);
        panel.setOrientation(LinearLayout.HORIZONTAL);
        panel.setGravity(Gravity.CENTER_VERTICAL);
        panel.setPadding(dp(8), dp(7), dp(7), dp(7));
        panel.setBackground(roundRect(Color.argb(248, 255, 255, 255), 16, Color.argb(80, 35, 31, 27)));

        Button close = button("×", Color.rgb(35, 31, 27), Color.TRANSPARENT);
        close.setTextSize(27); close.setContentDescription("Close safari map"); close.setOnClickListener(v -> finish());
        panel.addView(close, new LinearLayout.LayoutParams(dp(48), dp(48)));

        search = new EditText(this);
        search.setSingleLine(true); search.setHint("Park, reserve, lodge or country"); search.setTextSize(15); search.setTextColor(Color.rgb(35,31,27));
        search.setBackgroundColor(Color.TRANSPARENT); search.setPadding(dp(8),0,dp(8),0);
        panel.addView(search, new LinearLayout.LayoutParams(0, dp(48), 1));

        Button go = button("Search", Color.WHITE, Color.rgb(35,31,27));
        go.setOnClickListener(v -> runSearch(search.getText().toString()));
        panel.addView(go, new LinearLayout.LayoutParams(dp(82), dp(48)));
        search.setOnEditorActionListener((v, action, event) -> { runSearch(search.getText().toString()); return true; });
        search.addTextChangedListener(new TextWatcher() {
            public void beforeTextChanged(CharSequence s,int start,int count,int after) {}
            public void onTextChanged(CharSequence s,int start,int before,int count) { showLocalSuggestions(s.toString()); }
            public void afterTextChanged(Editable s) {}
        });
        return panel;
    }

    private View buildStatus() {
        status = new TextView(this); status.setText("Opening native safari map…"); status.setTextSize(12); status.setTextColor(Color.rgb(55,50,44));
        status.setPadding(dp(12),dp(8),dp(12),dp(8)); status.setBackground(roundRect(Color.argb(235,255,255,255),12,Color.argb(50,35,31,27)));
        return status;
    }

    private View buildSuggestions() {
        suggestions = new ListView(this); suggestions.setVisibility(View.GONE); suggestions.setDividerHeight(1);
        suggestions.setBackground(roundRect(Color.argb(252,255,255,255),12,Color.argb(50,35,31,27)));
        suggestions.setOnItemClickListener((parent, view, position, id) -> focus(visibleResults.get(position), true));
        return suggestions;
    }

    private View buildSos() {
        Button sos = button("SOS\nEMERGENCY", Color.WHITE, Color.rgb(179, 38, 30));
        sos.setTextSize(11); sos.setContentDescription("Open emergency assistance");
        sos.setBackground(roundRect(Color.rgb(179,38,30),36,Color.WHITE));
        sos.setOnClickListener(v -> { Intent result=new Intent();result.putExtra(EXTRA_OPEN_SOS,true);setResult(RESULT_OK,result);finish(); });
        return sos;
    }

    private void showLocalSuggestions(String raw) {
        String query = raw.trim().toLowerCase(Locale.ROOT); visibleResults.clear();
        if (query.length() >= 2) for (Place place : SAFARI_PLACES) if ((place.name + " " + place.country).toLowerCase(Locale.ROOT).contains(query)) visibleResults.add(place);
        renderSuggestions();
        if (visibleResults.size() == 1 || (!visibleResults.isEmpty() && visibleResults.get(0).name.equalsIgnoreCase(raw.trim()))) focus(visibleResults.get(0), false);
    }

    private void renderSuggestions() {
        List<String> rows = new ArrayList<>(); for (Place place : visibleResults) rows.add(place.name + "\n" + place.country);
        suggestions.setAdapter(new ArrayAdapter<String>(this, android.R.layout.simple_list_item_2, android.R.id.text1, rows) {
            @Override public View getView(int position, View convert, ViewGroup parent) {
                View view = super.getView(position, convert, parent); TextView line = view.findViewById(android.R.id.text1);
                String[] parts = rows.get(position).split("\\n",2); line.setText(parts[0]); line.setTypeface(Typeface.DEFAULT,Typeface.BOLD);
                TextView sub = view.findViewById(android.R.id.text2); sub.setText(parts.length>1?parts[1]:""); return view;
            }
        });
        suggestions.setVisibility(rows.isEmpty() ? View.GONE : View.VISIBLE);
    }

    private void runSearch(String raw) {
        String query = raw == null ? "" : raw.trim(); if (query.length() < 2) { status.setText("Type at least two characters."); return; }
        status.setText("Searching Africa for “" + query + "”…"); suggestions.setVisibility(View.GONE);
        network.execute(() -> {
            List<Place> found = new ArrayList<>(); HttpURLConnection connection = null;
            try {
                String encoded = URLEncoder.encode(query, StandardCharsets.UTF_8.name());
                URL url = new URL("https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=8&viewbox=-26,38,64,-39&bounded=1&q=" + encoded);
                connection = (HttpURLConnection) url.openConnection(); connection.setConnectTimeout(9000); connection.setReadTimeout(9000);
                connection.setRequestProperty("User-Agent","AfricanSafariPocketbook/1.70 (https://github.com/melusiD2024/AfricanSafariCompas.)");
                try (BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()))) {
                    StringBuilder body = new StringBuilder(); String line; while ((line=reader.readLine())!=null) body.append(line);
                    JSONArray data = new JSONArray(body.toString());
                    for (int i=0;i<data.length();i++) { JSONObject item=data.getJSONObject(i); String label=item.optString("display_name","African map result"); found.add(new Place(label.split(",")[0], label, item.getDouble("lat"), item.getDouble("lon"))); }
                }
                main.post(() -> { visibleResults.clear(); visibleResults.addAll(found); renderSuggestions(); if(found.isEmpty())status.setText("No African result found. Try a park, reserve or nearby town.");else{status.setText(found.size()+" "+SEARCH_SOURCE+" result"+(found.size()==1?"":"s")+" · best match highlighted");focus(found.get(0),false);} });
            } catch (Exception error) { main.post(() -> status.setText("Live search is unavailable. Curated safari markers remain usable.")); }
            finally { if(connection!=null)connection.disconnect(); }
        });
    }

    private void addCuratedMarkers() { for (Place place : SAFARI_PLACES) markers.add(map.addMarker(new MarkerOptions().position(place.point()).title(place.name).snippet(place.country + " · Pocketbook safari place"))); }

    private void focus(Place place, boolean hideResults) {
        if (map == null) return; map.animateCamera(CameraUpdateFactory.newLatLngZoom(place.point(), place.country.equals(place.name) ? 5.0 : 8.0));
        Marker nearest = null; double best = Double.MAX_VALUE; for (Marker marker : markers) { double score=Math.abs(marker.getPosition().getLatitude()-place.lat)+Math.abs(marker.getPosition().getLongitude()-place.lng); if(score<best){best=score;nearest=marker;} }
        if (nearest != null && best < 0.02) nearest.showInfoWindow(map, mapView);
        status.setText(place.name + " · " + place.country); if (hideResults) suggestions.setVisibility(View.GONE);
    }

    private FrameLayout.LayoutParams topPanelParams(){FrameLayout.LayoutParams p=new FrameLayout.LayoutParams(-1,dp(64),Gravity.TOP);p.setMargins(dp(10),dp(10),dp(10),0);return p;}
    private FrameLayout.LayoutParams statusParams(){FrameLayout.LayoutParams p=new FrameLayout.LayoutParams(-2,dp(40),Gravity.TOP|Gravity.CENTER_HORIZONTAL);p.topMargin=dp(82);return p;}
    private FrameLayout.LayoutParams suggestionParams(){FrameLayout.LayoutParams p=new FrameLayout.LayoutParams(-1,dp(300),Gravity.TOP);p.setMargins(dp(12),dp(128),dp(12),0);return p;}
    private FrameLayout.LayoutParams sosParams(){FrameLayout.LayoutParams p=new FrameLayout.LayoutParams(dp(72),dp(72),Gravity.END|Gravity.BOTTOM);p.setMargins(0,0,dp(16),dp(18));return p;}
    private Button button(String text,int color,int background){Button b=new Button(this);b.setText(text);b.setTextColor(color);b.setTextSize(13);b.setAllCaps(false);b.setTypeface(Typeface.DEFAULT,Typeface.BOLD);b.setBackground(roundRect(background,12,Color.TRANSPARENT));return b;}
    private GradientDrawable roundRect(int fill,int radius,int stroke){GradientDrawable d=new GradientDrawable();d.setColor(fill);d.setCornerRadius(dp(radius));if(stroke!=Color.TRANSPARENT)d.setStroke(dp(1),stroke);return d;}
    private int dp(int value){return Math.round(value*getResources().getDisplayMetrics().density);}

    @Override protected void onStart(){super.onStart();mapView.onStart();}
    @Override protected void onResume(){super.onResume();mapView.onResume();}
    @Override protected void onPause(){mapView.onPause();super.onPause();}
    @Override protected void onStop(){mapView.onStop();super.onStop();}
    @Override public void onLowMemory(){super.onLowMemory();mapView.onLowMemory();}
    @Override protected void onDestroy(){network.shutdownNow();mapView.onDestroy();super.onDestroy();}
    @Override protected void onSaveInstanceState(Bundle state){super.onSaveInstanceState(state);mapView.onSaveInstanceState(state);}

    private static final class Place { final String name,country;final double lat,lng;Place(String n,String c,double a,double o){name=n;country=c;lat=a;lng=o;}LatLng point(){return new LatLng(lat,lng);} }
}
