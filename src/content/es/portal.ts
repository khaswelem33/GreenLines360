import type { PortalContent } from "../types";

const portal: PortalContent = {
  meta: {
    title: "Panel de control",
    description: "Portal de Green Lines for Investment — panel de control.",
  },
  sidebar: {
    portalLabel: "Portal",
    items: [
      { key: "dashboard", label: "Panel de control", soon: false },
      { key: "documents", label: "Documentos", soon: true },
      { key: "orders", label: "Pedidos", soon: true },
      { key: "traceability", label: "Trazabilidad", soon: true },
      { key: "settings", label: "Configuración", soon: true },
    ],
  },
  topbar: {
    welcome: "Bienvenido",
    viewSite: "Ver el sitio web",
    logout: "Cerrar sesión",
  },
  dashboard: {
    title: "Panel de control",
    subtitle: "Una visión general de su cuenta y de los servicios del portal",
    cards: [
      { label: "Documentos", hint: "Certificados e informes de calidad" },
      { label: "Pedidos", hint: "Pedidos y envíos de exportación" },
      { label: "Trazabilidad", hint: "Seguimiento de lotes y productos" },
      { label: "Notificaciones", hint: "Últimas novedades y avisos" },
    ],
    notice:
      "Esta es la base del portal — los módulos y los datos se activarán en una fase posterior.",
  },
  comingSoonBadge: "Pronto",
};

export default portal;
