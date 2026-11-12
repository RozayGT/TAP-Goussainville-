# TAP Goussainville 2027-2028 : version 1.0

## A. Mettre les fichiers sur GitHub
1. Allez sur github.com et créez un compte (ou connectez-vous).
2. En haut à droite, **+** puis **New repository**.
3. Repository name : `tap-goussainville`. Cochez **Public** (obligatoire pour Pages gratuit). Cliquez **Create repository**.
4. Sur la page du dépôt, cliquez **uploading an existing file**.
5. Glissez TOUS les fichiers : `index.html`, `sw.js`, `manifest.webmanifest`, `favicon.png`, `icon-180.png`, `icon-192.png`, `icon-512.png`.
6. En bas : **Commit changes**.
7. **Settings** > **Pages** (menu de gauche) > Source : **Deploy from a branch** > Branch : `main` + `/ (root)` > **Save**.
8. Attendez 1 à 2 minutes et actualisez : l'adresse apparaît en haut : `https://VOTRE-COMPTE.github.io/tap-goussainville/`.

## B. Partager le planning (Firebase, gratuit)
1. Allez sur console.firebase.google.com, connectez-vous avec un compte Google.
2. **Créer un projet** > nom `tap-goussainville` > désactivez Google Analytics > **Créer**.
3. Menu **Build** > **Firestore Database** > **Créer une base de données** > emplacement `eur3 (europe-west)` > **Mode production** > **Activer**.
4. Onglet **Règles** : remplacez tout par le texte ci-dessous, puis **Publier**.
```
rules_version = '2';
service cloud.firestore { match /databases/{d}/documents { match /planning/{id} { allow read, write: if true; } } }
```
5. Roue dentée à côté de « Vue d'ensemble du projet » > **Paramètres du projet** > en bas **Vos applications** > icône **</>** (Web) > surnom `tap` > **Enregistrer l'application**.
6. Copiez les valeurs `apiKey`, `authDomain`, `projectId`, `appId`.
7. Sur GitHub, ouvrez `index.html` > crayon ✏️ (Edit) > cherchez `const CFG=` (Ctrl+F) > collez les 4 valeurs entre les guillemets > **Commit changes**.
8. Rouvrez l'appli : le message « ✅ Planning partagé » doit apparaître en bas.

Attention : avec ces règles, toute personne qui a l'adresse peut modifier le planning. Ne diffusez le lien qu'à l'équipe.

## C. Installer sur le téléphone
- iPhone (Safari) : Partager > **Sur l'écran d'accueil**.
- Android (Chrome) : menu ⋮ > **Installer l'application**.

## D. Modifier l'appli pour tout le monde (sans re-télécharger)
1. Sur GitHub, ouvrez `index.html` > crayon ✏️ > modifiez > **Commit changes**
   (ou **Add file > Upload files** avec le nouveau `index.html`, même nom).
2. C'est tout : la version augmente toute seule (1.0 → 1.1 → 1.2…), elle se calcule à partir du nombre de mises à jour de `index.html` sur GitHub.
3. Après 1 à 2 minutes, chaque collègue voit « Nouvelle version disponible » en ouvrant l'appli et appuie sur **Actualiser**. Rien à télécharger ni à réinstaller.

Chaque enregistrement de `index.html` compte pour une version : regroupez vos corrections en un seul envoi si vous ne voulez pas sauter de numéros.
Les données du planning ne sont jamais effacées par une mise à jour.
