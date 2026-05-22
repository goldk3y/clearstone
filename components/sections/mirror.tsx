import { Section } from "@/components/layout";
import { mirror } from "@/content/home";

export function Mirror() {
  return (
    <Section id="mirror" container="narrow" padding="default">
      <h2 className="text-h2 mb-8 text-foreground text-balance">
        {mirror.headline}
      </h2>

      <div className="space-y-6">
        <p className="text-body-lg leading-relaxed text-pretty">
          {mirror.intro}
        </p>

        <p className="text-body-lg leading-relaxed text-pretty font-medium text-foreground">
          {mirror.bridge}
        </p>

        <ul className="space-y-3 text-body-lg">
          {mirror.symptoms.map((symptom, index) => (
            <li key={index} className="text-pretty">
              {symptom}
            </li>
          ))}
        </ul>

        <p className="text-body-lg leading-relaxed text-pretty pt-4">
          {mirror.conclusion}
        </p>
      </div>
    </Section>
  );
}
