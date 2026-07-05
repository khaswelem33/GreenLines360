import type { PortalContent } from "../types";

const portal: PortalContent = {
  meta: {
    title: "Dashboard",
    description: "Portale Green Lines for Investment — dashboard.",
  },
  sidebar: {
    portalLabel: "Portale",
    items: [
      { key: "dashboard", label: "Dashboard", soon: false },
      { key: "documents", label: "Documenti", soon: true },
      { key: "orders", label: "Ordini", soon: true },
      { key: "traceability", label: "Tracciabilità", soon: true },
      { key: "settings", label: "Impostazioni", soon: true },
    ],
  },
  topbar: {
    welcome: "Benvenuto",
    viewSite: "Vai al sito",
    logout: "Esci",
  },
  dashboard: {
    title: "Dashboard",
    subtitle: "Una panoramica del tuo account e dei servizi del portale",
    cards: [
      { label: "Documenti", hint: "Certificati e report di qualità" },
      { label: "Ordini", hint: "Ordini e spedizioni export" },
      { label: "Tracciabilità", hint: "Tracciamento di lotti e prodotti" },
      { label: "Notifiche", hint: "Ultimi aggiornamenti e avvisi" },
    ],
    notice:
      "Questa è la base del portale — moduli e dati saranno attivati in una fase successiva.",
  },
  comingSoonBadge: "Presto",
};

export default portal;
