import { Section } from "@/components/layout";
import { sampleOutputs } from "@/content/home";

export function SampleOutputs() {
  return (
    <Section id="sample-outputs" container="default" padding="default" background="muted">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-h2 mb-4 text-foreground text-balance">
          {sampleOutputs.headline}
        </h2>
        <p className="text-body-lg mb-10">
          {sampleOutputs.intro}
        </p>

        <div className="space-y-6">
          {sampleOutputs.examples.map((example, index) => (
            <div
              key={index}
              className="border-l-2 border-brand/30 pl-6"
            >
              <h3 className="text-h4 mb-2 text-foreground">{example.title}</h3>
              <p className="text-body">{example.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
