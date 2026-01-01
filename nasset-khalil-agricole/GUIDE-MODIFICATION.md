# 📝 Guide de Modification Rapide

## Fichiers Importants à Connaître

### 1. Produits (`src/data/products.js`)
**Ce que vous pouvez faire :**
- Ajouter de nouveaux produits
- Modifier les descriptions
- Changer les fiches techniques
- Mettre à jour les catégories

**Exemple d'ajout de produit :**
```javascript
{
  id: 10,
  name: "Nouveau Produit",
  category: "Pompage d'eau",
  shortDescription: "Description courte",
  description: "Description complète du produit...",
  fichetechnique: {
    puissance: "15 HP",
    debit: "200 m³/h",
    // ... autres caractéristiques
  },
  image: "/images/nouveau-produit.jpg",
  featured: true  // true = apparaît sur la page d'accueil
}
```

### 2. Navigation (`src/components/Navbar.jsx`)

**Téléphone dans le header (ligne ~31) :**
```javascript
<Text>+213 XXX XXX XXX</Text>
```

**Nom de l'entreprise (lignes ~73-82) :**
```javascript
<Text fontSize="xl" fontWeight="bold">
  NASSET & KHALIL
</Text>
<Text fontSize="sm">
  Vente des Équipements Agricoles
</Text>
```

### 3. Page d'Accueil (`src/pages/Home.jsx`)

**Hero Section - Titre principal (ligne ~56) :**
```javascript
<Heading fontSize={{ base: '3xl', md: '5xl' }}>
  SOCIÉTÉ NASSET & KHALIL
  <br />
  DE COMMERCE
</Heading>
```

**Hero Section - Sous-titre (ligne ~63) :**
```javascript
<Text fontSize={{ base: 'lg', md: 'xl' }}>
  Vente des Équipements Agricoles
</Text>
```

### 4. Page Contact (`src/pages/Contact.jsx`)

**Téléphone (ligne ~88) :**
```javascript
<Text fontWeight="semibold">+213 XXX XXX XXX</Text>
```

**Email (ligne ~107) :**
```javascript
<Text fontWeight="semibold">contact@nasset-khalil.dz</Text>
```

**Adresse (ligne ~126) :**
```javascript
<Text fontWeight="semibold">Algérie</Text>
```

**Nom du directeur (ligne ~238) :**
```javascript
<Text fontWeight="semibold">M. NASSET / M. KHALIL</Text>
<Text fontSize="sm">Directeurs</Text>
```

**Téléphone direct (ligne ~244) :**
```javascript
<Text fontWeight="semibold">+213 XXX XXX XXX</Text>
```

**Email du directeur (ligne ~252) :**
```javascript
<Text fontWeight="semibold">direction@nasset-khalil.dz</Text>
```

### 5. Footer (`src/components/Footer.jsx`)

**Informations de contact (lignes ~50-60) :**
```javascript
<Text fontSize="sm">+213 XXX XXX XXX</Text>
<Text fontSize="sm">contact@nasset-khalil.dz</Text>
<Text fontSize="sm">Algérie</Text>
```

## 🎨 Personnalisation des Couleurs

### Fichier : `src/main.jsx`

**Changer le vert principal :**
```javascript
green: {
  primary: '#2d6a4f',    // Vert foncé
  secondary: '#52b788',  // Vert clair
  dark: '#1b4332',       // Vert très foncé
  light: '#74c69d',      // Vert très clair
}
```

**Couleurs Chakra UI (plus de nuances) :**
```javascript
brand: {
  500: '#4caf50',  // Couleur principale
  600: '#43a047',  // Pour les hover
  700: '#388e3c',  // Pour les états actifs
  // ...
}
```

## 📸 Gestion des Images

### Structure recommandée :
```
public/
└── images/
    ├── pompe-diesel.jpg
    ├── pompe-electrique.jpg
    ├── motopompe.jpg
    ├── tracteur.jpg
    ├── irrigation.jpg
    ├── pulverisateur.jpg
    ├── charrue.jpg
    ├── moissonneuse.jpg
    └── semoir.jpg
```

### Dans le code (`src/data/products.js`) :
```javascript
image: "/images/nom-du-fichier.jpg"
```

## 🔧 Modifications Courantes

### Ajouter un lien dans la navigation

**Fichier : `src/components/Navbar.jsx` (ligne ~268)**
```javascript
const NAV_ITEMS = [
  { label: 'Accueil', href: '/' },
  { label: 'Produits', href: '/products' },
  { label: 'À Propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
  // Ajoutez le vôtre ici :
  { label: 'Nouveau', href: '/nouveau' },
]
```

### Modifier les heures d'ouverture

**Fichier : `src/pages/Contact.jsx` (lignes ~145-147)**
```javascript
<Text fontSize="sm">Lun - Sam</Text>
<Text fontSize="sm">8h00 - 18h00</Text>
<Text fontSize="sm">Dimanche: Fermé</Text>
```

### Changer le texte des boutons

Recherchez dans les fichiers le texte du bouton, par exemple :
```javascript
<Button>Contactez-nous</Button>
```

Et remplacez par :
```javascript
<Button>Appelez-nous</Button>
```

## 🌍 Traductions

Le site est actuellement en français. Pour traduire :

1. **Page d'accueil** : `src/pages/Home.jsx`
2. **Produits** : `src/pages/Products.jsx`
3. **Contact** : `src/pages/Contact.jsx`
4. **À propos** : `src/pages/About.jsx`
5. **Navigation** : `src/components/Navbar.jsx`
6. **Footer** : `src/components/Footer.jsx`

## 📱 Réseaux Sociaux

**Fichier : `src/components/Footer.jsx` (lignes ~33-43)**
```javascript
<Link href="https://facebook.com/votre-page" isExternal>
  <Icon as={FaFacebook} />
</Link>
<Link href="https://instagram.com/votre-compte" isExternal>
  <Icon as={FaInstagram} />
</Link>
<Link href="https://linkedin.com/company/votre-entreprise" isExternal>
  <Icon as={FaLinkedin} />
</Link>
```

## 🎯 Points de Personnalisation Prioritaires

1. ✅ **Téléphone** - 4 endroits à modifier
2. ✅ **Email** - 3 endroits à modifier
3. ✅ **Adresse** - 3 endroits à modifier
4. ✅ **Nom du directeur** - 1 endroit
5. ✅ **Images produits** - Dossier public/images/
6. ✅ **Fiches techniques** - src/data/products.js
7. ✅ **Heures d'ouverture** - Page Contact
8. ✅ **Réseaux sociaux** - Footer

## 💡 Astuces

- **Recherche globale** : Utilisez Ctrl+Shift+F dans VS Code pour trouver du texte dans tous les fichiers
- **Sauvegarde automatique** : Le serveur Vite recharge automatiquement après chaque modification
- **Erreurs** : Consultez la console du navigateur (F12) en cas de problème
- **Format** : Utilisez Shift+Alt+F pour formatter automatiquement le code

---

**Bon développement ! 🚀**
