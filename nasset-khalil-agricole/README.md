# SOCIÉTÉ NASSET & KHALIL DE COMMERCE
## Vente des Équipements Agricoles

Site web e-commerce statique moderne pour la vente d'équipements agricoles en Algérie.

## 🌾 Fonctionnalités

- **Page d'accueil** avec hero section et produits vedettes
- **Catalogue de produits** avec système de filtrage et recherche
- **Pages détaillées des produits** avec fiches techniques complètes
- **Page À propos** présentant l'entreprise et ses valeurs
- **Page Contact** avec formulaire et coordonnées du directeur
- Design responsive adapté à tous les écrans
- Thème vert agricole professionnel
- Navigation intuitive

## 🛠️ Technologies Utilisées

- **React 18** - Framework JavaScript moderne
- **Vite** - Build tool ultra-rapide
- **Chakra UI** - Bibliothèque de composants UI
- **React Router** - Navigation entre les pages
- **React Icons** - Icônes professionnelles
- **Framer Motion** - Animations fluides

## 📦 Installation

1. Installez les dépendances :
```bash
npm install
```

2. Lancez le serveur de développement :
```bash
npm run dev
```

3. Ouvrez votre navigateur à l'adresse : `http://localhost:3000`

## 🚀 Build pour la Production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`

Pour prévisualiser la build de production :

```bash
npm run preview
```

## 📁 Structure du Projet

```
nasset-khalil-agricole/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Navbar.jsx      # Barre de navigation
│   │   └── Footer.jsx      # Pied de page
│   ├── pages/              # Pages de l'application
│   │   ├── Home.jsx        # Page d'accueil
│   │   ├── Products.jsx    # Catalogue de produits
│   │   ├── ProductDetail.jsx  # Détails d'un produit
│   │   ├── About.jsx       # À propos de l'entreprise
│   │   └── Contact.jsx     # Page de contact
│   ├── data/               # Données des produits
│   │   └── products.js     # Base de données produits
│   ├── App.jsx             # Composant principal
│   ├── main.jsx            # Point d'entrée
│   └── index.css           # Styles globaux
├── public/                 # Fichiers statiques
├── index.html             # Template HTML
├── package.json           # Dépendances
└── vite.config.js         # Configuration Vite
```

## 📝 Produits Disponibles

Le site présente actuellement 9 catégories de produits :

1. **Pompage d'eau**
   - Pompe à eau diesel
   - Pompe à eau électrique
   - Motopompe essence

2. **Machines agricoles**
   - Tracteur agricole
   - Pulvérisateur agricole
   - Moissonneuse-batteuse
   - Semoir de précision

3. **Irrigation**
   - Système d'irrigation goutte à goutte

4. **Outils de labour**
   - Charrue agricole

## 🎨 Personnalisation

### Modifier les Produits

Éditez le fichier `src/data/products.js` pour ajouter, modifier ou supprimer des produits.

### Changer les Couleurs

Les couleurs du thème sont définies dans `src/main.jsx`. Modifiez l'objet `theme` pour personnaliser les couleurs.

### Ajouter des Images

Placez vos images dans le dossier `public/images/` et mettez à jour les chemins dans `src/data/products.js`.

## 📞 Informations de Contact

Pour mettre à jour les coordonnées de contact :
- Modifiez `src/components/Navbar.jsx` (téléphone dans le header)
- Modifiez `src/components/Footer.jsx` (informations du footer)
- Modifiez `src/pages/Contact.jsx` (page de contact complète)

## 🌐 Déploiement

Ce site peut être déployé sur :
- **Netlify** - Déposez le dossier `dist/` après build
- **Vercel** - Connectez votre repository GitHub
- **GitHub Pages** - Configurez avec GitHub Actions
- N'importe quel hébergeur statique

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (320px et plus)
- 📱 Tablette (768px et plus)
- 💻 Desktop (1024px et plus)
- 🖥️ Large Desktop (1280px et plus)

## 🔧 Support

Pour toute question ou assistance technique, contactez l'équipe de développement.

## 📄 Licence

© 2024 Société Nasset & Khalil de Commerce. Tous droits réservés.

---

**Note:** Ce site est un site vitrine statique. Les fonctionnalités e-commerce complètes (panier, paiement) peuvent être ajoutées ultérieurement.
