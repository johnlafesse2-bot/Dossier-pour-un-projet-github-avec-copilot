# Manga Video

Application web empaquetable pour Android avec Capacitor. Le fichier source de l'interface reste `index.html` a la racine.

## Construire l'APK en local

Prerequis : Node.js 22 ou plus recent, Java 21, Android Studio et Android SDK configure dans l'environnement.

```powershell
npm install
npm run build:apk
```

Le script copie `index.html` dans `www/`, cree le projet Android Capacitor s'il n'existe pas, synchronise les plugins puis genere l'APK debug :

`android/app/build/outputs/apk/debug/app-debug.apk`

## Construire sur GitHub

Publiez ce dossier dans un depot GitHub, puis lancez le workflow **Build Android APK** depuis l'onglet Actions. Le fichier `app-debug.apk` sera disponible dans les artefacts de l'execution.

Le workflow fournit l'APK debug installable. Une APK release signee pour distribution exige une cle de signature Android et sa configuration separee.