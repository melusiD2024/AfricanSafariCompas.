package africa.safaricompass.app;

import android.Manifest;
import android.app.Activity;
import android.app.DownloadManager;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.speech.tts.TextToSpeech;
import android.view.View;
import android.webkit.GeolocationPermissions;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.ValueCallback;
import android.widget.Toast;

import androidx.webkit.WebViewAssetLoader;

import java.util.Locale;

public class MainActivity extends Activity {
    private static final String APP_ORIGIN = "https://appassets.androidplatform.net";
    private static final int LOCATION_REQUEST = 1001;
    private static final int FILE_CHOOSER_REQUEST = 1002;
    private static final int SAFARI_MAP_REQUEST = 1003;
    private WebView webView;
    private ValueCallback<Uri[]> fileChooserCallback;
    private TextToSpeech textToSpeech;
    private boolean speechReady;
    private boolean speechFailed;
    private String pendingSpeech;
    private String pendingLanguage;
    private String pendingFallback;

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        getWindow().setStatusBarColor(Color.rgb(41, 38, 33));
        getWindow().setNavigationBarColor(Color.BLACK);

        webView = new WebView(this);
        webView.setId(0x5AFA2026);
        webView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
        setContentView(webView);
        textToSpeech = new TextToSpeech(this, status -> {
            speechReady = status == TextToSpeech.SUCCESS;
            speechFailed = !speechReady;
            if (speechReady && pendingSpeech != null) {
                String phrase = pendingSpeech, language = pendingLanguage, fallback = pendingFallback;
                pendingSpeech = pendingLanguage = pendingFallback = null;
                speakPhrase(phrase, language, fallback);
            }
        });

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setGeolocationEnabled(true);
        settings.setAllowContentAccess(false);
        settings.setAllowFileAccess(false);
        settings.setAllowFileAccessFromFileURLs(false);
        settings.setAllowUniversalAccessFromFileURLs(false);
        settings.setJavaScriptCanOpenWindowsAutomatically(false);
        settings.setSupportMultipleWindows(false);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        settings.setMediaPlaybackRequiresUserGesture(true);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) settings.setSafeBrowsingEnabled(true);
        WebView.setWebContentsDebuggingEnabled(false);

        WebViewAssetLoader loader = new WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
            .build();

        webView.setWebViewClient(new WebViewClient() {
            @Override public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                return loader.shouldInterceptRequest(request.getUrl());
            }

            @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                if ("appassets.androidplatform.net".equals(uri.getHost())) return false;
                if ("http".equals(uri.getScheme())) {
                    Toast.makeText(MainActivity.this, "Blocked an insecure link.", Toast.LENGTH_SHORT).show();
                    return true;
                }
                if ("https".equals(uri.getScheme()) || "tel".equals(uri.getScheme()) || "mailto".equals(uri.getScheme())) {
                    try { startActivity(new Intent(Intent.ACTION_VIEW, uri)); }
                    catch (Exception ignored) { Toast.makeText(MainActivity.this, "No app can open this link.", Toast.LENGTH_SHORT).show(); }
                    return true;
                }
                return true;
            }
        });

        webView.setWebChromeClient(new WebChromeClient() {
            @Override public void onGeolocationPermissionsShowPrompt(String origin, GeolocationPermissions.Callback callback) {
                Uri parsed = origin == null ? Uri.EMPTY : Uri.parse(origin);
                boolean trusted = "https".equals(parsed.getScheme()) && "appassets.androidplatform.net".equals(parsed.getHost());
                boolean granted = hasLocationPermission();
                callback.invoke(origin, trusted && granted, false);
            }

            @Override public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback, FileChooserParams params) {
                if (fileChooserCallback != null) fileChooserCallback.onReceiveValue(null);
                fileChooserCallback = callback;
                try {
                    Intent intent = params.createIntent();
                    intent.setType("application/json");
                    startActivityForResult(intent, FILE_CHOOSER_REQUEST);
                    return true;
                } catch (Exception error) {
                    fileChooserCallback = null;
                    Toast.makeText(MainActivity.this, "No file picker is available.", Toast.LENGTH_SHORT).show();
                    return false;
                }
            }
        });

        webView.setDownloadListener((url, userAgent, contentDisposition, mimeType, contentLength) -> {
            if (url == null || !"https".equalsIgnoreCase(Uri.parse(url).getScheme())) {
                Toast.makeText(this, "Blocked an insecure download.", Toast.LENGTH_SHORT).show();
                return;
            }
            try {
                DownloadManager.Request request = new DownloadManager.Request(Uri.parse(url));
                request.setMimeType(mimeType);
                if (userAgent != null && !userAgent.trim().isEmpty()) request.addRequestHeader("User-Agent", userAgent);
                request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
                request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, android.webkit.URLUtil.guessFileName(url, contentDisposition, mimeType));
                ((DownloadManager)getSystemService(Context.DOWNLOAD_SERVICE)).enqueue(request);
                Toast.makeText(this, "Download started", Toast.LENGTH_SHORT).show();
            } catch (Exception e) {
                startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url)));
            }
        });

        webView.addJavascriptInterface(new NativeBridge(), "AndroidBridge");
        if (state == null) webView.loadUrl(APP_ORIGIN + "/assets/index.html?native=android");
        else webView.restoreState(state);

    }

    private void dispatchLocationPermission(boolean granted) {
        webView.evaluateJavascript("window.dispatchEvent(new CustomEvent('native-location-permission',{detail:{granted:" + granted + "}}))", null);
    }

    private boolean hasLocationPermission() {
        return checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED
            || checkSelfPermission(Manifest.permission.ACCESS_COARSE_LOCATION) == PackageManager.PERMISSION_GRANTED;
    }

    private void speakPhrase(String phrase, String languageTag, String fallback) {
        if (phrase == null || phrase.trim().isEmpty()) return;
        if (speechFailed) {
            Toast.makeText(this, "Pronunciation is unavailable on this device.", Toast.LENGTH_SHORT).show();
            return;
        }
        if (!speechReady) {
            pendingSpeech = phrase; pendingLanguage = languageTag; pendingFallback = fallback;
            Toast.makeText(this, "Preparing pronunciation…", Toast.LENGTH_SHORT).show();
            return;
        }
        Locale requested = languageTag == null || languageTag.trim().isEmpty() ? Locale.getDefault() : Locale.forLanguageTag(languageTag);
        int support = textToSpeech.setLanguage(requested);
        String spoken = phrase;
        if (support == TextToSpeech.LANG_MISSING_DATA || support == TextToSpeech.LANG_NOT_SUPPORTED) {
            textToSpeech.setLanguage(Locale.ENGLISH);
            spoken = fallback == null || fallback.trim().isEmpty() ? phrase : fallback;
            Toast.makeText(this, "Using approximate pronunciation.", Toast.LENGTH_SHORT).show();
        }
        textToSpeech.speak(spoken, TextToSpeech.QUEUE_FLUSH, null, "pocketbook-phrase");
    }

    public class NativeBridge {
        @JavascriptInterface public void share(String title, String text) {
            runOnUiThread(() -> {
                Intent intent = new Intent(Intent.ACTION_SEND);
                intent.setType("text/plain");
                intent.putExtra(Intent.EXTRA_SUBJECT, title);
                intent.putExtra(Intent.EXTRA_TEXT, text);
                startActivity(Intent.createChooser(intent, title));
            });
        }

        @JavascriptInterface public void requestLocationPermission() {
            runOnUiThread(() -> {
                if (hasLocationPermission()) {
                    dispatchLocationPermission(true);
                } else {
                    requestPermissions(new String[]{Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION}, LOCATION_REQUEST);
                }
            });
        }

        @JavascriptInterface public void openSafariMap(String query) {
            runOnUiThread(() -> {
                Intent intent = new Intent(MainActivity.this, SafariMapActivity.class);
                intent.putExtra(SafariMapActivity.EXTRA_QUERY, query == null ? "" : query);
                startActivityForResult(intent, SAFARI_MAP_REQUEST);
            });
        }

        @JavascriptInterface public void speakPhrase(String phrase, String languageTag, String fallback) {
            runOnUiThread(() -> MainActivity.this.speakPhrase(phrase, languageTag, fallback));
        }
    }

    @Override public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == LOCATION_REQUEST) {
            dispatchLocationPermission(hasLocationPermission());
        }
    }

    @Override protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == SAFARI_MAP_REQUEST) {
            if (resultCode == RESULT_OK && data != null && data.getBooleanExtra(SafariMapActivity.EXTRA_OPEN_SOS, false)) {
                webView.evaluateJavascript("document.getElementById('sosButton')?.click()", null);
            }
            return;
        }
        if (requestCode == FILE_CHOOSER_REQUEST) {
            Uri[] result = WebChromeClient.FileChooserParams.parseResult(resultCode, data);
            if (fileChooserCallback != null) fileChooserCallback.onReceiveValue(result);
            fileChooserCallback = null;
            return;
        }
        super.onActivityResult(requestCode, resultCode, data);
    }

    @Override protected void onSaveInstanceState(Bundle outState) {
        webView.saveState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override protected void onPause() {
        webView.onPause();
        super.onPause();
    }

    @Override protected void onResume() {
        super.onResume();
        webView.onResume();
    }

    @Override protected void onDestroy() {
        webView.removeJavascriptInterface("AndroidBridge");
        webView.destroy();
        if (textToSpeech != null) { textToSpeech.stop(); textToSpeech.shutdown(); }
        super.onDestroy();
    }

    @Override public void onBackPressed() {
        webView.evaluateJavascript("window.handleNativeBack ? window.handleNativeBack() : false", handled -> {
            if ("true".equals(handled)) return;
            performDefaultBack();
        });
    }

    private void performDefaultBack() {
        if (webView.canGoBack()) webView.goBack();
        else super.onBackPressed();
    }
}
