import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  container?: "default" | "narrow" | "wide" | "none";
  padding?: "default" | "sm" | "lg" | "none";
  background?: "default" | "muted" | "card";
}

export function Section({
  children,
  className,
  id,
  container = "default",
  padding = "default",
  background = "default",
}: SectionProps) {
  const containerClasses = {
    default: "container-default",
    narrow: "container-narrow",
    wide: "container-wide",
    none: "",
  };

  const paddingClasses = {
    default: "section-py",
    sm: "section-py-sm",
    lg: "section-py-lg",
    none: "",
  };

  const backgroundClasses = {
    default: "",
    muted: "bg-muted/30",
    card: "bg-card",
  };

  return (
    <section
      id={id}
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      <div className={containerClasses[container]}>{children}</div>
    </section>
  );
}
