import Link from "next/link";
import { Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { pricing, siteConfig } from "@/content/home";
import { RiCheckLine } from "@remixicon/react";

export function Pricing() {
  return (
    <Section id="pricing" container="default" padding="default">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-h2 mb-12 text-center text-foreground">
          {pricing.headline}
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {pricing.tiers.map((tier, index) => (
            <div
              key={index}
              className={`border p-8 sm:p-10 ${
                index === 0
                  ? "border-brand/30 bg-brand/5"
                  : "border-border bg-card"
              }`}
            >
              {tier.label && (
                <span className="inline-block mb-3 text-label text-brand font-medium">
                  {tier.label}
                </span>
              )}
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
              <p className="text-body mb-6">{tier.description}</p>

              {tier.includes && (
                <div className="mb-6">
                  <p className="text-label text-muted-foreground mb-3">Includes:</p>
                  <ul className="space-y-2">
                    {tier.includes.map((item, i) => (
                      <li key={i} className="flex gap-2 text-body-sm">
                        <RiCheckLine className="mt-0.5 size-4 shrink-0 text-brand" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {tier.credit && (
                <p className="text-body-sm text-brand font-medium mb-4">
                  {tier.credit}
                </p>
              )}

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
