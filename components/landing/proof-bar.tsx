import { Section } from "@/components/layout";

const proofStats = [
  {
    value: "360K",
    label: "hours saved annually",
    context: "JPMorgan COiN, contract review automation",
  },
  {
    value: "60%",
    label: "fewer false alerts",
    context: "HSBC, AML detection AI",
  },
  {
    value: "700",
    label: "FTE equivalent",
    context: "Klarna, AI customer support",
  },
] as const;

export function ProofBar() {
  return (
    <Section padding="sm" background="default">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
        {/* Left side - context */}
        <div className="lg:col-span-4">
          <p className="text-overline mb-2">Proven Playbooks</p>
          <p className="text-body text-pretty">
            We don&apos;t promise you&apos;ll be JPMorgan. We apply the same
            methodology to your workflows, sized to your budget.
          </p>
        </div>

        {/* Right side - stats */}
        <div className="lg:col-span-8">
          <div className="flex flex-wrap gap-8 lg:justify-end lg:gap-12">
            {proofStats.map((stat, index) => (
              <div key={index} className="min-w-[140px]">
                <p className="font-heading text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                  {stat.value}
                </p>
                <p className="text-label mt-1">{stat.label}</p>
                <p className="mt-1 text-caption">{stat.context}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
