import Link from "next/link";
import { Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { pricing, siteConfig } from "@/content/home";

export function Pricing() {
  return (
    <Section id="pricing" container="default" padding="default" background="muted">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-h2 mb-12 text-center text-foreground">
          {pricing.headline}
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {pricing.tiers.map((tier, index) => (
            <div
              key={index}
              className="border border-border bg-card p-8 sm:p-10"
            >
              <h3 className="text-h3 mb-4 text-foreground">{tier.name}</h3>
              <div className="mb-6 flex flex-wrap items-baseline gap-x-2">
                <span className="text-2xl font-bold text-foreground whitespace-nowrap sm:text-3xl md:text-4xl">
                  {tier.price}
                </span>
                {tier.priceNote && (
                  <span className="text-body text-muted-foreground">
                    {tier.priceNote}
                  </span>
                )}
              </div>
              <p className="text-body mb-4">{tier.description}</p>
              {tier.note && (
                <p className="text-body-sm text-muted-foreground">{tier.note}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="h-12 px-8 text-base bg-brand hover:bg-brand/90 text-brand-foreground"
          >
            <Link href={siteConfig.calendlyUrl}>{pricing.cta}</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
