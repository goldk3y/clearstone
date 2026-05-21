import Image from "next/image";
import { Section } from "@/components/layout";

export function CaseStudySection() {
  return (
    <Section padding="default" background="default">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* Case study image */}
        <div className="relative aspect-[4/3]">
          <Image
            src="/site-images/case-study.png"
            alt="Klarna AI assistant interface showing multilingual support, payment management, and refund explanations"
            fill
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-overline mb-4">Featured Case Study</p>

          {/* Large metric */}
          <div className="mb-6">
            <span className="font-heading text-6xl font-bold tracking-tight text-brand sm:text-7xl">
              700
            </span>
            <p className="mt-2 text-h4 text-foreground">
              full-time agent equivalent
            </p>
          </div>

          {/* Company and description */}
          <h2 className="text-h3 mb-4 text-foreground text-balance">
            Klarna Transforms Customer Support with Generative AI
          </h2>

          <p className="text-body mb-6 max-w-lg text-pretty">
            The buy-now-pay-later giant deployed an AI assistant that now
            handles two-thirds of all customer service chats. Resolution time
            dropped from 11 minutes to under 2. Customer satisfaction scores
            stayed flat, while operating costs dropped dramatically.
          </p>

          {/* Key results */}
          <div className="flex flex-wrap gap-6">
            <div>
              <p className="font-heading text-2xl font-bold text-foreground">2/3</p>
              <p className="text-caption">of all chats handled by AI</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-foreground">&lt;2 min</p>
              <p className="text-caption">average resolution time</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-foreground">$40M</p>
              <p className="text-caption">projected annual savings</p>
            </div>
          </div>

          {/* Attribution */}
          <p className="mt-8 text-caption text-pretty">
            This is the kind of AI transformation we help mid-market operators
            achieve, scaled to your business.
          </p>
        </div>
      </div>
    </Section>
  );
}
