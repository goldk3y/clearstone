import { Section } from "@/components/layout";
import { fourteenDays } from "@/content/home";

export function FourteenDays() {
  return (
    <Section id="process" container="default" padding="default" background="muted">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-h2 mb-16 text-center text-foreground text-balance">
          {fourteenDays.headline}
        </h2>

        {/* Timeline */}
        <div className="space-y-0">
          {fourteenDays.steps.map((step, index) => (
            <div
              key={index}
              className="grid grid-cols-[100px_1fr] gap-6 pb-10 last:pb-0 md:grid-cols-[140px_1fr] md:gap-10"
            >
              {/* Day marker */}
              <div className="relative">
                <div className="sticky top-24 flex h-14 items-center justify-center border border-border bg-background px-4 whitespace-nowrap">
                  <span className="text-label text-foreground">{step.day}</span>
                </div>
                {/* Connecting line */}
                {index < fourteenDays.steps.length - 1 && (
                  <div className="absolute left-1/2 top-14 h-full w-px -translate-x-1/2 bg-border" />
                )}
              </div>

              {/* Content */}
              <div className="pt-3">
                <h3 className="text-h4 mb-2 text-foreground">{step.title}</h3>
                <p className="text-body max-w-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
