import type { PortalContent } from "../types";

const portal: PortalContent = {
  meta: {
    title: "Dashboard",
    description: "Green Lines for Investment portal — dashboard.",
  },
  sidebar: {
    portalLabel: "Portal",
    items: [
      { key: "dashboard", label: "Dashboard", soon: false },
      { key: "documents", label: "Documents", soon: true },
      { key: "orders", label: "Orders", soon: true },
      { key: "traceability", label: "Traceability", soon: true },
      { key: "settings", label: "Settings", soon: true },
    ],
  },
  topbar: {
    welcome: "Welcome",
    viewSite: "View website",
    logout: "Log out",
  },
  dashboard: {
    title: "Dashboard",
    subtitle: "An overview of your account and portal services",
    cards: [
      { label: "Documents", hint: "Quality certificates and reports" },
      { label: "Orders", hint: "Orders and export shipments" },
      { label: "Traceability", hint: "Lot and product tracking" },
      { label: "Notifications", hint: "Latest updates and alerts" },
    ],
    notice:
      "This is the portal foundation — modules and data will be enabled in an upcoming phase.",
  },
  comingSoonBadge: "Soon",
};

export default portal;
