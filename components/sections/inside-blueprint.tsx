import { Section } from "@/components/layout";
import { insideBlueprint } from "@/content/home";

export function InsideBlueprint() {
  return (
    <Section id="inside" container="default" padding="default">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-h2 mb-12 text-foreground text-balance">
          {insideBlueprint.headline}
        </h2>

        {/* Deliverables list with "Answers:" format */}
        <div className="grid gap-10 md:grid-cols-2">
          {insideBlueprint.deliverables.map((deliverable) => (
            <div key={deliverable.id}>
              <h3 className="text-h4 mb-2 text-foreground">
                {deliverable.title}
              </h3>
              <p className="text-label text-brand mb-2">
                Answers: {deliverable.question}
              </p>
              <p className="text-body text-muted-foreground">
                {deliverable.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
