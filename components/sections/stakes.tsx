import { Section } from "@/components/layout";
import { stakes } from "@/content/home";

export function Stakes() {
  return (
    <Section id="stakes" container="narrow" padding="default" background="muted">
      <h2 className="text-h2 mb-10 text-foreground text-balance">
        {stakes.headline}
      </h2>

      <div className="space-y-6">
        {stakes.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-body-lg leading-relaxed text-pretty"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <p className="mt-10 text-body-sm italic text-muted-foreground">
        {stakes.citation}
      </p>
    </Section>
  );
}
