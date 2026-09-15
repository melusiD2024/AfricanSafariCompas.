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

    @Test public void pocketbookCircleTravelHealthAndMapJourneyRenders() throws Exception {
        try (ActivityScenario<MainActivity> scenario = ActivityScenario.launch(MainActivity.class)) {
            SystemClock.sleep(1800);
            assertView(scenario, "pocketbook");
            open(scenario, "circle");
            assertView(scenario, "circle");
            open(scenario, "travelHealth");
            assertView(scenario, "travelHealth");
            open(scenario, "map");
            assertView(scenario, "map");
            File directory = new File(InstrumentationRegistry.getInstrumentation().getTargetContext().getExternalFilesDir(null), "screenshots");
            assertTrue(directory.mkdirs() || directory.isDirectory());
            Bitmap image = InstrumentationRegistry.getInstrumentation().getUiAutomation().takeScreenshot();
            try (FileOutputStream output = new FileOutputStream(new File(directory, "map-screen.png"))) {
                assertTrue(image.compress(Bitmap.CompressFormat.PNG, 100, output));
            }
        }
    }

    private void open(ActivityScenario<MainActivity> scenario, String view) throws Exception {
        evaluate(scenario, "window.openPocketbookView('" + view + "');'ok'");
        SystemClock.sleep(350);
    }

    private void assertView(ActivityScenario<MainActivity> scenario, String expected) throws Exception {
        assertEquals(expected, evaluate(scenario, "document.querySelector('.view.active').id"));
    }

    private String evaluate(ActivityScenario<MainActivity> scenario, String script) throws Exception {
        ArrayBlockingQueue<String> result = new ArrayBlockingQueue<>(1);
        scenario.onActivity(activity -> ((WebView) activity.findViewById(WEBVIEW_ID)).evaluateJavascript(script, value -> result.offer(value == null ? "" : value.replace("\"", ""))));
        String value = result.poll(5, TimeUnit.SECONDS);
        assertTrue("WebView did not answer", value != null);
        return value;
    }
}
