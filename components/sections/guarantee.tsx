import { Section } from "@/components/layout";
import { guarantee } from "@/content/home";

export function Guarantee() {
  return (
    <Section id="guarantee" container="narrow" padding="default">
      <div className="border-2 border-brand/20 bg-brand/5 px-8 py-12 sm:px-12 sm:py-16">
        <h2 className="text-h2 mb-8 text-foreground text-balance">
          {guarantee.headline}
        </h2>

        <div className="space-y-6">
          {guarantee.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-body-lg leading-relaxed text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
