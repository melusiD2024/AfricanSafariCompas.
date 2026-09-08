# African Safari Compass for Android

This is the native Android shell for the existing Safari Compass application.

Requirements: Android Studio Ladybug or newer, Android SDK 35, and JDK 17.

Open the `android` directory in Android Studio, allow Gradle sync to finish, then select **Build > Build APK(s)**. The debug APK is created at `app/build/outputs/apk/debug/app-debug.apk`.

The application ID is `africa.safaricompass.app`. The web application is packaged from the repository's `dist` directory at build time. Location permission powers the SOS location feature, and the native share sheet is exposed to the packaged interface.
