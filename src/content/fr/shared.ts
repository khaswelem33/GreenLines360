import type { SharedContent } from "../types";

const shared: SharedContent = {
  brand: {
    siteName: "Green Lines for Investment",
    nameLatin: "Green Lines for Investment",
    nameArabic: "جرين لاينز للاستثمار",
    tagline: "Where Growth Meets Precision",
    taglineLocalized: "Là où la croissance rencontre la précision",
  },
  navigation: {
    main: [
      { key: "home", label: "Accueil", href: "/" },
      { key: "about", label: "À propos", href: "/about" },
      {
        key: "businessSectors",
        label: "Secteurs d'activité",
        href: "/business-sectors",
        hasMegaMenu: true,
      },
      {
        key: "qualitySustainability",
        label: "Qualité et durabilité",
        href: "/quality-sustainability",
      },
      {
        key: "leadership",
        label: "Direction et gouvernance",
        href: "/leadership",
        dropdown: [
          { key: "overview", label: "Aperçu", href: "/leadership" },
          {
            key: "chairmanMessage",
            label: "Message du Président",
            href: "/leadership/chairman-message",
          },
          {
            key: "governanceFramework",
            label: "Cadre de gouvernance",
            href: "/leadership/governance-framework",
          },
          {
            key: "advisoryCouncil",
            label: "Conseil consultatif",
            href: "/leadership/advisory-council",
          },
          {
            key: "expertNetwork",
            label: "Réseau d'experts",
            href: "/leadership/expert-network",
          },
          {
            key: "coreTeams",
            label: "Équipes clés",
            href: "/leadership/core-teams",
          },
          {
            key: "organizationStructure",
            label: "Structure organisationnelle",
            href: "/leadership/organization-structure",
          },
        ],
      },
      { key: "contact", label: "Contact", href: "/contact" },
    ],
    login: "Connexion",
    menuLabel: "Menu",
    closeLabel: "Fermer le menu",
    megaMenus: {
      businessSectors: {
        eyebrow: "Secteurs d'activité",
        title: "De la terre à la valeur",
        description:
          "Un écosystème d'activités intégré, de l'agriculture à la transformation, la conservation et la qualité.",
        ctaLabel: "Explorer les secteurs",
        ctaHref: "/business-sectors",
        sectors: [
          {
            key: "agricultureLandReclamation",
            title: "Agriculture et mise en valeur des terres",
            description:
              "Mise en valeur des terres, cultures de plein champ et sous serre, production végétale et infrastructures d'irrigation.",
            href: "/business-sectors#agriculture-land-reclamation",
            icon: "sprout",
          },
          {
            key: "foodManufacturing",
            title: "Transformation alimentaire",
            description:
              "Tri, nettoyage, séchage, conditionnement, emballage et transformation agroalimentaire.",
            href: "/business-sectors#food-manufacturing",
            icon: "factory",
          },
          {
            key: "coldChainStorage",
            title: "Chaîne du froid et stockage",
            description:
              "Réfrigération, congélation, conservation, stockage, manutention et reconditionnement des produits alimentaires.",
            href: "/business-sectors#cold-chain-storage",
            icon: "snowflake",
          },
          {
            key: "qualityFoodSafety",
            title: "Qualité et sécurité alimentaire",
            description:
              "Systèmes de qualité et de sécurité alimentaire, inspection, contrôle qualité et mise en conformité aux normes internationales.",
            href: "/quality-sustainability#quality-food-safety",
            icon: "shield-check",
          },
          {
            key: "industrialInfrastructure",
            title: "Infrastructures industrielles et ingénierie",
            description:
              "Solutions d'ingénierie et industrielles pour les usines, les lignes de production, la manutention et les infrastructures.",
            href: "/business-sectors#industrial-infrastructure",
            icon: "building",
          },
          {
            key: "environmentalFacilityServices",
            title: "Services environnementaux et de sites",
            description:
              "Recyclage, nettoyage des sites, lutte antiparasitaire, désinfection et stérilisation.",
            href: "/business-sectors#environmental-facility-services",
            icon: "recycle",
          },
        ],
      },
    },
  },
  cta: {
    login: "Connexion",
    contact: "Nous contacter",
    learnMore: "En savoir plus",
    backHome: "Retour à l'accueil",
  },
  footer: {
    blurb:
      "Un groupe d'investissement spécialisé dans le développement des chaînes de valeur agroalimentaires — de l'agriculture intelligente à la transformation, au stockage frigorifique et à l'export — avec un engagement constant envers la qualité, la sécurité alimentaire et la durabilité.",
    columns: [
      {
        heading: "Entreprise",
        links: [
          { key: "about", label: "À propos", href: "/about" },
          {
            key: "leadership",
            label: "Direction et gouvernance",
            href: "/leadership",
          },
          { key: "contact", label: "Contact", href: "/contact" },
        ],
      },
      {
        heading: "Activités",
        links: [
          {
            key: "businessSectors",
            label: "Secteurs d'activité",
            href: "/business-sectors",
          },
          {
            key: "qualitySustainability",
            label: "Qualité et durabilité",
            href: "/quality-sustainability",
          },
        ],
      },
    ],
    standardsCaption: "Fondé sur des normes internationales",
    rightsReserved: "Tous droits réservés.",
  },
  languageSwitcherLabel: "Langue",
};

export default shared;
