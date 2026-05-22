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
        <div className="relative">
          {fourteenDays.steps.map((step, index) => (
            <div
              key={index}
              className="relative grid grid-cols-[auto_1fr] gap-4 pb-10 last:pb-0 md:grid-cols-[100px_auto_1fr] md:gap-6"
            >
              {/* Day label - hidden on mobile, shown on md+ */}
              <div className="hidden md:flex items-start justify-end pt-0.5">
                <span className="text-label text-foreground whitespace-nowrap">{step.day}</span>
              </div>

              {/* Dot and line */}
              <div className="relative flex justify-center">
                {/* Connecting line - starts from center of dot, extends full height of item */}
                {index < fourteenDays.steps.length - 1 && (
                  <div className="absolute top-2 left-1/2 w-0.5 h-full -translate-x-1/2 bg-brand/30" />
                )}
                {/* Dot */}
                <div className="relative z-10 h-4 w-4 shrink-0 rounded-full bg-brand ring-4 ring-muted" />
              </div>

              {/* Content */}
              <div>
                {/* Day label - shown on mobile only */}
                <span className="text-label text-foreground mb-1 block md:hidden">{step.day}</span>
                <h3 className="text-h4 mb-2 text-foreground">{step.title}</h3>
                <p className="text-body mb-2">{step.description}</p>
                <p className="text-body-sm text-brand font-medium">{step.output}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
