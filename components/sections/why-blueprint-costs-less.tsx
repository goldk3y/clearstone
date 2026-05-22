import { Section } from "@/components/layout";
import { whyBlueprintCostsLess } from "@/content/home";

export function WhyBlueprintCostsLess() {
  return (
    <Section id="why-blueprint" container="narrow" padding="default">
      <h2 className="text-h2 mb-8 text-foreground text-balance">
        {whyBlueprintCostsLess.headline}
      </h2>

      <div className="space-y-6">
        {whyBlueprintCostsLess.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-body-lg leading-relaxed text-pretty"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <p className="mt-8 text-body-lg font-medium text-foreground">
        {whyBlueprintCostsLess.conclusion}
      </p>

      <p className="mt-4 text-body-lg text-brand font-medium">
        {whyBlueprintCostsLess.kicker}
      </p>
    </Section>
  );
}
