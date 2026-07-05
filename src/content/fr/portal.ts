import type { PortalContent } from "../types";

const portal: PortalContent = {
  meta: {
    title: "Tableau de bord",
    description: "Portail Green Lines for Investment — tableau de bord.",
  },
  sidebar: {
    portalLabel: "Portail",
    items: [
      { key: "dashboard", label: "Tableau de bord", soon: false },
      { key: "documents", label: "Documents", soon: true },
      { key: "orders", label: "Commandes", soon: true },
      { key: "traceability", label: "Traçabilité", soon: true },
      { key: "settings", label: "Paramètres", soon: true },
    ],
  },
  topbar: {
    welcome: "Bienvenue",
    viewSite: "Voir le site",
    logout: "Déconnexion",
  },
  dashboard: {
    title: "Tableau de bord",
    subtitle: "Un aperçu de votre compte et des services du portail",
    cards: [
      { label: "Documents", hint: "Certificats et rapports qualité" },
      { label: "Commandes", hint: "Commandes et expéditions export" },
      { label: "Traçabilité", hint: "Suivi des lots et des produits" },
      { label: "Notifications", hint: "Dernières mises à jour et alertes" },
    ],
    notice:
      "Ceci est la fondation du portail — les modules et les données seront activés lors d'une phase ultérieure.",
  },
  comingSoonBadge: "Bientôt",
};

export default portal;
