import type { SharedContent } from "../types";

const shared: SharedContent = {
  brand: {
    siteName: "Green Lines for Investment",
    nameLatin: "Green Lines for Investment",
    nameArabic: "جرين لاينز للاستثمار",
    tagline: "Where Growth Meets Precision",
    taglineLocalized: "Dove la crescita incontra la precisione",
  },
  navigation: {
    main: [
      { key: "home", label: "Home", href: "/" },
      { key: "about", label: "Chi siamo", href: "/about" },
      {
        key: "businessSectors",
        label: "Settori di attività",
        href: "/business-sectors",
        hasMegaMenu: true,
      },
      {
        key: "qualitySustainability",
        label: "Qualità e sostenibilità",
        href: "/quality-sustainability",
      },
      {
        key: "leadership",
        label: "Leadership e governance",
        href: "/leadership",
        dropdown: [
          { key: "overview", label: "Panoramica", href: "/leadership" },
          {
            key: "chairmanMessage",
            label: "Messaggio del Presidente",
            href: "/leadership/chairman-message",
          },
          {
            key: "governanceFramework",
            label: "Quadro di governance",
            href: "/leadership/governance-framework",
          },
          {
            key: "advisoryCouncil",
            label: "Consiglio consultivo",
            href: "/leadership/advisory-council",
          },
          {
            key: "expertNetwork",
            label: "Rete di esperti",
            href: "/leadership/expert-network",
          },
          {
            key: "coreTeams",
            label: "Team principali",
            href: "/leadership/core-teams",
          },
          {
            key: "organizationStructure",
            label: "Struttura organizzativa",
            href: "/leadership/organization-structure",
          },
        ],
      },
      { key: "contact", label: "Contatti", href: "/contact" },
    ],
    login: "Accedi",
    menuLabel: "Menu",
    closeLabel: "Chiudi il menu",
    megaMenus: {
      businessSectors: {
        eyebrow: "Settori di attività",
        title: "Dalla terra al valore",
        description:
          "Un ecosistema di business integrato: dall'agricoltura alla trasformazione, alla conservazione e alla qualità.",
        ctaLabel: "Esplora i settori",
        ctaHref: "/business-sectors",
        sectors: [
          {
            key: "agricultureLandReclamation",
            title: "Agricoltura e bonifica dei terreni",
            description:
              "Bonifica dei terreni, coltivazioni in campo aperto e protette, produzione agricola e infrastrutture di irrigazione.",
            href: "/business-sectors#agriculture-land-reclamation",
            icon: "sprout",
          },
          {
            key: "foodManufacturing",
            title: "Trasformazione alimentare",
            description:
              "Selezione, pulizia, essiccazione, confezionamento, imballaggio e lavorazione agroalimentare.",
            href: "/business-sectors#food-manufacturing",
            icon: "factory",
          },
          {
            key: "coldChainStorage",
            title: "Catena del freddo e stoccaggio",
            description:
              "Refrigerazione, congelamento, conservazione, stoccaggio, movimentazione e riconfezionamento dei prodotti alimentari.",
            href: "/business-sectors#cold-chain-storage",
            icon: "snowflake",
          },
          {
            key: "qualityFoodSafety",
            title: "Qualità e sicurezza alimentare",
            description:
              "Sistemi di qualità e sicurezza alimentare, ispezione, controllo qualità e preparazione agli standard internazionali.",
            href: "/quality-sustainability#quality-food-safety",
            icon: "shield-check",
          },
          {
            key: "industrialInfrastructure",
            title: "Infrastrutture industriali e ingegneria",
            description:
              "Soluzioni ingegneristiche e industriali a supporto di stabilimenti, linee di produzione, movimentazione e infrastrutture.",
            href: "/business-sectors#industrial-infrastructure",
            icon: "building",
          },
          {
            key: "environmentalFacilityServices",
            title: "Servizi ambientali e per le strutture",
            description:
              "Riciclaggio, pulizia delle strutture, disinfestazione, disinfezione e sterilizzazione.",
            href: "/business-sectors#environmental-facility-services",
            icon: "recycle",
          },
        ],
      },
    },
  },
  cta: {
    login: "Accedi",
    contact: "Contattaci",
    learnMore: "Scopri di più",
    backHome: "Torna alla home",
  },
  footer: {
    blurb:
      "Un gruppo di investimento specializzato nello sviluppo delle filiere agroalimentari — dall'agricoltura intelligente alla trasformazione, allo stoccaggio refrigerato e all'export — con un impegno costante per qualità, sicurezza alimentare e sostenibilità.",
    columns: [
      {
        heading: "Azienda",
        links: [
          { key: "about", label: "Chi siamo", href: "/about" },
          {
            key: "leadership",
            label: "Leadership e governance",
            href: "/leadership",
          },
          { key: "contact", label: "Contatti", href: "/contact" },
        ],
      },
      {
        heading: "Attività",
        links: [
          {
            key: "businessSectors",
            label: "Settori di attività",
            href: "/business-sectors",
          },
          {
            key: "qualitySustainability",
            label: "Qualità e sostenibilità",
            href: "/quality-sustainability",
          },
        ],
      },
    ],
    standardsCaption: "Basati su standard internazionali",
    rightsReserved: "Tutti i diritti riservati.",
  },
  languageSwitcherLabel: "Lingua",
};

export default shared;
