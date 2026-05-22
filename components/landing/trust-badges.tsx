import {
  RiShieldCheckLine,
  RiFileShieldLine,
  RiMoneyDollarCircleLine,
  RiLockLine,
} from "@remixicon/react";
import type { RemixiconComponentType } from "@remixicon/react";
import { cn } from "@/lib/utils";

/**
 * Canonical trust badge definitions.
 * Import `trustBadges` to render a custom layout, or use `<TrustBadges />` for the default.
 */
export const trustBadges = [
  { id: "soc2", icon: RiShieldCheckLine, label: "SOC 2 in progress" },
  { id: "compliance", icon: RiFileShieldLine, label: "GDPR/CCPA compliant" },
  { id: "nda", icon: RiLockLine, label: "NDA on request" },
  { id: "guarantee", icon: RiMoneyDollarCircleLine, label: "Money-back guarantee" },
] as const;

export type TrustBadgeId = (typeof trustBadges)[number]["id"];

export type TrustBadge = {
  id: TrustBadgeId;
  icon: RemixiconComponentType;
  label: string;
};

type TrustBadgesProps = {
  /** Which badges to show. Defaults to all. */
  include?: TrustBadgeId[];
  /** Visual variant for different backgrounds. */
  variant?: "default" | "inverted" | "muted";
  /** Additional className for the container. */
  className?: string;
  /** Icon size class. Defaults to "size-4". */
  iconSize?: string;
};

const variantStyles = {
  default: "text-muted-foreground",
  inverted: "text-background/60",
  muted: "text-muted-foreground",
} as const;

export function TrustBadges({
  include,
  variant = "default",
  className,
  iconSize = "size-4",
}: TrustBadgesProps) {
  const badges = include
    ? trustBadges.filter((b) => include.includes(b.id))
    : trustBadges;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-4 lg:gap-6",
        className
      )}
    >
      {badges.map((badge) => (
        <div
          key={badge.id}
          className={cn("flex items-center gap-2", variantStyles[variant])}
        >
          <badge.icon className={iconSize} />
          <span className="text-xs font-medium">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
