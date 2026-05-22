import { Section } from "@/components/layout";
import { insideBlueprint } from "@/content/home";

interface BlueprintPageProps {
  title: string;
  caption: string;
  alt: string;
  id: string;
}

function BlueprintPage({ title, caption, id }: BlueprintPageProps) {
  return (
    <div className="group">
      {/* Placeholder mockup - designed to look like a document page */}
      <div className="relative aspect-[8.5/11] overflow-hidden border border-border bg-gradient-to-b from-neutral-50 to-neutral-100 transition-all group-hover:border-brand/30">
        {/* Header area */}
        <div className="border-b border-neutral-200 bg-white/80 px-6 py-4">
          <div className="h-3 w-32 bg-neutral-300" />
        </div>

        {/* Content area - varies by page type */}
        <div className="p-6">
          {id === "executive-summary" && (
            <div className="space-y-4">
              <div className="h-2 w-24 bg-neutral-300" />
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="aspect-square bg-neutral-200/80" />
                    <div className="h-2 w-full bg-neutral-200" />
                    <div className="h-6 w-full bg-brand/20" />
                  </div>
                ))}
              </div>
              <div className="space-y-2 pt-4">
                <div className="h-2 w-full bg-neutral-200" />
                <div className="h-2 w-3/4 bg-neutral-200" />
              </div>
            </div>
          )}

          {id === "workflow-diagram" && (
            <div className="space-y-6">
              <div className="h-2 w-20 bg-neutral-300" />
              <div className="flex items-center gap-2">
                <div className="h-16 w-16 bg-neutral-200" />
                <div className="h-1 flex-1 bg-neutral-300" />
                <div className="h-16 w-16 bg-neutral-200" />
                <div className="h-1 flex-1 bg-neutral-300" />
                <div className="h-16 w-16 bg-brand/30" />
              </div>
              <div className="h-px w-full bg-neutral-200" />
              <div className="flex items-center gap-2">
                <div className="h-16 w-16 bg-brand/20" />
                <div className="h-1 flex-1 bg-brand/40" />
                <div className="h-16 w-16 bg-brand/20" />
                <div className="h-1 flex-1 bg-brand/40" />
                <div className="h-16 w-16 bg-brand/30" />
              </div>
            </div>
          )}

          {id === "vendor-analysis" && (
            <div className="space-y-4">
              <div className="h-2 w-28 bg-neutral-300" />
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="h-8 w-1/4 bg-neutral-200" />
                  <div className="h-8 flex-1 bg-neutral-100" />
                </div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-2">
                    <div className="h-8 w-1/4 bg-neutral-100" />
                    <div className="h-8 flex-1 bg-neutral-50 flex items-center px-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((j) => (
                          <div
                            key={j}
                            className={`h-3 w-3 ${j <= 3 + i - 1 ? "bg-brand/40" : "bg-neutral-200"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {id === "roi-model" && (
            <div className="space-y-4">
              <div className="h-2 w-20 bg-neutral-300" />
              <div className="aspect-[2/1] bg-neutral-50 p-4">
                <div className="flex h-full items-end gap-1">
                  {[20, 35, 50, 65, 80, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-brand/30"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="h-2 w-16 bg-neutral-300" />
                  <div className="h-4 w-20 bg-brand/20" />
                </div>
                <div className="space-y-1">
                  <div className="h-2 w-16 bg-neutral-300" />
                  <div className="h-4 w-20 bg-brand/20" />
                </div>
              </div>
            </div>
          )}

          {id === "implementation-gantt" && (
            <div className="space-y-4">
              <div className="h-2 w-32 bg-neutral-300" />
              <div className="space-y-2">
                {[
                  { start: 0, width: 25 },
                  { start: 20, width: 30 },
                  { start: 45, width: 25 },
                  { start: 65, width: 35 },
                ].map((bar, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-2 w-16 bg-neutral-200" />
                    <div className="relative h-6 flex-1 bg-neutral-50">
                      <div
                        className="absolute top-1 h-4 bg-brand/30"
                        style={{ left: `${bar.start}%`, width: `${bar.width}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[8px] text-neutral-400">
                <span>Week 1</span>
                <span>Week 4</span>
                <span>Week 8</span>
                <span>Week 12</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Caption */}
      <div className="mt-3 text-center">
        <p className="text-label text-foreground">{title}</p>
        <p className="text-caption">{caption}</p>
      </div>
    </div>
  );
}

export function InsideBlueprint() {
  return (
    <Section id="inside" container="wide" padding="lg">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-h2 mb-4 text-center text-foreground text-balance">
          {insideBlueprint.headline}
        </h2>
        <p className="text-body-lg mb-16 text-center text-pretty">
          {insideBlueprint.intro}
        </p>

        {/* Blueprint pages gallery */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {insideBlueprint.pages.map((page) => (
            <BlueprintPage
              key={page.id}
              id={page.id}
              title={page.title}
              caption={page.caption}
              alt={page.alt}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-center text-caption italic">
          {insideBlueprint.disclaimer}
        </p>
      </div>
    </Section>
  );
}
