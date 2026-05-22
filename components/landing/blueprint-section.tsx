import Link from "next/link";
import { Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  RiCheckLine,
  RiArrowRightLine,
  RiTimeLine,
  RiFileTextLine,
  RiTeamLine,
} from "@remixicon/react";
import { TrustBadges } from "./trust-badges";

const blueprintIncludes = [
  "Executive-ready 30-page report",
  "3 prioritized AI opportunities with ROI models",
  "Vendor shortlist and build-vs-buy analysis",
  "90-day implementation roadmap",
  "1-hour walkthrough with your leadership team",
  "Fixed-fee proposal for implementation (if you proceed)",
] as const;

const features = [
  {
    icon: RiTimeLine,
    label: "2-week delivery",
  },
  {
    icon: RiFileTextLine,
    label: "Fixed $2,500 fee",
  },
  {
    icon: RiTeamLine,
    label: "Credited toward implementation",
  },
] as const;

export function BlueprintSection() {
  return (
    <Section id="blueprint" padding="default">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Description */}
          <div>
            <p className="text-overline mb-4">The Core Deliverable</p>
            <h2 className="text-h2 mb-4 text-foreground text-balance">
              The ClearStone Blueprint<span className="text-brand align-super text-sm">™</span>
            </h2>
            <p className="text-body-lg mb-8 text-pretty">
              A 2-week diagnostic that names the 3 AI systems most likely to pay
              back in your business. Where AI will move a number, what to build
              first, what to skip, and what it will cost.
            </p>

            {/* Features */}
            <div className="mb-8 flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 border border-border bg-muted/50 px-4 py-2"
                >
                  <feature.icon className="size-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* What's included */}
            <h3 className="text-h4 mb-4 text-foreground">
              What&apos;s included:
            </h3>
            <ul className="space-y-3">
              {blueprintIncludes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <RiCheckLine className="mt-0.5 size-5 shrink-0 text-foreground" />
                  <span className="text-body text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Pricing card */}
          <div className="lg:pt-8">
            <div className="border-2 border-foreground/10 bg-card p-8 shadow-sm">
              {/* Price */}
              <div className="mb-6 text-center">
                <p className="text-caption mb-2">One-time investment</p>
                <p className="font-heading text-5xl font-bold tracking-tight text-foreground">
                  $2,500
                </p>
                <p className="text-body mt-2">
                  Fully credited toward implementation
                </p>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-border" />

              {/* Guarantee */}
              <div className="mb-6 bg-muted/50 p-4">
                <p className="text-sm font-medium text-foreground">
                  Our guarantee:
                </p>
                <p className="mt-1 text-body-sm text-pretty">
                  If the 30-minute call doesn&apos;t surface 3 high-confidence AI
                  plays for your business, we don&apos;t pitch you the Blueprint.
                  You owe nothing.
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full text-base bg-brand hover:bg-brand/90 text-brand-foreground"
                >
                  <Link href="#book">
                    Book My AI Opportunity Call
                    <RiArrowRightLine className="ml-2 size-5" />
                  </Link>
                </Button>
                <p className="text-center text-caption">
                  30 minutes. Free. No obligation.
                </p>
              </div>

              {/* Trust signals - show only SOC 2 and NDA */}
              <TrustBadges
                include={["soc2", "nda"]}
                variant="muted"
                className="mt-6 gap-4"
                iconSize="size-3.5"
              />
            </div>

            {/* Trust note */}
            <p className="mt-6 text-center text-body-sm text-pretty">
              Most clients know within 15 minutes whether the Blueprint is
              right for them. If it&apos;s not, we&apos;ll tell you.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
