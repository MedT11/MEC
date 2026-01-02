import product1 from '../../public/1stproduit.png'
import product2 from '../../public/EASYWELLMOTOR.jpg'
import product3 from '../../public/e622.png'
import product4 from '../../public/E.KX_-2 (1).png'
import product5 from '../../public/MAC 6 ÷ 14 Series.png'
import product6 from '../../public/K+ DN 40.jpg'
import product7 from '../../public/MC4.png'
import product8 from '../../public/p6-p18.png'
import caprariImage from '../../public/CAPRARI P.P.png'

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
    image: product1,
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
    image: product2,
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
    image: product3,
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
    image: product4,
    featured: false,
    badge: null
  },
  {
    id: 5,
    name: "MAC 6 ÷ 14 Series",
    category: "Pompage d'eau",
    productType: "moteur",
    shortDescription: "6\" ÷ 14\" Moteurs submersibles",
    description: "La gamme de moteurs submersibles réenroulables remplis d'eau 6\" ÷ 14\". Les hautes performances au sommet du marché assurent des économies d'énergie élevées. La conception, le projet électrique et les brevets internationaux Caprari sont une garantie de robustesse et de fiabilité dans le temps. Disponibles dans différents matériaux et configurations. La version avec enroulements PE2+PA est idéale pour les applications avec eau chaude ou onduleur. Également disponible en moyenne tension pour les applications en agriculture, industrie et généralement où des puissances élevées et de longs câbles d'alimentation sont requis. Ils ont les mêmes particularités que les moteurs basse tension mais avec tous les avantages de la moyenne tension.",
    fichetechnique: {
      "Puissance jusqu'à": "440 kW",
      "Résistance à la poussée axiale jusqu'à": "80.000 N",
      "Température du liquide jusqu'à": "65 °C"
    },
    image: product5,
    featured: false,
    badge: null
  },
  {
    id: 6,
    name: "K+ DN 40 ÷ DN 500 Series",
    category: "Pompage d'eau",
    productType: "hydraulique",
    shortDescription: "Pompes électriques submersibles - Série K+ Energy",
    description: "La large gamme de la série K+ est conçue pour pomper les eaux usées contenant des gaz et des solides. L'excellente performance des profils hydrauliques assure une efficacité maximale. La taille compacte spéciale de la pompe assure une fiabilité totale et une facilité d'installation. Les pompes K+ Energy sont conçues pour assurer une efficacité premium grâce aux moteurs d'efficacité IE3. Le système de refroidissement breveté \"DryWet\" permet une utilisation à la fois en réservoir et en chambre sèche. Une fiabilité extrême, une robustesse et une durabilité grâce au système breveté d'anti-colmatage non-stop K+. Idéale pour le traitement et le transport des eaux usées, industries et eaux pluviales. La gamme K+ ENERGY est maintenant plus étendue grâce aux nouveaux modèles de pompes électriques avec roue ouverte à deux pales, qui assurent une excellente efficacité supérieure à 80%. La version avec roue en acier inoxydable est également disponible, adaptée aux applications lourdes avec des liquides agressifs.",
    fichetechnique: {
      "Débit jusqu'à": "1700 l/s",
      "Hauteur de refoulement jusqu'à": "76 m",
      "Puissance jusqu'à": "345 kW",
      "Fréquence": "50/60 Hz"
    },
    image: product6,
    featured: false,
    badge: null
  },
  {
    id: 7,
    name: "MC 4 Series",
    category: "Pompage d'eau",
    productType: "moteur",
    shortDescription: "4\" Moteurs submersibles",
    description: "La gamme de moteurs submersibles monophasés et triphasés 4\". Ils sont conçus pour couplage aux pompes Caprari 4\", en conformité avec la norme internationale NEMA 4. Les hautes performances au sommet du marché assurent des économies d'énergie élevées.",
    fichetechnique: {
      "Diamètre": "4\"",
      "Type": "Moteur submersible",
      "Compatibilité": "Pompes Caprari 4\" - Standard NEMA 4",
      "Performance": "Classe premium pour économies d'énergie",
      "Application": "Puits et forages"
    },
    image: product7,
    featured: false,
    badge: null
  },
  {
    id: 8,
    name: "P6 – P18 Series",
    category: "Pompage d'eau",
    productType: "hydraulique",
    shortDescription: "6\" ÷ 22\" Pompes verticales à arbre creux",
    description: "La gamme de pompes verticales à arbre creux 6\" ÷ 22\". La configuration avec pompe immergée, arbre creux et groupe de commande en surface représente une solution extrêmement fiable avec rendement élevé. Les pompes de la série P sont disponibles en différentes métallurgies et peuvent être commandées par moteurs électriques et endothermiques, garantissant une grande flexibilité d'utilisation pour les puits et les réservoirs. Idéale pour l'irrigation, l'alimentation en eau, l'industrie et les systèmes de lutte contre l'incendie.",
    fichetechnique: {
      "Débit jusqu'à": "350 l/s",
      "Hauteur jusqu'à": "280 m",
      "Puissance jusqu'à": "450 kW",
      "Efficacité supérieure à": "84%"
    },
    image: product8,
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
  { id: "hydraulique", label: "Partie hydraulique" },
  { id: "promotions", label: "Notre Offre Spéciale" }
]
