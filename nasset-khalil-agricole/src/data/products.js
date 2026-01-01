export const products = [
  {
    id: 1,
    name: "Série DESERT ENERGY E4X-E6X",
    category: "Pompage d'eau",
    productType: "hydraulique", // "moteur", "hydraulique", or null for promotions only
    shortDescription: "Pompes immergées 4\" et 6\"",
    description: "La gamme d'électropompes immergées 4\" et 6\" de la série DESERT ENERGY constitue la meilleure solution pour les applications à forte teneur en matières solides et en sable, jusqu'à 450 g/m³. Les meilleures performances du marché et les solutions innovantes brevetées garantissent la fiabilité et la durabilité. L'accouplement avec les moteurs immergés Caprari est gage d'économies d'énergie élevées. Idéales pour les puits de petite et moyenne taille pour l'irrigation et les applications solaires.",
    fichetechnique: {
      "Débit jusqu'à": "12 l/s",
      "Hauteur de refoulement jusqu'à": "690 m",
      "Puissance ~3 jusqu'à": "45 kW",
      "Puissance ~1 jusqu'à": "2,2 kW",
      "Rendement outre": "75%",
      "Contenu de substances solides jusqu'à": "450 g/m³"
    },
    image: "/1stproduit.png",
    featured: true,
    badge: "Promotion" // Options: "Promotion", "Exclusivité", "Spécial", or null
  },
  {
    id: 2,
    name: "EASYWELL MPC10",
    category: "Pompage d'eau",
    productType: "moteur", // "moteur", "hydraulique", or null for promotions only
    shortDescription: "Moteurs submersibles - Engineered by CAPRARI SpA",
    description: "Excellentes performances électriques et fiabilité maximale. Les MPC10 – Engineered by CAPRARI SpA font leur entrée sur le marché pour compléter la gamme MPC6 et MPC8 : ils garantissent au client un produit aux performances exceptionnelles, avec une consommation d'énergie moindre par rapport à la moyenne du secteur et un prix extrêmement compétitif.",
    fichetechnique: {
      "Type": "Moteur submersible",
      "Marque": "CAPRARI SpA",
      "Résistance": "100% - Paliers en composite autolubrifiant à base de graphite",
      "Fiabilité": "100% - Joint mécanique en carbure de silicium",
      "Compatibilité VSD": "100% adapté aux onduleurs (Variable Speed Drive)",
      "Résistance thermique": "Excellente - Conception anti-chocs thermiques",
      "Résistance chimique": "Excellente - Agents chimiques agressifs",
      "Utilisation": "Conditions difficiles et liquides abrasifs",
      "Palier de butée": "Surdimensionné pour charges axiales",
      "Consommation": "Réduite par rapport à la moyenne du secteur"
    },
    image: "/EASYWELLMOTOR.jpg",
    featured: true,
    badge: "Exclusivité" // Options: "Promotion", "Exclusivité", "Spécial", or null
  },
  {
    id: 3,
    name: "E6÷22 Series",
    category: "Pompage d'eau",
    productType: "hydraulique",
    shortDescription: "Pompes de forage 6\" ÷ 22\" en fonte",
    description: "La large gamme de pompes électriques de forage 6\" ÷ 22\" en fonte garantit des performances de référence grâce à l'ingénierie informatisée et aux technologies de production avancées. La conception et les solutions brevetées innovantes assurent fiabilité et durabilité dans le temps. Le couplage avec les moteurs submersibles Caprari garantit des économies d'énergie élevées. Idéales pour l'approvisionnement et le transport d'eau dans tous les secteurs : de l'irrigation aux aqueducs, du civil à l'industriel.",
    fichetechnique: {
      "Débit jusqu'à": "350 l/s",
      "Hauteur jusqu'à": "780 m",
      "Puissance jusqu'à": "440 kW",
      "Efficacité supérieure à": "80%",
      "Quantité de solides jusqu'à": "100 g/m³"
    },
    image: "/e622.png",
    featured: false,
    badge: null
  },
  {
    id: 4,
    name: "EASYWELL E.KX Series",
    category: "Pompage d'eau",
    productType: "hydraulique",
    shortDescription: "Pompes de forage 6\"-8\"-10\" en acier inoxydable embouti",
    description: "Les premières pompes de forage en acier inoxydable embouti 6\"-8\"-10\" de la famille EASYWELL. La gamme de produits est encore enrichie par la série E.KX : robustesse, fiabilité et qualité à un prix compétitif. Le couplage avec les moteurs submersibles de la série MPC garantit d'excellentes performances.",
    fichetechnique: {
      "Débit jusqu'à": "73 l/s",
      "Hauteur jusqu'à": "450 m",
      "Puissance jusqu'à": "150 kW"
    },
    image: "/E.KX_-2 (1).png",
    featured: false,
    badge: null
  }
]

export const categories = [
  "Tous",
  "Pompage d'eau"
]

export const productTypes = [
  { id: "all", label: "Tous les produits" },
  { id: "moteur", label: "Moteurs" },
  { id: "hydraulique", label: "Hydraulique" },
  { id: "promotions", label: "Promotions & Exclusivités" }
]
