import { Section } from "@/components/layout";
import { blueprint } from "@/content/home";
import { RiCheckLine, RiCloseLine } from "@remixicon/react";

export function Blueprint() {
  return (
    <Section id="blueprint" container="default" padding="default">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-h2 mb-4 text-foreground text-balance">
          {blueprint.headline}
        </h2>
        <p className="text-body-lg mb-12 max-w-3xl text-pretty">
          {blueprint.description}
        </p>

        {/* Two-column layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* What you get */}
          <div>
            <h3 className="text-h3 mb-6 text-foreground">
              {blueprint.whatYouGet.title}
            </h3>
            <ul className="space-y-4">
              {blueprint.whatYouGet.items.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <RiCheckLine className="mt-1 size-5 shrink-0 text-brand" />
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What you don't get */}
          <div className="lg:border-l lg:border-border lg:pl-12">
            <h3 className="text-h3 mb-6 text-muted-foreground">
              {blueprint.whatYouDontGet.title}
            </h3>
            <ul className="space-y-4">
              {blueprint.whatYouDontGet.items.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <RiCloseLine className="mt-1 size-5 shrink-0 text-muted-foreground/50" />
                  <span className="text-body-sm text-muted-foreground line-through decoration-muted-foreground/30">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
