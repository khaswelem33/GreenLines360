import {
  Building2,
  Factory,
  Recycle,
  ShieldCheck,
  Snowflake,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import type { SectorIconName } from "@/content/types";

/** Maps content-layer icon names to lucide components. */
export const sectorIcons: Record<SectorIconName, LucideIcon> = {
  sprout: Sprout,
  factory: Factory,
  snowflake: Snowflake,
  "shield-check": ShieldCheck,
  building: Building2,
  recycle: Recycle,
};
