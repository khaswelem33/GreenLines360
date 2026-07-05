import type { PortalContent } from "../types";

const portal: PortalContent = {
  meta: {
    title: "لوحة التحكم",
    description: "بوابة جرين لاينز للاستثمار — لوحة التحكم.",
  },
  sidebar: {
    portalLabel: "البوابة",
    items: [
      { key: "dashboard", label: "لوحة التحكم", soon: false },
      { key: "documents", label: "الوثائق", soon: true },
      { key: "orders", label: "الطلبات", soon: true },
      { key: "traceability", label: "التتبع", soon: true },
      { key: "settings", label: "الإعدادات", soon: true },
    ],
  },
  topbar: {
    welcome: "مرحبًا بك",
    viewSite: "عرض الموقع",
    logout: "تسجيل الخروج",
  },
  dashboard: {
    title: "لوحة التحكم",
    subtitle: "نظرة عامة على حسابك وخدمات البوابة",
    cards: [
      { label: "الوثائق", hint: "شهادات وتقارير الجودة" },
      { label: "الطلبات", hint: "طلبات وشحنات التصدير" },
      { label: "التتبع", hint: "تتبع الدفعات والمنتجات" },
      { label: "الإشعارات", hint: "آخر التحديثات والتنبيهات" },
    ],
    notice:
      "هذه نسخة تأسيسية من البوابة — سيتم تفعيل الوحدات والبيانات في مرحلة قادمة.",
  },
  comingSoonBadge: "قريبًا",
};

export default portal;
