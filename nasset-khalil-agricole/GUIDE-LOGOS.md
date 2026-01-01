# 📍 GUIDE RAPIDE - PLACEMENT DES LOGOS

## ⚡ EN 3 ÉTAPES SIMPLES

### ÉTAPE 1: Copier les Logos
```
Vos fichiers actuels:
📁 Desktop/STE M.E.C/
  ├── logo.png   ← Ce fichier
  └── logo2.png  ← Ce fichier
```

### ÉTAPE 2: Les Placer dans le Dossier Public
```
Destination:
📁 Desktop/STE M.E.C/nasset-khalil-agricole/
  └── 📁 public/
      ├── logo.png   ← Coller ici
      └── logo2.png  ← Coller ici
```

### ÉTAPE 3: Démarrer le Site
```bash
cd nasset-khalil-agricole
npm run dev
```

---

## 🎯 OÙ SERONT UTILISÉS LES LOGOS

### Logo.png (Petit Logo)
```
┌─────────────────────────────────────┐
│ [LOGO] CENTRALE POMPE TUNISIE  Menu │ ← En haut (50x50px)
├─────────────────────────────────────┤
│                                     │
│    Contenu de la page...            │
│                                     │
├─────────────────────────────────────┤
│ [LOGO] CENTRALE POMPE TUNISIE       │ ← En bas (45x45px)
│ © 2024 Tous droits réservés         │
└─────────────────────────────────────┘
```

### Logo2.png (Grande Image)
```
┌─────────────────────────────────────┐
│                                     │
│  ╔═══════════════════════════════╗  │
│  ║                               ║  │
│  ║   [VOTRE GRANDE IMAGE]        ║  │ ← Page d'accueil
│  ║   Avec texte inclus           ║     (Pleine largeur)
│  ║                               ║  │
│  ║  CENTRALE POMPE TUNISIE       ║  │
│  ║  Vente des Équipements...     ║  │
│  ╚═══════════════════════════════╝  │
│                                     │
└─────────────────────────────────────┘
```

---

## ✅ VÉRIFICATION RAPIDE

### Après avoir placé les logos:
```bash
# Vérifier que les fichiers sont bien là
cd public
dir

# Vous devriez voir:
# logo.png
# logo2.png
```

### Après avoir démarré le serveur:
1. Ouvrir: http://localhost:3000
2. ✅ Voir le logo en haut à gauche
3. ✅ Voir l'image de couverture (logo2)
4. ✅ Scroller en bas, voir le logo dans le footer

---

## 🚨 SI ÇA NE MARCHE PAS

### Problème: Les images ne s'affichent pas
**Solution:**
1. Vérifier les noms: `logo.png` et `logo2.png` (minuscules)
2. Vérifier l'emplacement: dans `public/`, pas ailleurs
3. Rafraîchir: Ctrl + F5 dans le navigateur
4. Redémarrer le serveur: Ctrl+C puis `npm run dev`

---

## 📏 DIMENSIONS RECOMMANDÉES

### Logo.png
- **Taille:** 200x200 pixels minimum
- **Format:** PNG avec fond transparent
- **Poids:** < 100 KB

### Logo2.png
- **Taille:** 1920x1080 pixels (Full HD)
- **Format:** JPG ou PNG
- **Poids:** < 500 KB
- **Contenu:** Texte lisible (overlay sombre sera ajouté)

---

## 🎨 STRUCTURE FINALE

```
nasset-khalil-agricole/
├── public/
│   ├── logo.png      ✅ Petit logo
│   ├── logo2.png     ✅ Grande image
│   └── vite.svg
├── src/
│   ├── components/
│   ├── pages/
│   └── ...
├── package.json
└── README.md
```

---

**C'est tout ! Placez vos 2 images et lancez `npm run dev` ! 🚀**
