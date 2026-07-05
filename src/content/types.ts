/**
 * Typed content contract shared by all six locales.
 * A missing key in any locale is a compile-time error, which guarantees
 * translation parity across ar / en / it / de / fr / es.
 */

export interface Meta {
  title: string;
  description: string;
}

export interface NavItem {
  key: string;
  label: string;
  href: string;
}

export interface MainNavItem extends NavItem {
  /** When true, this item opens the Business Sectors mega menu */
  hasMegaMenu?: boolean;
  /** Compact dropdown items (e.g. Leadership & Governance) */
  dropdown?: NavItem[];
}

export type SectorKey =
  | "agricultureLandReclamation"
  | "foodManufacturing"
  | "coldChainStorage"
  | "qualityFoodSafety"
  | "industrialInfrastructure"
  | "environmentalFacilityServices";

export type SectorIconName =
  | "sprout"
  | "factory"
  | "snowflake"
  | "shield-check"
  | "building"
  | "recycle";

export interface SectorCard {
  key: SectorKey;
  title: string;
  description: string;
  href: string;
  icon: SectorIconName;
}

export interface MegaMenuSectorsContent {
  /** Small heading above the sector grid */
  eyebrow: string;
  /** Featured panel headline */
  title: string;
  /** Featured panel supporting line */
  description: string;
  ctaLabel: string;
  ctaHref: string;
  sectors: SectorCard[];
}

export interface NavigationContent {
  main: MainNavItem[];
  login: string;
  menuLabel: string;
  closeLabel: string;
  megaMenus: {
    businessSectors: MegaMenuSectorsContent;
  };
}

export interface SharedContent {
  brand: {
    /** Localized site name used in metadata and header */
    siteName: string;
    nameLatin: string;
    nameArabic: string;
    /** English brand lockup — kept verbatim across locales */
    tagline: string;
    /** Localized rendering of the tagline for supporting copy */
    taglineLocalized: string;
  };
  navigation: NavigationContent;
  cta: {
    login: string;
    contact: string;
    learnMore: string;
    backHome: string;
  };
  footer: {
    blurb: string;
    columns: { heading: string; links: NavItem[] }[];
    standardsCaption: string;
    rightsReserved: string;
  };
  languageSwitcherLabel: string;
}

export interface Standard {
  code: string;
  label: string;
}

export type PillarKey =
  | "agriculture"
  | "manufacturing"
  | "coldChain"
  | "quality"
  | "advisory"
  | "logistics";

export interface Pillar {
  key: PillarKey;
  number: string;
  title: string;
  blurb: string;
}

export interface HomeContent {
  meta: Meta;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    media?: InlineMediaContent;
  };
  standards: {
    caption: string;
    items: Standard[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  pillars: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Pillar[];
  };
  qualityQuote: {
    text: string;
  };
  strengths: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  chairman: {
    eyebrow: string;
    quote: string;
    name: string;
    role: string;
    cta: string;
  };
  sustainability: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  ctaBand: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

/**
 * Per-locale view of a registered image slot (see src/content/mediaRegistry.ts).
 * The physical PNG at publicPath is ALWAYS rendered; replacing an image
 * means overwriting that file with the same filename — no code changes.
 */
export interface MediaSlot {
  code: string;
  /** Recommended size, e.g. "1400 × 900" */
  size: string;
  label: string;
  /** Public URL of the physical PNG (placeholder first, real image later) */
  publicPath: string;
  /** Localized alt text */
  alt: string;
  /** Exact save path for replacement (also shown on fallback cards) */
  savePath: string;
}

export interface InlineMediaContent {
  code: string;
  status?: string;
  publicPath?: string;
  size: string;
  label: string;
  alt?: string;
  savePath?: string;
}


export interface AboutPageContent {
  meta: Meta;
  placeholderHints: {
    recommended: string;
    replaceWith: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    media?: InlineMediaContent;
  };
  whoWeAre: {
    title: string;
    paragraphs: string[];
    highlight: string;
    media?: InlineMediaContent;
  };
  positioning: {
    title: string;
    cards: { title: string; description: string }[];
  };
  visionMission: {
    title: string;
    vision: { title: string; body: string };
    mission: { title: string; body: string };
  };
  journey: {
    title: string;
    steps: { title: string; description: string }[];
  };
  ecosystem: {
    title: string;
    description: string;
    /** slotCode references src/content/mediaRegistry.ts; legacy content may provide media.code. */
    blocks: { title: string; slotCode?: string; media?: InlineMediaContent }[];
  };
  strengths: {
    title: string;
    items: { title: string; body: string }[];
  };
  qualityQuote: {
    text: string;
  };
  standards: {
    caption: string;
    items: Standard[];
  };
  leadership: {
    title: string;
    paragraphs: string[];
    cta: string;
    name: string;
    role: string;
    imageAlt: string;
  };
  finalCta: {
    text: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

/** Inner pages ship as structured placeholders in Phase 1. */
export interface PagePlaceholderContent {
  meta: Meta;
  eyebrow: string;
  title: string;
  intro: string;
  note: string;
}

/** A page section reachable via a #anchor from the mega menu. */
export interface AnchorSection {
  id: string;
  title: string;
  description: string;
}

/** Pages composed of anchored sections (Business Sectors, Quality & Sustainability). */
export interface AnchorPageContent {
  meta: Meta;
  eyebrow: string;
  title: string;
  intro: string;
  sections: AnchorSection[];
  note: string;
}

export interface AuthContent {
  meta: Meta;
  brandPanel: {
    headline: string;
    sub: string;
  };
  form: {
    title: string;
    subtitle: string;
    email: string;
    emailPlaceholder: string;
    password: string;
    passwordPlaceholder: string;
    remember: string;
    forgot: string;
    submit: string;
    /** Honest stub notice — auth is enabled in a later phase */
    notice: string;
  };
  backToSite: string;
}

export type PortalNavKey =
  | "dashboard"
  | "documents"
  | "orders"
  | "traceability"
  | "settings";

export interface PortalContent {
  meta: Meta;
  sidebar: {
    portalLabel: string;
    items: { key: PortalNavKey; label: string; soon: boolean }[];
  };
  topbar: {
    welcome: string;
    viewSite: string;
    logout: string;
  };
  dashboard: {
    title: string;
    subtitle: string;
    cards: { label: string; hint: string }[];
    notice: string;
  };
  comingSoonBadge: string;
}

export interface LeadershipCard {
  title: string;
  body: string;
}

export interface LeadershipPageBase {
  meta: Meta;
  navLabel: string;
  title: string;
  intro: string;
}

export interface LeadershipCardsPage extends LeadershipPageBase {
  cards: LeadershipCard[];
}

export interface LeadershipHubContent {
  meta: Meta;
  navLabel: string;
  hero: { eyebrow: string; title: string; subtitle: string };
  overviewCards: LeadershipCard[];
  chairmanTeaser: { text: string; cta: string };
  pillarsTitle: string;
  pillars: LeadershipCard[];
  pagesGridTitle: string;
  finalCta: { text: string; primaryCta: string; secondaryCta: string };
}

export interface ChairmanMessageContent extends LeadershipPageBase {
  name: string;
  role: string;
  paragraphs: string[];
  quote: string;
  valuesTitle: string;
  values: LeadershipCard[];
  cta: string;
}

export interface GovernanceFrameworkContent extends LeadershipPageBase {
  sections: LeadershipCard[];
  cta: string;
}

export interface OrganizationStructureContent extends LeadershipPageBase {
  chairmanLabel: string;
  ceoLabel: string;
  advisoryCouncilLabel: string;
  strategyLabel: string;
  committeesTitle: string;
  committees: string[];
  departmentsTitle: string;
  departments: string[];
  note: string;
}

export interface LeadershipContent {
  placeholderHints: {
    recommended: string;
    replaceWith: string;
  };
  hub: LeadershipHubContent;
  chairman: ChairmanMessageContent;
  governance: GovernanceFrameworkContent;
  advisory: LeadershipCardsPage;
  experts: LeadershipCardsPage;
  teams: LeadershipCardsPage;
  organization: OrganizationStructureContent;
}

export interface SiteContent {
  shared: SharedContent;
  home: HomeContent;
  about: AboutPageContent;
  businessSectorsPage: AnchorPageContent;
  qualitySustainabilityPage: AnchorPageContent;
  businessScope: PagePlaceholderContent;
  qualityFoodSafety: PagePlaceholderContent;
  sustainability: PagePlaceholderContent;
  leadership: LeadershipContent;
  organization: PagePlaceholderContent;
  contact: PagePlaceholderContent;
  auth: AuthContent;
  portal: PortalContent;
}
