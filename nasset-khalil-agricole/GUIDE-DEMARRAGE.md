# 🚀 Guide de Démarrage Rapide

## Étape 1 : Installer les Dépendances

Ouvrez un terminal dans le dossier `nasset-khalil-agricole` et exécutez :

```bash
npm install
```

Cela installera toutes les dépendances nécessaires :
- React 18
- Chakra UI
- React Router
- React Icons
- Framer Motion
- Vite

## Étape 2 : Lancer le Serveur de Développement

Une fois l'installation terminée, lancez :

```bash
npm run dev
```

Le site sera accessible à l'adresse : **http://localhost:3000**

## Étape 3 : Ajouter Vos Images

Pour remplacer les icônes par vos vraies images de produits :

1. Créez un dossier `public/images/` dans le projet
2. Ajoutez vos images de produits (pompes, tracteurs, etc.)
3. Nommez-les comme indiqué dans `src/data/products.js` :
   - pompe-diesel.jpg
   - pompe-electrique.jpg
   - motopompe.jpg
   - tracteur.jpg
   - irrigation.jpg
   - pulverisateur.jpg
   - charrue.jpg
   - moissonneuse.jpg
   - semoir.jpg

## Étape 4 : Personnaliser le Contenu

### Modifier les Informations de Contact

**Dans `src/components/Navbar.jsx` (ligne ~31) :**
```javascript
<Text>+213 XXX XXX XXX</Text>
```
Remplacez par votre vrai numéro de téléphone.

**Dans `src/pages/Contact.jsx` :**
- Lignes 88-89 : Numéro de téléphone
- Ligne 107 : Email
- Ligne 126 : Adresse complète
- Ligne 238 : Nom du directeur
- Ligne 244 : Téléphone direct du directeur
- Ligne 252 : Email du directeur

### Modifier les Produits

Éditez `src/data/products.js` pour :
- Ajouter de nouveaux produits
- Modifier les descriptions
- Changer les fiches techniques
- Ajuster les prix (si vous voulez les afficher)

### Personnaliser les Couleurs

Dans `src/main.jsx`, modifiez le thème Chakra UI :
```javascript
const theme = extendTheme({
  colors: {
    green: {
      primary: '#2d6a4f',  // Vert principal
      secondary: '#52b788', // Vert secondaire
      // ...
    }
  }
})
```

## 📱 Tester sur Mobile

Une fois le serveur lancé, vous pouvez tester sur mobile :

1. Trouvez l'adresse IP de votre ordinateur
2. Sur votre téléphone, ouvrez : `http://[VOTRE-IP]:3000`
3. Exemple : `http://192.168.1.100:3000`

## 🏗️ Créer la Version de Production

Quand vous êtes prêt à mettre en ligne :

```bash
npm run build
```

Cela crée un dossier `dist/` optimisé que vous pouvez déployer sur :
- Netlify (gratuit)
- Vercel (gratuit)
- Votre propre serveur

## 🆘 Problèmes Courants

### L'installation échoue
```bash
# Effacez le cache npm et réessayez
npm cache clean --force
npm install
```

### Le port 3000 est déjà utilisé
Le serveur Vite choisira automatiquement un autre port (3001, 3002, etc.)

### Les images ne s'affichent pas
- Vérifiez que le dossier `public/images/` existe
- Vérifiez les noms de fichiers dans `src/data/products.js`
- Les chemins doivent commencer par `/images/`

## 📚 Documentation

- [React](https://react.dev)
- [Chakra UI](https://chakra-ui.com)
- [Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com)

## ✅ Checklist Avant Mise en Ligne

- [ ] Tous les numéros de téléphone sont corrects
- [ ] Toutes les adresses email sont correctes
- [ ] Les images des produits sont ajoutées
- [ ] L'adresse physique est complète
- [ ] Les fiches techniques sont à jour
- [ ] Les horaires d'ouverture sont corrects
- [ ] Le site fonctionne sur mobile
- [ ] Tous les liens fonctionnent

---

**Besoin d'aide ?** Consultez le README.md principal pour plus d'informations.
