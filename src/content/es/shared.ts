import type { SharedContent } from "../types";

const shared: SharedContent = {
  brand: {
    siteName: "Green Lines for Investment",
    nameLatin: "Green Lines for Investment",
    nameArabic: "جرين لاينز للاستثمار",
    tagline: "Where Growth Meets Precision",
    taglineLocalized: "Donde el crecimiento se une a la precisión",
  },
  navigation: {
    main: [
      { key: "home", label: "Inicio", href: "/" },
      { key: "about", label: "Quiénes somos", href: "/about" },
      {
        key: "businessSectors",
        label: "Sectores de negocio",
        href: "/business-sectors",
        hasMegaMenu: true,
      },
      {
        key: "qualitySustainability",
        label: "Calidad y sostenibilidad",
        href: "/quality-sustainability",
      },
      {
        key: "leadership",
        label: "Liderazgo y gobernanza",
        href: "/leadership",
        dropdown: [
          { key: "overview", label: "Visión general", href: "/leadership" },
          {
            key: "chairmanMessage",
            label: "Mensaje del Presidente",
            href: "/leadership/chairman-message",
          },
          {
            key: "governanceFramework",
            label: "Marco de gobernanza",
            href: "/leadership/governance-framework",
          },
          {
            key: "advisoryCouncil",
            label: "Consejo asesor",
            href: "/leadership/advisory-council",
          },
          {
            key: "expertNetwork",
            label: "Red de expertos",
            href: "/leadership/expert-network",
          },
          {
            key: "coreTeams",
            label: "Equipos clave",
            href: "/leadership/core-teams",
          },
          {
            key: "organizationStructure",
            label: "Estructura organizativa",
            href: "/leadership/organization-structure",
          },
        ],
      },
      { key: "contact", label: "Contacto", href: "/contact" },
    ],
    login: "Iniciar sesión",
    menuLabel: "Menú",
    closeLabel: "Cerrar el menú",
    megaMenus: {
      businessSectors: {
        eyebrow: "Sectores de negocio",
        title: "De la tierra al valor",
        description:
          "Un ecosistema de negocio integrado: de la agricultura a la transformación, la conservación y la calidad.",
        ctaLabel: "Explorar los sectores",
        ctaHref: "/business-sectors",
        sectors: [
          {
            key: "agricultureLandReclamation",
            title: "Agricultura y recuperación de tierras",
            description:
              "Recuperación de tierras, agricultura al aire libre y protegida, producción de cultivos e infraestructura de riego.",
            href: "/business-sectors#agriculture-land-reclamation",
            icon: "sprout",
          },
          {
            key: "foodManufacturing",
            title: "Industria alimentaria",
            description:
              "Clasificación, limpieza, secado, envasado, embalaje y procesamiento agroalimentario.",
            href: "/business-sectors#food-manufacturing",
            icon: "factory",
          },
          {
            key: "coldChainStorage",
            title: "Cadena de frío y almacenamiento",
            description:
              "Refrigeración, congelación, conservación, almacenamiento, manipulación y reenvasado de productos alimentarios.",
            href: "/business-sectors#cold-chain-storage",
            icon: "snowflake",
          },
          {
            key: "qualityFoodSafety",
            title: "Calidad y seguridad alimentaria",
            description:
              "Sistemas de calidad y seguridad alimentaria, inspección, control de calidad y preparación para normas internacionales.",
            href: "/quality-sustainability#quality-food-safety",
            icon: "shield-check",
          },
          {
            key: "industrialInfrastructure",
            title: "Infraestructura industrial e ingeniería",
            description:
              "Soluciones de ingeniería e industriales para fábricas, líneas de producción, manipulación e infraestructura.",
            href: "/business-sectors#industrial-infrastructure",
            icon: "building",
          },
          {
            key: "environmentalFacilityServices",
            title: "Servicios ambientales y de instalaciones",
            description:
              "Reciclaje, limpieza de instalaciones, control de plagas, desinfección y esterilización.",
            href: "/business-sectors#environmental-facility-services",
            icon: "recycle",
          },
        ],
      },
    },
  },
  cta: {
    login: "Iniciar sesión",
    contact: "Contáctenos",
    learnMore: "Saber más",
    backHome: "Volver al inicio",
  },
  footer: {
    blurb:
      "Un grupo de inversión especializado en el desarrollo de cadenas de valor agroalimentarias — desde la agricultura inteligente hasta la transformación, el almacenamiento en frío y la exportación — con un compromiso firme con la calidad, la seguridad alimentaria y la sostenibilidad.",
    columns: [
      {
        heading: "Empresa",
        links: [
          { key: "about", label: "Quiénes somos", href: "/about" },
          {
            key: "leadership",
            label: "Liderazgo y gobernanza",
            href: "/leadership",
          },
          { key: "contact", label: "Contacto", href: "/contact" },
        ],
      },
      {
        heading: "Negocio",
        links: [
          {
            key: "businessSectors",
            label: "Sectores de negocio",
            href: "/business-sectors",
          },
          {
            key: "qualitySustainability",
            label: "Calidad y sostenibilidad",
            href: "/quality-sustainability",
          },
        ],
      },
    ],
    standardsCaption: "Basado en normas internacionales",
    rightsReserved: "Todos los derechos reservados.",
  },
  languageSwitcherLabel: "Idioma",
};

export default shared;
