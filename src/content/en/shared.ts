import type { SharedContent } from "../types";

const shared: SharedContent = {
  brand: {
    siteName: "Green Lines for Investment",
    nameLatin: "Green Lines for Investment",
    nameArabic: "جرين لاينز للاستثمار",
    tagline: "Where Growth Meets Precision",
    taglineLocalized: "Where Growth Meets Precision",
  },
  navigation: {
    main: [
      { key: "home", label: "Home", href: "/" },
      { key: "about", label: "About", href: "/about" },
      {
        key: "businessSectors",
        label: "Business Sectors",
        href: "/business-sectors",
        hasMegaMenu: true,
      },
      {
        key: "qualitySustainability",
        label: "Quality & Sustainability",
        href: "/quality-sustainability",
      },
      {
        key: "leadership",
        label: "Leadership & Governance",
        href: "/leadership",
        dropdown: [
          { key: "overview", label: "Overview", href: "/leadership" },
          {
            key: "chairmanMessage",
            label: "Chairman Message",
            href: "/leadership/chairman-message",
          },
          {
            key: "governanceFramework",
            label: "Governance Framework",
            href: "/leadership/governance-framework",
          },
          {
            key: "advisoryCouncil",
            label: "Advisory Council",
            href: "/leadership/advisory-council",
          },
          {
            key: "expertNetwork",
            label: "Expert Network",
            href: "/leadership/expert-network",
          },
          {
            key: "coreTeams",
            label: "Core Teams",
            href: "/leadership/core-teams",
          },
          {
            key: "organizationStructure",
            label: "Organization Structure",
            href: "/leadership/organization-structure",
          },
        ],
      },
      { key: "contact", label: "Contact", href: "/contact" },
    ],
    login: "Login",
    menuLabel: "Menu",
    closeLabel: "Close menu",
    megaMenus: {
      businessSectors: {
        eyebrow: "Business Sectors",
        title: "From Land to Value",
        description:
          "An integrated business ecosystem from agriculture to processing, preservation, and quality.",
        ctaLabel: "Explore Business Sectors",
        ctaHref: "/business-sectors",
        sectors: [
          {
            key: "agricultureLandReclamation",
            title: "Agriculture & Land Reclamation",
            description:
              "Land reclamation, open-field and protected agriculture, crop production, and irrigation infrastructure.",
            href: "/business-sectors#agriculture-land-reclamation",
            icon: "sprout",
          },
          {
            key: "foodManufacturing",
            title: "Food Manufacturing",
            description:
              "Sorting, cleaning, drying, packing, packaging, and agri-food processing.",
            href: "/business-sectors#food-manufacturing",
            icon: "factory",
          },
          {
            key: "coldChainStorage",
            title: "Cold Chain & Storage",
            description:
              "Chilling, freezing, preservation, storage, handling, and repacking for food products.",
            href: "/business-sectors#cold-chain-storage",
            icon: "snowflake",
          },
          {
            key: "qualityFoodSafety",
            title: "Quality & Food Safety",
            description:
              "Quality systems, food safety systems, inspection, quality control, and standards readiness.",
            href: "/quality-sustainability#quality-food-safety",
            icon: "shield-check",
          },
          {
            key: "industrialInfrastructure",
            title: "Industrial Infrastructure & Engineering",
            description:
              "Engineering and industrial solutions supporting factories, production lines, handling, and infrastructure.",
            href: "/business-sectors#industrial-infrastructure",
            icon: "building",
          },
          {
            key: "environmentalFacilityServices",
            title: "Environmental & Facility Services",
            description:
              "Recycling, facility cleaning, pest control, disinfection, and sterilization services.",
            href: "/business-sectors#environmental-facility-services",
            icon: "recycle",
          },
        ],
      },
    },
  },
  cta: {
    login: "Login",
    contact: "Contact Us",
    learnMore: "Learn more",
    backHome: "Back to home",
  },
  footer: {
    blurb:
      "An investment group specialized in advancing agri-food value chains — from smart farming to manufacturing, cold storage, and export — with an unwavering commitment to quality, food safety, and sustainability.",
    columns: [
      {
        heading: "Company",
        links: [
          { key: "about", label: "About", href: "/about" },
          {
            key: "leadership",
            label: "Leadership & Governance",
            href: "/leadership",
          },
          { key: "contact", label: "Contact", href: "/contact" },
        ],
      },
      {
        heading: "Business",
        links: [
          {
            key: "businessSectors",
            label: "Business Sectors",
            href: "/business-sectors",
          },
          {
            key: "qualitySustainability",
            label: "Quality & Sustainability",
            href: "/quality-sustainability",
          },
        ],
      },
    ],
    standardsCaption: "Built on International Standards",
    rightsReserved: "All rights reserved.",
  },
  languageSwitcherLabel: "Language",
};

export default shared;
