Wong Halves — Capacitor project (prepared by assistant)

Included:
- ./www/index.html  (copied from: /mnt/data/Wong_3D_MG_Background_Logo.html)
- ./www/assets/     (images/audio found in /mnt/data were copied here if present)
- package.json
- capacitor.config.json

What you need to build the Android APK locally:
- Node.js (v16+), npm
- Java JDK 11+ (JAVA_HOME set)
- Android Studio (SDK + build-tools)
- Capacitor CLI: npm install -g @capacitor/cli

Quick steps (run in a terminal):

1) Open project folder:
   cd wong-capacitor-project

2) Install Capacitor packages (local dev):
   npm init -y
   npm install @capacitor/core @capacitor/cli

3) Initialize Capacitor (if not already):
   npx cap init "WongHalves" "com.gooba.wong" --web-dir=www

4) Add Android platform:
   npx cap add android

5) Open Android project in Android Studio:
   npx cap open android
   - In Android Studio: Build -> Generate Signed Bundle / APK to create a release-signed APK.
   - Or run on emulator / connected device for testing.

6) If you need a signed release, create a keystore:
   keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias wongkey

7) Build release APK from Android Studio, then sign using apksigner if necessary.

If you want, I can:
- produce a ready-to-install debug APK (unsigned) for testing (I cannot build it here because Android SDK/Gradle is not available),
- or walk you step-by-step by remote commands.

