import type { Locale } from "@/i18n/routing";
import type { MediaSlot } from "./types";

/**
 * GLOBAL MEDIA RULE (applies to every current and future page):
 *
 * Every replaceable image slot has a unique code, and the physical PNG
 * filename IS the code: `CODE.png`, stored under `public/images/<section>/`.
 * The site always renders the physical file at `publicPath`.
 *
 * To replace any image: overwrite the PNG at `savePath` with the real
 * image, KEEPING THE EXACT FILENAME. No code change, no registry change,
 * no status flag. See MEDIA-ASSETS-GUIDE.md.
 *
 * Exception: approved special assets (Chairman photos) keep their own
 * filenames and must never be renamed or overwritten.
 *
 * New pages MUST define their slots here from the start, e.g.
 * IMG-SECTORS-HERO-01 -> public/images/business-sectors/IMG-SECTORS-HERO-01.png
 * Run `npm run media:placeholders` to generate missing placeholder PNGs.
 */

type LocalizedText = Record<Locale, string>;

export interface RegistryMediaSlot {
  code: string;
  folder: string;
  filename: string;
  publicPath: string;
  savePath: string;
  recommendedSize: string;
  aspectRatio: string;
  replacementLabel: LocalizedText;
  alt: LocalizedText;
}

/** Builds the standard paths for a generic CODE.png slot. */
function slotPaths(section: string, code: string) {
  return {
    folder: `public/images/${section}`,
    filename: `${code}.png`,
    publicPath: `/images/${section}/${code}.png`,
    savePath: `public/images/${section}/${code}.png`,
  };
}

const chairmanAlt: LocalizedText = {
  ar: "خالد سويـلم العتيبي، رئيس مجلس الإدارة في مكتب جرين لاينز للاستثمار",
  en: "Khalid Swelem Al Otaiby, Chairman of the Board at Green Lines for Investment office",
  it: "Khalid Swelem Al Otaiby, Presidente del Consiglio di Amministrazione, nell'ufficio di Green Lines for Investment",
  de: "Khalid Swelem Al Otaiby, Vorsitzender des Verwaltungsrats, im Büro von Green Lines for Investment",
  fr: "Khalid Swelem Al Otaiby, Président du Conseil d'administration, dans les bureaux de Green Lines for Investment",
  es: "Khalid Swelem Al Otaiby, Presidente del Consejo de Administración, en la oficina de Green Lines for Investment",
};

export const mediaRegistry: Record<string, RegistryMediaSlot> = {
  /* ------------------------------ About page ------------------------------ */
  "IMG-ABOUT-HERO-01": {
    code: "IMG-ABOUT-HERO-01",
    ...slotPaths("about", "IMG-ABOUT-HERO-01"),
    recommendedSize: "1600 × 900",
    aspectRatio: "16 / 9",
    replacementLabel: {
      ar: "صورة رئيسية: الزراعة والتصنيع الغذائي وسلسلة التصدير",
      en: "Hero image: agriculture, food manufacturing, and export value chain",
      it: "Immagine hero: agricoltura, trasformazione alimentare e filiera export",
      de: "Hero-Bild: Landwirtschaft, Lebensmittelherstellung und Export-Wertschöpfungskette",
      fr: "Image hero : agriculture, transformation alimentaire et chaîne export",
      es: "Imagen hero: agricultura, industria alimentaria y cadena de exportación",
    },
    alt: {
      ar: "الزراعة والتصنيع الغذائي وسلسلة قيمة التصدير في جرين لاينز للاستثمار",
      en: "Agriculture, food manufacturing, and export value chain at Green Lines for Investment",
      it: "Agricoltura, trasformazione alimentare e filiera export di Green Lines for Investment",
      de: "Landwirtschaft, Lebensmittelherstellung und Export-Wertschöpfungskette bei Green Lines for Investment",
      fr: "Agriculture, transformation alimentaire et chaîne de valeur export chez Green Lines for Investment",
      es: "Agricultura, industria alimentaria y cadena de valor de exportación en Green Lines for Investment",
    },
  },
  "IMG-ABOUT-ECOSYSTEM-01": {
    code: "IMG-ABOUT-ECOSYSTEM-01",
    ...slotPaths("about", "IMG-ABOUT-ECOSYSTEM-01"),
    recommendedSize: "1400 × 900",
    aspectRatio: "14 / 9",
    replacementLabel: {
      ar: "منظومة متكاملة من الأرض إلى السوق",
      en: "Integrated ecosystem from land to market",
      it: "Ecosistema integrato dalla terra al mercato",
      de: "Integriertes Ökosystem vom Land zum Markt",
      fr: "Écosystème intégré de la terre au marché",
      es: "Ecosistema integrado de la tierra al mercado",
    },
    alt: {
      ar: "منظومة متكاملة تربط الزراعة والتصنيع الغذائي والتخزين وسلاسل الإمداد",
      en: "Integrated ecosystem connecting agriculture, food manufacturing, storage, and supply chain",
      it: "Ecosistema integrato che collega agricoltura, produzione alimentare, stoccaggio e catena di fornitura",
      de: "Integriertes Ökosystem aus Landwirtschaft, Lebensmittelproduktion, Lagerung und Lieferkette",
      fr: "Écosystème intégré reliant l'agriculture, la fabrication alimentaire, le stockage et la chaîne d'approvisionnement",
      es: "Ecosistema integrado que conecta agricultura, fabricación alimentaria, almacenamiento y cadena de suministro",
    },
  },
  "IMG-ABOUT-AGRI-01": {
    code: "IMG-ABOUT-AGRI-01",
    ...slotPaths("about", "IMG-ABOUT-AGRI-01"),
    recommendedSize: "1200 × 800",
    aspectRatio: "3 / 2",
    replacementLabel: {
      ar: "الزراعة الذكية واستصلاح الأراضي",
      en: "Smart agriculture and land reclamation",
      it: "Agricoltura intelligente e bonifica dei terreni",
      de: "Smarte Landwirtschaft und Landgewinnung",
      fr: "Agriculture intelligente et mise en valeur des terres",
      es: "Agricultura inteligente y recuperación de tierras",
    },
    alt: {
      ar: "الزراعة الذكية واستصلاح الأراضي في جرين لاينز للاستثمار",
      en: "Smart agriculture and land reclamation at Green Lines for Investment",
      it: "Agricoltura intelligente e bonifica dei terreni di Green Lines for Investment",
      de: "Smarte Landwirtschaft und Landgewinnung bei Green Lines for Investment",
      fr: "Agriculture intelligente et mise en valeur des terres chez Green Lines for Investment",
      es: "Agricultura inteligente y recuperación de tierras en Green Lines for Investment",
    },
  },
  "IMG-ABOUT-FACTORY-01": {
    code: "IMG-ABOUT-FACTORY-01",
    ...slotPaths("about", "IMG-ABOUT-FACTORY-01"),
    recommendedSize: "1200 × 800",
    aspectRatio: "3 / 2",
    replacementLabel: {
      ar: "عمليات التصنيع والمعالجة الغذائية",
      en: "Food processing and manufacturing operations",
      it: "Operazioni di trasformazione e produzione alimentare",
      de: "Lebensmittelverarbeitung und Produktionsbetrieb",
      fr: "Opérations de transformation et de production alimentaire",
      es: "Operaciones de procesamiento y producción de alimentos",
    },
    alt: {
      ar: "عمليات التصنيع والمعالجة الغذائية في جرين لاينز للاستثمار",
      en: "Food processing and manufacturing operations at Green Lines for Investment",
      it: "Operazioni di trasformazione e produzione alimentare di Green Lines for Investment",
      de: "Lebensmittelverarbeitung und Produktionsbetrieb bei Green Lines for Investment",
      fr: "Opérations de transformation et de production alimentaire chez Green Lines for Investment",
      es: "Operaciones de procesamiento y producción de alimentos en Green Lines for Investment",
    },
  },
  "IMG-ABOUT-QUALITY-01": {
    code: "IMG-ABOUT-QUALITY-01",
    ...slotPaths("about", "IMG-ABOUT-QUALITY-01"),
    recommendedSize: "1200 × 800",
    aspectRatio: "3 / 2",
    replacementLabel: {
      ar: "أنظمة الجودة والفحص وسلامة الغذاء",
      en: "Quality, inspection, and food safety systems",
      it: "Sistemi di qualità, ispezione e sicurezza alimentare",
      de: "Qualitäts-, Inspektions- und Lebensmittelsicherheits-Systeme",
      fr: "Systèmes de qualité, d'inspection et de sécurité alimentaire",
      es: "Sistemas de calidad, inspección y seguridad alimentaria",
    },
    alt: {
      ar: "أنظمة الجودة والفحص وسلامة الغذاء في جرين لاينز للاستثمار",
      en: "Quality, inspection, and food safety systems at Green Lines for Investment",
      it: "Sistemi di qualità, ispezione e sicurezza alimentare di Green Lines for Investment",
      de: "Qualitäts-, Inspektions- und Lebensmittelsicherheits-Systeme bei Green Lines for Investment",
      fr: "Systèmes de qualité, d'inspection et de sécurité alimentaire chez Green Lines for Investment",
      es: "Sistemas de calidad, inspección y seguridad alimentaria en Green Lines for Investment",
    },
  },
  "IMG-ABOUT-SUSTAINABILITY-01": {
    code: "IMG-ABOUT-SUSTAINABILITY-01",
    ...slotPaths("about", "IMG-ABOUT-SUSTAINABILITY-01"),
    recommendedSize: "1200 × 800",
    aspectRatio: "3 / 2",
    replacementLabel: {
      ar: "نمو مستدام ومسؤولية بيئية",
      en: "Sustainable growth and environmental responsibility",
      it: "Crescita sostenibile e responsabilità ambientale",
      de: "Nachhaltiges Wachstum und ökologische Verantwortung",
      fr: "Croissance durable et responsabilité environnementale",
      es: "Crecimiento sostenible y responsabilidad ambiental",
    },
    alt: {
      ar: "النمو المستدام والمسؤولية البيئية في جرين لاينز للاستثمار",
      en: "Sustainable growth and environmental responsibility at Green Lines for Investment",
      it: "Crescita sostenibile e responsabilità ambientale di Green Lines for Investment",
      de: "Nachhaltiges Wachstum und ökologische Verantwortung bei Green Lines for Investment",
      fr: "Croissance durable et responsabilité environnementale chez Green Lines for Investment",
      es: "Crecimiento sostenible y responsabilidad ambiental en Green Lines for Investment",
    },
  },

  "IMG-LEADERSHIP-CHAIRMAN-AR-01": {
    code: "IMG-LEADERSHIP-CHAIRMAN-AR-01",
    folder: "public/images/leadership",
    filename: "image-ceo-ar.png",
    publicPath: "/images/leadership/image-ceo-ar.png",
    savePath: "public/images/leadership/image-ceo-ar.png",
    recommendedSize: "1600 × 900",
    aspectRatio: "16 / 9",
    replacementLabel: {
      ar: "صورة رئيس مجلس الإدارة للنسخة العربية",
      en: "Chairman image for Arabic RTL layout",
      it: "Immagine del Presidente per il layout arabo RTL",
      de: "Bild des Vorsitzenden für das arabische RTL-Layout",
      fr: "Image du Président pour la mise en page arabe RTL",
      es: "Imagen del Presidente para el diseño árabe RTL",
    },
    alt: chairmanAlt,
  },
  "IMG-LEADERSHIP-CHAIRMAN-LTR-01": {
    code: "IMG-LEADERSHIP-CHAIRMAN-LTR-01",
    folder: "public/images/leadership",
    filename: "image-ceo-en.png",
    publicPath: "/images/leadership/image-ceo-en.png",
    savePath: "public/images/leadership/image-ceo-en.png",
    recommendedSize: "1600 × 900",
    aspectRatio: "16 / 9",
    replacementLabel: {
      ar: "صورة رئيس مجلس الإدارة للغات اليسار إلى اليمين",
      en: "Chairman image for LTR language layouts",
      it: "Immagine del Presidente per i layout delle lingue LTR",
      de: "Bild des Vorsitzenden für LTR-Sprachlayouts",
      fr: "Image du Président pour les mises en page des langues LTR",
      es: "Imagen del Presidente para los diseños de idiomas LTR",
    },
    alt: chairmanAlt,
  },

  /* ---------------------- Leadership generic slots ------------------------ */
  "IMG-LEADERSHIP-HERO-01": {
    code: "IMG-LEADERSHIP-HERO-01",
    ...slotPaths("leadership", "IMG-LEADERSHIP-HERO-01"),
    recommendedSize: "1600 × 900",
    aspectRatio: "16 / 9",
    replacementLabel: {
      ar: "صورة رئيسية تعبر عن القيادة والحوكمة والتميز المؤسسي",
      en: "Hero image representing leadership, governance, and corporate excellence",
      it: "Immagine hero che rappresenta leadership, governance ed eccellenza aziendale",
      de: "Hero-Bild für Führung, Governance und unternehmerische Exzellenz",
      fr: "Image hero représentant le leadership, la gouvernance et l'excellence d'entreprise",
      es: "Imagen hero que representa liderazgo, gobernanza y excelencia corporativa",
    },
    alt: {
      ar: "القيادة والحوكمة في جرين لاينز للاستثمار",
      en: "Leadership and governance at Green Lines for Investment",
      it: "Leadership e governance in Green Lines for Investment",
      de: "Führung und Governance bei Green Lines for Investment",
      fr: "Leadership et gouvernance chez Green Lines for Investment",
      es: "Liderazgo y gobernanza en Green Lines for Investment",
    },
  },
  "IMG-LEADERSHIP-GOVERNANCE-01": {
    code: "IMG-LEADERSHIP-GOVERNANCE-01",
    ...slotPaths("leadership", "IMG-LEADERSHIP-GOVERNANCE-01"),
    recommendedSize: "1400 × 900",
    aspectRatio: "14 / 9",
    replacementLabel: {
      ar: "صورة تعبر عن الحوكمة والرقابة الداخلية والشفافية المؤسسية",
      en: "Image representing governance, internal control, and corporate transparency",
      it: "Immagine che rappresenta governance, controllo interno e trasparenza aziendale",
      de: "Bild für Governance, interne Kontrolle und unternehmerische Transparenz",
      fr: "Image représentant la gouvernance, le contrôle interne et la transparence d'entreprise",
      es: "Imagen que representa gobernanza, control interno y transparencia corporativa",
    },
    alt: {
      ar: "إطار الحوكمة في جرين لاينز للاستثمار",
      en: "Governance framework at Green Lines for Investment",
      it: "Quadro di governance in Green Lines for Investment",
      de: "Governance-Rahmen bei Green Lines for Investment",
      fr: "Cadre de gouvernance chez Green Lines for Investment",
      es: "Marco de gobernanza en Green Lines for Investment",
    },
  },
  "IMG-LEADERSHIP-ADVISORY-01": {
    code: "IMG-LEADERSHIP-ADVISORY-01",
    ...slotPaths("leadership", "IMG-LEADERSHIP-ADVISORY-01"),
    recommendedSize: "1200 × 800",
    aspectRatio: "3 / 2",
    replacementLabel: {
      ar: "صورة تعبر عن المجلس الاستشاري والخبرات المتخصصة",
      en: "Image representing the advisory council and specialized expertise",
      it: "Immagine che rappresenta il consiglio consultivo e le competenze specializzate",
      de: "Bild für den Beirat und spezialisierte Expertise",
      fr: "Image représentant le conseil consultatif et l'expertise spécialisée",
      es: "Imagen que representa el consejo asesor y la experiencia especializada",
    },
    alt: {
      ar: "المجلس الاستشاري في جرين لاينز للاستثمار",
      en: "Advisory council at Green Lines for Investment",
      it: "Consiglio consultivo di Green Lines for Investment",
      de: "Beirat von Green Lines for Investment",
      fr: "Conseil consultatif de Green Lines for Investment",
      es: "Consejo asesor de Green Lines for Investment",
    },
  },
  "IMG-LEADERSHIP-EXPERTS-01": {
    code: "IMG-LEADERSHIP-EXPERTS-01",
    ...slotPaths("leadership", "IMG-LEADERSHIP-EXPERTS-01"),
    recommendedSize: "1200 × 800",
    aspectRatio: "3 / 2",
    replacementLabel: {
      ar: "صورة تعبر عن شبكة الخبراء والجودة وسلامة الغذاء",
      en: "Image representing the expert network, quality, and food safety",
      it: "Immagine che rappresenta la rete di esperti, la qualità e la sicurezza alimentare",
      de: "Bild für das Expertennetzwerk, Qualität und Lebensmittelsicherheit",
      fr: "Image représentant le réseau d'experts, la qualité et la sécurité alimentaire",
      es: "Imagen que representa la red de expertos, la calidad y la seguridad alimentaria",
    },
    alt: {
      ar: "شبكة الخبراء في جرين لاينز للاستثمار",
      en: "Expert network at Green Lines for Investment",
      it: "Rete di esperti di Green Lines for Investment",
      de: "Expertennetzwerk von Green Lines for Investment",
      fr: "Réseau d'experts de Green Lines for Investment",
      es: "Red de expertos de Green Lines for Investment",
    },
  },
  "IMG-LEADERSHIP-TEAMS-01": {
    code: "IMG-LEADERSHIP-TEAMS-01",
    ...slotPaths("leadership", "IMG-LEADERSHIP-TEAMS-01"),
    recommendedSize: "1200 × 800",
    aspectRatio: "3 / 2",
    replacementLabel: {
      ar: "صورة تعبر عن فرق العمل التنفيذية والتشغيلية",
      en: "Image representing executive and operational core teams",
      it: "Immagine che rappresenta i team esecutivi e operativi",
      de: "Bild für Führungs- und operative Kernteams",
      fr: "Image représentant les équipes clés exécutives et opérationnelles",
      es: "Imagen que representa los equipos clave ejecutivos y operativos",
    },
    alt: {
      ar: "فرق العمل الرئيسية في جرين لاينز للاستثمار",
      en: "Core teams at Green Lines for Investment",
      it: "Team principali di Green Lines for Investment",
      de: "Kernteams von Green Lines for Investment",
      fr: "Équipes clés de Green Lines for Investment",
      es: "Equipos clave de Green Lines for Investment",
    },
  },
  "IMG-LEADERSHIP-ORG-CHART-01": {
    code: "IMG-LEADERSHIP-ORG-CHART-01",
    ...slotPaths("leadership", "IMG-LEADERSHIP-ORG-CHART-01"),
    recommendedSize: "1600 × 1000",
    aspectRatio: "16 / 10",
    replacementLabel: {
      ar: "صورة أو مخطط للهيكل التنظيمي للشركة",
      en: "Image or chart representing the company organization structure",
      it: "Immagine o schema della struttura organizzativa aziendale",
      de: "Bild oder Diagramm der Organisationsstruktur des Unternehmens",
      fr: "Image ou schéma représentant la structure organisationnelle de l'entreprise",
      es: "Imagen o esquema de la estructura organizativa de la empresa",
    },
    alt: {
      ar: "الهيكل التنظيمي لشركة جرين لاينز للاستثمار",
      en: "Organization structure of Green Lines for Investment",
      it: "Struttura organizzativa di Green Lines for Investment",
      de: "Organisationsstruktur von Green Lines for Investment",
      fr: "Structure organisationnelle de Green Lines for Investment",
      es: "Estructura organizativa de Green Lines for Investment",
    },
  },
};

/** Back-compat alias (leadership components import this name). */
export const leadershipMediaRegistry = mediaRegistry;

/** Converts a registry entry into the per-locale MediaSlot consumed by MediaSlotView. */
export function getMediaSlot(code: string, locale: Locale): MediaSlot {
  const entry = mediaRegistry[code];
  return {
    code: entry.code,
    size: entry.recommendedSize,
    label: entry.replacementLabel[locale],
    publicPath: entry.publicPath,
    alt: entry.alt[locale],
    savePath: entry.savePath,
  };
}

/** Chairman visual is direction-specific: Arabic uses the RTL image. */
export function getChairmanSlot(locale: Locale): MediaSlot {
  return getMediaSlot(
    locale === "ar"
      ? "IMG-LEADERSHIP-CHAIRMAN-AR-01"
      : "IMG-LEADERSHIP-CHAIRMAN-LTR-01",
    locale
  );
}

/** Aspect ratio helper for layout use. */
export function getMediaAspect(code: string): string {
  return mediaRegistry[code].aspectRatio;
}
