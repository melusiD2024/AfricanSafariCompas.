package africa.safaricompass.app;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import android.graphics.Bitmap;
import android.os.SystemClock;
import android.webkit.WebView;
import androidx.test.core.app.ActivityScenario;
import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.platform.app.InstrumentationRegistry;
import java.io.File;
import java.io.FileOutputStream;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.TimeUnit;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(AndroidJUnit4.class)
public class PocketbookJourneyTest {
    private static final int WEBVIEW_ID = 0x5AFA2026;

    @Test public void criticalMobileJourneysRenderAndFitViewport() throws Exception {
        try (ActivityScenario<MainActivity> scenario = ActivityScenario.launch(MainActivity.class)) {
            SystemClock.sleep(1800);
            assertView(scenario, "pocketbook");
            assertJsTrue(scenario, "document.querySelectorAll('.bottom-nav [data-view]').length===6");
            assertJsTrue(scenario, "[...document.querySelectorAll('.bottom-nav [data-view]')].every(button=>button.getBoundingClientRect().width>=40&&button.getBoundingClientRect().height>=54)");
            screenshot(scenario, "01-pocketbook-navigation.png");

            open(scenario, "explore");
            evaluate(scenario, "const input=document.getElementById('atlasSearch');input.value='Lion';input.dispatchEvent(new Event('input',{bubbles:true}));'ok'");
            SystemClock.sleep(250);
            assertJsTrue(scenario, "Boolean(document.querySelector('[data-atlas-animal=Lion]'))");
            assertJsTrue(scenario, "document.getElementById('atlasGrid').textContent.includes('Panthera leo')");
            screenshot(scenario, "02-places-wildlife-search.png");

            open(scenario, "journal");
            evaluate(scenario, "const input=document.getElementById('sightingAnimal');input.value='lion';input.dispatchEvent(new Event('input',{bubbles:true}));'ok'");
            SystemClock.sleep(250);
            assertJsTrue(scenario, "(()=>{const panel=document.getElementById('journalAnimalSuggestions'),rect=panel.getBoundingClientRect();return !panel.hidden&&panel.querySelectorAll('button').length>0&&panel.querySelectorAll('button').length<=6&&rect.left>=0&&rect.right<=window.innerWidth+1&&rect.height<=window.innerHeight*.43})()");
            screenshot(scenario, "03-journal-compact-autocomplete.png");
            evaluate(scenario, "document.getElementById('journalAnimalSuggestions').querySelector('button').click();'ok'");
            assertJsTrue(scenario, "document.getElementById('sightingAnimal').value.toLowerCase().includes('lion')");

            evaluate(scenario, "window.openCountryBrief('Botswana');'ok'");
            SystemClock.sleep(900);
            assertJsTrue(scenario, "document.getElementById('countryDialog').open");
            assertJsTrue(scenario, "document.getElementById('countryBrief').textContent.includes('Left side of the road')");
            assertFullWidth(scenario, ".country-hero");
            screenshot(scenario, "04-botswana-country-profile.png");
            evaluate(scenario, "document.getElementById('countryDialog').close();'ok'");

            evaluate(scenario, "const root=document.getElementById('wildlifeProfile');root.innerHTML='<div class="wildlife-profile-hero"><img alt="Test photograph"><div><p>FIELD ENTRY</p><h2>Lion</h2><em>Panthera leo</em><span>Mammal</span></div></div>';document.getElementById('wildlifeDialog').showModal();'ok'");
            SystemClock.sleep(250);
            assertFullWidth(scenario, ".wildlife-profile-hero");
            assertJsTrue(scenario, "getComputedStyle(document.querySelector('.dialog-sos-shortcut')).position==='fixed'&&getComputedStyle(document.querySelector('.wildlife-close')).position==='fixed'");
            screenshot(scenario, "05-wildlife-profile-geometry.png");
        }
    }

    @Test public void nativeSafariMapRendersARealBasemap() throws Exception {
        try (ActivityScenario<SafariMapActivity> scenario = ActivityScenario.launch(SafariMapActivity.class)) {
            SystemClock.sleep(8000);
            Bitmap image = InstrumentationRegistry.getInstrumentation().getUiAutomation().takeScreenshot();
            screenshot(image, "06-native-safari-map.png");
            int samples = 0, dominant = 0;
            int[] colourBins = new int[4096];
            for (int y = image.getHeight() / 4; y < image.getHeight() * 3 / 4; y += 18) {
                for (int x = image.getWidth() / 16; x < image.getWidth() * 15 / 16; x += 18) {
                    int pixel = image.getPixel(x, y), r = (pixel >> 16) & 255, g = (pixel >> 8) & 255, b = pixel & 255;
                    samples++;
                    int bin = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
                    colourBins[bin]++;
                    dominant = Math.max(dominant, colourBins[bin]);
                }
            }
            assertTrue("Native safari map rendered a blank basemap", dominant < samples * 0.82);
        }
    }

    private void open(ActivityScenario<MainActivity> scenario, String view) throws Exception {
        evaluate(scenario, "window.openPocketbookView('" + view + "');'ok'");
        SystemClock.sleep(350);
        assertView(scenario, view);
    }

    private void assertView(ActivityScenario<MainActivity> scenario, String expected) throws Exception {
        assertEquals(expected, evaluate(scenario, "document.querySelector('.view.active').id"));
    }

    private void assertFullWidth(ActivityScenario<MainActivity> scenario, String selector) throws Exception {
        assertJsTrue(scenario, "(()=>{const rect=document.querySelector('" + selector + "').getBoundingClientRect();return rect.left<=1&&rect.right>=window.innerWidth-1})()");
    }

    private void assertJsTrue(ActivityScenario<MainActivity> scenario, String expression) throws Exception {
        assertEquals("true", evaluate(scenario, String.format("Boolean(%s)", expression)));
    }

    private void screenshot(ActivityScenario<MainActivity> scenario, String name) throws Exception {
        File directory = new File(InstrumentationRegistry.getInstrumentation().getTargetContext().getExternalFilesDir(null), "screenshots");
        assertTrue(directory.mkdirs() || directory.isDirectory());
        Bitmap image = InstrumentationRegistry.getInstrumentation().getUiAutomation().takeScreenshot();
        try (FileOutputStream output = new FileOutputStream(new File(directory, name))) {
            assertTrue(image.compress(Bitmap.CompressFormat.PNG, 100, output));
        }
    }

    private void screenshot(Bitmap image, String name) throws Exception {
        File directory = new File(InstrumentationRegistry.getInstrumentation().getTargetContext().getExternalFilesDir(null), "screenshots");
        assertTrue(directory.mkdirs() || directory.isDirectory());
        try (FileOutputStream output = new FileOutputStream(new File(directory, name))) {
            assertTrue(image.compress(Bitmap.CompressFormat.PNG, 100, output));
        }
    }

    private String evaluate(ActivityScenario<MainActivity> scenario, String script) throws Exception {
        ArrayBlockingQueue<String> result = new ArrayBlockingQueue<>(1);
        scenario.onActivity(activity -> ((WebView) activity.findViewById(WEBVIEW_ID)).evaluateJavascript(script, value -> result.offer(value == null ? "" : value.replace("\"", ""))));
        String value = result.poll(5, TimeUnit.SECONDS);
        assertTrue("WebView did not answer", value != null);
        return value;
    }
}
