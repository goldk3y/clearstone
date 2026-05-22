import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "@remixicon/react";
import { TrustBadges } from "./trust-badges";

export function CTASection() {
  return (
    <section id="book" className="bg-foreground text-background">
      <div className="container-default section-py">
        <div className="mx-auto max-w-5xl text-center">
          {/* Trust badges */}
          <TrustBadges variant="inverted" className="mb-10" />

          {/* Headline */}
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-background sm:text-4xl md:text-5xl mb-4 text-balance">
            Most operators we work with have AI delivering measurable ROI within 90 days.
          </h2>

          {/* Subheadline */}
          <p className="text-lg leading-relaxed text-background/70 mx-auto mb-6 max-w-2xl sm:text-xl text-pretty">
            The longer you wait, the more your competitors lap you. Book a
            30-minute call and walk away with a prioritized list of AI
            opportunities for your business.
          </p>

          {/* Scarcity signal */}
          <p className="text-sm text-background/50 mb-10">
            Currently accepting 6 Blueprint engagements per quarter.
          </p>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="h-14 px-10 text-lg bg-brand hover:bg-brand/90 text-brand-foreground border-0"
          >
            <Link href="https://calendly.com/clearstone-ai/discovery">
              Book My AI Opportunity Call
              <RiArrowRightLine className="ml-2 size-5" />
            </Link>
          </Button>

          {/* Supporting text */}
          <p className="mt-6 text-sm text-background/60">
            30 minutes. Free. No pitch, no pressure.
          </p>

          {/* Trust signals */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-background/10 pt-12">
            <div className="text-center">
              <p className="font-heading text-2xl font-bold text-background">$0</p>
              <p className="text-xs text-background/60">Discovery call</p>
            </div>
            <div className="h-8 w-px bg-background/20" />
            <div className="text-center">
              <p className="font-heading text-2xl font-bold text-background">30 min</p>
              <p className="text-xs text-background/60">Your time</p>
            </div>
            <div className="h-8 w-px bg-background/20" />
            <div className="text-center">
              <p className="font-heading text-2xl font-bold text-background">3+</p>
              <p className="text-xs text-background/60">Opportunities identified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
