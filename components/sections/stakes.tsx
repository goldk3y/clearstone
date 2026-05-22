import { Section } from "@/components/layout";
import { stakes } from "@/content/home";

export function Stakes() {
  return (
    <Section id="stakes" container="narrow" padding="default" background="muted">
      <h2 className="text-h2 mb-6 text-foreground text-balance">
        {stakes.headline}
      </h2>

      <p className="text-body-lg mb-10 text-pretty">
        {stakes.intro}
      </p>

      <div className="space-y-6">
        {stakes.failures.map((failure, index) => (
          <div key={index}>
            <p className="text-body-lg leading-relaxed text-pretty">
              <span className="font-semibold text-foreground">{failure.title}</span>{" "}
              {failure.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-body-lg font-medium text-foreground">
        {stakes.conclusion}
      </p>
    </Section>
  );
}
