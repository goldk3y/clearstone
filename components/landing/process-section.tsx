import Image from "next/image";
import { Section } from "@/components/layout";

type ProcessStep = {
  step: string;
  title: string;
  price: string;
  priceSubtext: string | null;
  description: string;
  deliverable: string;
  image: string;
  imageAlt: string;
};

const steps: readonly ProcessStep[] = [
  {
    step: "01",
    title: "30-min AI Opportunity Call",
    price: "Free",
    priceSubtext: null,
    description:
      "We map your top revenue and cost workflows and flag the 3 highest-ROI AI plays. No pitch, no pressure. Just clarity.",
    deliverable: "Prioritized opportunity list",
    image: "/site-images/discovery-call.png",
    imageAlt: "Video call between consultant and client reviewing AI opportunities",
  },
  {
    step: "02",
    title: "The ClearStone Blueprint™",
    price: "$2,500",
    priceSubtext: null,
    description:
      "Fixed-scope, 2-week deliverable: 3 prioritized opportunities with ROI models, vendor shortlist, and 90-day implementation plan.",
    deliverable: "30-page executive report",
    image: "/site-images/blueprint-doc.png",
    imageAlt: "The ClearStone Blueprint document showing executive summary and ROI analysis",
  },
  {
    step: "03",
    title: "Implementation",
    price: "Starts at $15,000",
    priceSubtext: "Typical range: $15,000–$45,000 depending on scope",
    description:
      "We build it with you or hand it off to your team. Most clients proceed because the Blueprint makes the ROI obvious.",
    deliverable: "1–3 integrated AI workflows running in production. Includes monitoring, documentation, and team handoff.",
    image: "/site-images/dashboard.png",
    imageAlt: "AI automation dashboard showing real-time metrics, workflow performance, and integration health",
  },
];

export function ProcessSection() {
  return (
    <Section id="how-it-works" padding="default">
      {/* Section header - left aligned for variation */}
      <div className="mb-16 max-w-2xl">
        <p className="text-overline mb-4">How It Works</p>
        <h2 className="text-h2 mb-4 text-foreground text-balance">
          From first call to working system. In 90 days.
        </h2>
        <p className="text-body-lg text-pretty">
          No endless discovery. No strategy decks. We ship AI that moves your
          P&L, not PowerPoints that collect dust.
        </p>
      </div>

      {/* Alternating steps */}
      <div className="space-y-16 lg:space-y-24">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={step.step}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              {/* Content side */}
              <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                <span className="flex size-12 items-center justify-center bg-foreground text-lg font-semibold text-background mb-4">
                  {step.step}
                </span>

                <div className="flex items-baseline gap-4 mb-2">
                  <h3 className="text-h3 text-foreground text-balance">{step.title}</h3>
                  <span className="text-muted-foreground">{step.price}</span>
                </div>

                {step.priceSubtext ? (
                  <p className="text-caption mb-4">{step.priceSubtext}</p>
                ) : (
                  <div className="mb-2" />
                )}

                <p className="text-body mb-4 max-w-md text-pretty">{step.description}</p>

                <p className="text-label">
                  <span className="text-muted-foreground">Deliverable: </span>
                  <span className="text-foreground">{step.deliverable}</span>
                </p>
              </div>

              {/* Visual side */}
              <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Credit-back guarantee - left aligned */}
      <div className="mt-16 max-w-xl border border-border bg-muted/50 p-6">
        <p className="text-body text-pretty">
          <span className="font-semibold text-foreground">
            Blueprint fee credited toward implementation.
          </span>{" "}
          If you proceed to implementation, the full $2,500 Blueprint fee is
          credited toward your project cost. You pay once, not twice.
        </p>
      </div>
    </Section>
  );
}
