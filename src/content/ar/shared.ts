import type { SharedContent } from "../types";

const shared: SharedContent = {
  brand: {
    siteName: "جرين لاينز للاستثمار",
    nameLatin: "Green Lines for Investment",
    nameArabic: "جرين لاينز للاستثمار",
    tagline: "Where Growth Meets Precision",
    taglineLocalized: "حيث يلتقي النمو بالدقة",
  },
  navigation: {
    main: [
      { key: "home", label: "الرئيسية", href: "/" },
      { key: "about", label: "من نحن", href: "/about" },
      {
        key: "businessSectors",
        label: "قطاعات الأعمال",
        href: "/business-sectors",
        hasMegaMenu: true,
      },
      {
        key: "qualitySustainability",
        label: "الجودة والاستدامة",
        href: "/quality-sustainability",
      },
      {
        key: "leadership",
        label: "القيادة والحوكمة",
        href: "/leadership",
        dropdown: [
          { key: "overview", label: "نظرة عامة", href: "/leadership" },
          {
            key: "chairmanMessage",
            label: "كلمة رئيس مجلس الإدارة",
            href: "/leadership/chairman-message",
          },
          {
            key: "governanceFramework",
            label: "إطار الحوكمة",
            href: "/leadership/governance-framework",
          },
          {
            key: "advisoryCouncil",
            label: "المجلس الاستشاري",
            href: "/leadership/advisory-council",
          },
          {
            key: "expertNetwork",
            label: "شبكة الخبراء",
            href: "/leadership/expert-network",
          },
          {
            key: "coreTeams",
            label: "فرق العمل الرئيسية",
            href: "/leadership/core-teams",
          },
          {
            key: "organizationStructure",
            label: "الهيكل التنظيمي",
            href: "/leadership/organization-structure",
          },
        ],
      },
      { key: "contact", label: "اتصل بنا", href: "/contact" },
    ],
    login: "تسجيل الدخول",
    menuLabel: "القائمة",
    closeLabel: "إغلاق القائمة",
    megaMenus: {
      businessSectors: {
        eyebrow: "قطاعات الأعمال",
        title: "من الأرض إلى القيمة",
        description:
          "منظومة أعمال متكاملة من الزراعة إلى التصنيع والحفظ والجودة.",
        ctaLabel: "استكشف قطاعات الأعمال",
        ctaHref: "/business-sectors",
        sectors: [
          {
            key: "agricultureLandReclamation",
            title: "الزراعة واستصلاح الأراضي",
            description:
              "استصلاح الأراضي، الزراعة المكشوفة والمحمية، إنتاج المحاصيل، والبنية المائية للري.",
            href: "/business-sectors#agriculture-land-reclamation",
            icon: "sprout",
          },
          {
            key: "foodManufacturing",
            title: "التصنيع الغذائي",
            description:
              "فرز وتنظيف وتجفيف وتعبئة وتغليف وتجهيز الحاصلات الزراعية والمنتجات الغذائية.",
            href: "/business-sectors#food-manufacturing",
            icon: "factory",
          },
          {
            key: "coldChainStorage",
            title: "سلاسل التبريد والتخزين",
            description:
              "حلول التبريد والتجميد والحفظ والتخزين والتداول وإعادة التعبئة للمنتجات الغذائية.",
            href: "/business-sectors#cold-chain-storage",
            icon: "snowflake",
          },
          {
            key: "qualityFoodSafety",
            title: "الجودة وسلامة الغذاء",
            description:
              "أنظمة الجودة وسلامة الغذاء، الفحص، ضبط الجودة، والتأهيل للمعايير الدولية.",
            href: "/quality-sustainability#quality-food-safety",
            icon: "shield-check",
          },
          {
            key: "industrialInfrastructure",
            title: "الحلول الصناعية والبنية الأساسية",
            description:
              "حلول هندسية وصناعية داعمة للمصانع وخطوط الإنتاج والمناولة والبنية الأساسية.",
            href: "/business-sectors#industrial-infrastructure",
            icon: "building",
          },
          {
            key: "environmentalFacilityServices",
            title: "الخدمات البيئية وخدمات المنشآت",
            description:
              "إعادة التدوير، خدمات النظافة، مكافحة الآفات، التعقيم، والتطهير للمنشآت.",
            href: "/business-sectors#environmental-facility-services",
            icon: "recycle",
          },
        ],
      },
    },
  },
  cta: {
    login: "تسجيل الدخول",
    contact: "تواصل معنا",
    learnMore: "اعرف المزيد",
    backHome: "العودة إلى الرئيسية",
  },
  footer: {
    blurb:
      "مجموعة استثمارية متخصصة في تطوير سلاسل القيمة الزراعية والغذائية، من الزراعة الذكية إلى التصنيع والتخزين والتصدير، بالتزام راسخ بمعايير الجودة وسلامة الغذاء والاستدامة.",
    columns: [
      {
        heading: "الشركة",
        links: [
          { key: "about", label: "من نحن", href: "/about" },
          {
            key: "leadership",
            label: "القيادة والحوكمة",
            href: "/leadership",
          },
          { key: "contact", label: "تواصل معنا", href: "/contact" },
        ],
      },
      {
        heading: "الأعمال",
        links: [
          {
            key: "businessSectors",
            label: "قطاعات الأعمال",
            href: "/business-sectors",
          },
          {
            key: "qualitySustainability",
            label: "الجودة والاستدامة",
            href: "/quality-sustainability",
          },
        ],
      },
    ],
    standardsCaption: "نبني أعمالنا على معايير عالمية معتمدة",
    rightsReserved: "جميع الحقوق محفوظة.",
  },
  languageSwitcherLabel: "اللغة",
};

export default shared;
