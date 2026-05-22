import { Section } from "@/components/layout";

const problems = [
  {
    number: "01",
    title: "You bought the tools. Nothing's connected.",
    description:
      "Copilot, ChatGPT Enterprise, Notion AI. All paid for, none talking to each other, none touching your real workflows.",
  },
  {
    number: "02",
    title: "Your team is using ChatGPT in the shadows.",
    description:
      "MIT NANDA found that 90% of workers use personal AI tools daily for job tasks. You can't govern it, you can't measure it, you can't capture the value.",
  },
  {
    number: "03",
    title: "Every vendor promises transformation. None show numbers.",
    description:
      "You've sat through three pitch decks this quarter. None of them gave you a P&L line.",
  },
] as const;

export function ProblemSection() {
  return (
    <Section id="problem" background="muted" padding="default">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left column - Stat and headline */}
        <div className="lg:col-span-5">
          <div>
            {/* Large stat */}
            <div className="mb-6">
              <span className="font-heading text-7xl font-bold tracking-tight text-foreground sm:text-8xl">
                ~95%
              </span>
              <p className="mt-2 text-body-lg text-pretty">
                of GenAI pilots produce no measurable P&L impact, per MIT NANDA.
              </p>
            </div>

            <h2 className="text-h2 mb-4 text-foreground text-balance">
              Yours doesn&apos;t have to.
            </h2>

            <p className="text-body">
              Three reasons mid-market operators get stuck:
            </p>

            {/* Source */}
            <p className="mt-6 text-caption">
              Source: MIT NANDA, &ldquo;The GenAI Divide: State of AI in
              Business 2025&rdquo;
            </p>
          </div>
        </div>

        {/* Right column - Problem list */}
        <div className="lg:col-span-7">
          <div className="space-y-8">
            {problems.map((problem) => (
              <div
                key={problem.number}
                className="group border-l-2 border-border py-2 pl-8 transition-colors hover:border-foreground"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    {problem.number}
                  </span>
                  <div>
                    <h3 className="text-h4 mb-2 text-foreground text-balance">
                      {problem.title}
                    </h3>
                    <p className="text-body max-w-lg text-pretty">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
