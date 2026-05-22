import { Section } from "@/components/layout";
import { whyThree } from "@/content/home";
import { cn } from "@/lib/utils";

export function WhyThree() {
  return (
    <Section id="why-three" container="default" padding="default" background="muted">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-h2 mb-6 text-foreground text-balance">
          {whyThree.headline}
        </h2>
        <p className="text-body-lg mb-12 max-w-2xl text-pretty">
          {whyThree.intro}
        </p>

        {/* Bets breakdown */}
        <div className="space-y-6">
          {whyThree.bets.map((bet, index) => (
            <div
              key={index}
              className={cn(
                "flex items-baseline gap-4",
                bet.emphasis && "text-foreground"
              )}
            >
              <span
                className={cn(
                  "text-5xl font-bold tabular-nums sm:text-6xl md:text-7xl",
                  bet.emphasis ? "text-brand" : "text-muted-foreground/40"
                )}
              >
                {bet.number === "One" ? "1" : bet.number === "Five" ? "5" : "3"}
              </span>
              <div>
                <span
                  className={cn(
                    "text-h3",
                    bet.emphasis ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  <span className="font-semibold">{bet.number}</span>{" "}
                  <span className="font-normal">{bet.label}</span>
                </span>
                <span
                  className={cn(
                    "ml-2 text-body-lg",
                    bet.emphasis ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {bet.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
