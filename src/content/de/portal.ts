import type { PortalContent } from "../types";

const portal: PortalContent = {
  meta: {
    title: "Dashboard",
    description: "Green Lines for Investment Portal — Dashboard.",
  },
  sidebar: {
    portalLabel: "Portal",
    items: [
      { key: "dashboard", label: "Dashboard", soon: false },
      { key: "documents", label: "Dokumente", soon: true },
      { key: "orders", label: "Aufträge", soon: true },
      { key: "traceability", label: "Rückverfolgbarkeit", soon: true },
      { key: "settings", label: "Einstellungen", soon: true },
    ],
  },
  topbar: {
    welcome: "Willkommen",
    viewSite: "Zur Website",
    logout: "Abmelden",
  },
  dashboard: {
    title: "Dashboard",
    subtitle: "Überblick über Ihr Konto und die Portal-Services",
    cards: [
      { label: "Dokumente", hint: "Qualitätszertifikate und Berichte" },
      { label: "Aufträge", hint: "Aufträge und Exportsendungen" },
      { label: "Rückverfolgbarkeit", hint: "Chargen- und Produktverfolgung" },
      { label: "Benachrichtigungen", hint: "Neueste Updates und Hinweise" },
    ],
    notice:
      "Dies ist die Portal-Grundlage — Module und Daten werden in einer kommenden Phase aktiviert.",
  },
  comingSoonBadge: "Bald",
};

export default portal;
