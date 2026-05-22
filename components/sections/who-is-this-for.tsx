import { Section } from "@/components/layout";
import { whoIsThisFor } from "@/content/home";
import { RiCheckLine, RiCloseLine } from "@remixicon/react";

export function WhoIsThisFor() {
  return (
    <Section id="who-is-this-for" container="default" padding="default">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-h2 mb-12 text-foreground text-balance">
          {whoIsThisFor.headline}
        </h2>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Fit */}
          <div>
            <h3 className="text-h4 mb-6 text-foreground">
              {whoIsThisFor.fitTitle}
            </h3>
            <ul className="space-y-4">
              {whoIsThisFor.fitItems.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <RiCheckLine className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Fit */}
          <div className="lg:border-l lg:border-border lg:pl-12">
            <h3 className="text-h4 mb-6 text-muted-foreground">
              {whoIsThisFor.notFitTitle}
            </h3>
            <ul className="space-y-4">
              {whoIsThisFor.notFitItems.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <RiCloseLine className="mt-0.5 size-5 shrink-0 text-muted-foreground/50" />
                  <span className="text-body text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
