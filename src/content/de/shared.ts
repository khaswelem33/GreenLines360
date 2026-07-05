import type { SharedContent } from "../types";

const shared: SharedContent = {
  brand: {
    siteName: "Green Lines for Investment",
    nameLatin: "Green Lines for Investment",
    nameArabic: "جرين لاينز للاستثمار",
    tagline: "Where Growth Meets Precision",
    taglineLocalized: "Wo Wachstum auf Präzision trifft",
  },
  navigation: {
    main: [
      { key: "home", label: "Startseite", href: "/" },
      { key: "about", label: "Über uns", href: "/about" },
      {
        key: "businessSectors",
        label: "Geschäftsbereiche",
        href: "/business-sectors",
        hasMegaMenu: true,
      },
      {
        key: "qualitySustainability",
        label: "Qualität & Nachhaltigkeit",
        href: "/quality-sustainability",
      },
      {
        key: "leadership",
        label: "Führung & Governance",
        href: "/leadership",
        dropdown: [
          { key: "overview", label: "Überblick", href: "/leadership" },
          {
            key: "chairmanMessage",
            label: "Botschaft des Vorsitzenden",
            href: "/leadership/chairman-message",
          },
          {
            key: "governanceFramework",
            label: "Governance-Rahmen",
            href: "/leadership/governance-framework",
          },
          {
            key: "advisoryCouncil",
            label: "Beirat",
            href: "/leadership/advisory-council",
          },
          {
            key: "expertNetwork",
            label: "Expertennetzwerk",
            href: "/leadership/expert-network",
          },
          {
            key: "coreTeams",
            label: "Kernteams",
            href: "/leadership/core-teams",
          },
          {
            key: "organizationStructure",
            label: "Organisationsstruktur",
            href: "/leadership/organization-structure",
          },
        ],
      },
      { key: "contact", label: "Kontakt", href: "/contact" },
    ],
    login: "Anmelden",
    menuLabel: "Menü",
    closeLabel: "Menü schließen",
    megaMenus: {
      businessSectors: {
        eyebrow: "Geschäftsbereiche",
        title: "Vom Land zum Wert",
        description:
          "Ein integriertes Geschäfts-Ökosystem von der Landwirtschaft über Verarbeitung und Konservierung bis zur Qualität.",
        ctaLabel: "Geschäftsbereiche entdecken",
        ctaHref: "/business-sectors",
        sectors: [
          {
            key: "agricultureLandReclamation",
            title: "Landwirtschaft & Landgewinnung",
            description:
              "Landgewinnung, Freiland- und geschützter Anbau, Pflanzenproduktion und Bewässerungsinfrastruktur.",
            href: "/business-sectors#agriculture-land-reclamation",
            icon: "sprout",
          },
          {
            key: "foodManufacturing",
            title: "Lebensmittelherstellung",
            description:
              "Sortierung, Reinigung, Trocknung, Abfüllung, Verpackung und Agrar-Lebensmittelverarbeitung.",
            href: "/business-sectors#food-manufacturing",
            icon: "factory",
          },
          {
            key: "coldChainStorage",
            title: "Kühlkette & Lagerung",
            description:
              "Kühlung, Tiefkühlung, Konservierung, Lagerung, Handling und Umverpackung von Lebensmitteln.",
            href: "/business-sectors#cold-chain-storage",
            icon: "snowflake",
          },
          {
            key: "qualityFoodSafety",
            title: "Qualität & Lebensmittelsicherheit",
            description:
              "Qualitäts- und Lebensmittelsicherheits-Systeme, Inspektion, Qualitätskontrolle und Vorbereitung auf internationale Standards.",
            href: "/quality-sustainability#quality-food-safety",
            icon: "shield-check",
          },
          {
            key: "industrialInfrastructure",
            title: "Industrielle Infrastruktur & Engineering",
            description:
              "Ingenieur- und Industrielösungen für Fabriken, Produktionslinien, Fördertechnik und Infrastruktur.",
            href: "/business-sectors#industrial-infrastructure",
            icon: "building",
          },
          {
            key: "environmentalFacilityServices",
            title: "Umwelt- & Gebäudeservices",
            description:
              "Recycling, Gebäudereinigung, Schädlingsbekämpfung, Desinfektion und Sterilisation.",
            href: "/business-sectors#environmental-facility-services",
            icon: "recycle",
          },
        ],
      },
    },
  },
  cta: {
    login: "Anmelden",
    contact: "Kontakt aufnehmen",
    learnMore: "Mehr erfahren",
    backHome: "Zur Startseite",
  },
  footer: {
    blurb:
      "Eine Investmentgruppe, spezialisiert auf die Entwicklung von Agrar- und Lebensmittel-Wertschöpfungsketten — von smarter Landwirtschaft über Verarbeitung und Kühllagerung bis zum Export — mit konsequentem Engagement für Qualität, Lebensmittelsicherheit und Nachhaltigkeit.",
    columns: [
      {
        heading: "Unternehmen",
        links: [
          { key: "about", label: "Über uns", href: "/about" },
          {
            key: "leadership",
            label: "Führung & Governance",
            href: "/leadership",
          },
          { key: "contact", label: "Kontakt", href: "/contact" },
        ],
      },
      {
        heading: "Geschäft",
        links: [
          {
            key: "businessSectors",
            label: "Geschäftsbereiche",
            href: "/business-sectors",
          },
          {
            key: "qualitySustainability",
            label: "Qualität & Nachhaltigkeit",
            href: "/quality-sustainability",
          },
        ],
      },
    ],
    standardsCaption: "Auf internationalen Standards aufgebaut",
    rightsReserved: "Alle Rechte vorbehalten.",
  },
  languageSwitcherLabel: "Sprache",
};

export default shared;
