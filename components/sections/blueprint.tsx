import { Section } from "@/components/layout";
import { blueprint } from "@/content/home";
import { RiCheckLine } from "@remixicon/react";

export function Blueprint() {
  return (
    <Section id="blueprint" container="default" padding="default">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-h2 mb-4 text-foreground text-balance">
          {blueprint.headline}
        </h2>
        <p className="text-body-lg mb-6 text-pretty">
          {blueprint.description}
        </p>
        <p className="text-body-lg mb-12 text-pretty">
          {blueprint.detail}
        </p>

        {/* Outcomes */}
        <div className="mb-10">
          <h3 className="text-h4 mb-6 text-foreground">
            {blueprint.outcomes.title}
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {blueprint.outcomes.items.map((item, index) => (
              <li key={index} className="flex gap-3">
                <RiCheckLine className="mt-0.5 size-5 shrink-0 text-brand" />
                <span className="text-body">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-body-lg font-medium text-foreground">
          {blueprint.closing}
        </p>
      </div>
    </Section>
  );
}
