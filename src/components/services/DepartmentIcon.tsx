import {
  Users,
  Home,
  Landmark,
  Languages,
  Briefcase,
  HeartPulse,
  Cpu,
  GraduationCap,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import type { DepartmentIconKey } from "@/content/types";

const ICON_MAP: Record<DepartmentIconKey, LucideIcon> = {
  users: Users,
  home: Home,
  landmark: Landmark,
  languages: Languages,
  briefcase: Briefcase,
  heartPulse: HeartPulse,
  cpu: Cpu,
  graduationCap: GraduationCap,
  utensilsCrossed: UtensilsCrossed,
};

interface DepartmentIconProps {
  icon: DepartmentIconKey;
  className?: string;
}

export function DepartmentIcon({ icon, className = "h-5 w-5" }: DepartmentIconProps) {
  const Icon = ICON_MAP[icon];
  return <Icon className={className} aria-hidden="true" />;
}
