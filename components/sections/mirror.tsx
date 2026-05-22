import { Section } from "@/components/layout";
import { mirror } from "@/content/home";

export function Mirror() {
  return (
    <Section id="mirror" container="narrow" padding="default">
      <h2 className="text-h2 mb-10 text-foreground text-balance">
        {mirror.headline}
      </h2>

      <div className="space-y-6">
        {mirror.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-body-lg leading-relaxed text-pretty"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
