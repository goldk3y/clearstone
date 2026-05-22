import { Section } from "@/components/layout";
import { comparison } from "@/content/home";
import { RiCloseLine, RiCheckLine } from "@remixicon/react";

export function Comparison() {
  return (
    <Section id="comparison" container="default" padding="default">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-h2 mb-12 text-center text-foreground text-balance">
          {comparison.headline}
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Without */}
          <div className="border border-border p-6 sm:p-8">
            <h3 className="text-h4 mb-6 text-muted-foreground">Without the Blueprint</h3>
            <ul className="space-y-4">
              {comparison.without.map((item, index) => (
                <li key={index} className="flex gap-3 text-body">
                  <RiCloseLine className="mt-0.5 size-5 shrink-0 text-muted-foreground/60" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With */}
          <div className="border border-brand/30 bg-brand/5 p-6 sm:p-8">
            <h3 className="text-h4 mb-6 text-foreground">With the Blueprint</h3>
            <ul className="space-y-4">
              {comparison.with.map((item, index) => (
                <li key={index} className="flex gap-3 text-body">
                  <RiCheckLine className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
