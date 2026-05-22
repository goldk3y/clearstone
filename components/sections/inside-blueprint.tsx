import { Section } from "@/components/layout";
import { insideBlueprint } from "@/content/home";

interface BlueprintPageProps {
  title: string;
  caption: string;
  alt: string;
  id: string;
}

// High-fidelity McKinsey-style blueprint page previews
function BlueprintPage({ title, caption, id }: BlueprintPageProps) {
  return (
    <div className="group w-[180px] shrink-0 sm:w-full">
      {/* Document mockup with professional consulting design */}
      <div className="relative aspect-[8.5/11] overflow-hidden border border-neutral-200 bg-white shadow-sm transition-all group-hover:border-brand/40 group-hover:shadow-md">
        {/* Document header */}
        <div className="border-b border-neutral-100 bg-neutral-50/50 px-3 py-2">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold tracking-tight text-neutral-500 font-[family-name:var(--font-logo)]">
              ClearStone
            </span>
            <span className="text-[5px] text-neutral-300">Confidential</span>
          </div>
        </div>

        {/* Content area - McKinsey-level design per page type */}
        <div className="p-3">
          {id === "executive-summary" && <ExecutiveSummaryContent />}
          {id === "workflow-diagram" && <WorkflowDiagramContent />}
          {id === "vendor-analysis" && <VendorAnalysisContent />}
          {id === "roi-model" && <ROIModelContent />}
          {id === "implementation-gantt" && <ImplementationGanttContent />}
        </div>

        {/* Page footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-neutral-100 bg-neutral-50/30 px-3 py-1">
          <div className="flex items-center justify-between">
            <span className="text-[5px] text-neutral-300 font-[family-name:var(--font-logo)]">3-Move Blueprint</span>
            <span className="text-[5px] text-neutral-300">
              {id === "executive-summary" && "1"}
              {id === "workflow-diagram" && "8"}
              {id === "vendor-analysis" && "15"}
              {id === "roi-model" && "22"}
              {id === "implementation-gantt" && "28"}
            </span>
          </div>
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

// Executive Summary: 3 KPI cards + recommendation overview
function ExecutiveSummaryContent() {
  return (
    <div className="space-y-2.5">
      {/* Section title */}
      <div className="border-b border-neutral-100 pb-1">
        <h3 className="text-[7px] font-semibold text-neutral-800">
          Executive Summary: Three Prioritized AI Moves
        </h3>
      </div>

      {/* 3 KPI cards - the "three moves" */}
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { move: "01", label: "Support AI", roi: "$340K", time: "45 days" },
          { move: "02", label: "Doc Automation", roi: "$180K", time: "60 days" },
          { move: "03", label: "Sales Intel", roi: "$95K", time: "90 days" },
        ].map((item) => (
          <div
            key={item.move}
            className="border border-neutral-100 bg-neutral-50/50 p-1.5"
          >
            <div className="mb-1 flex items-center gap-1">
              <span className="flex h-3 w-3 items-center justify-center bg-brand text-[5px] font-bold text-white">
                {item.move}
              </span>
              <span className="text-[5px] font-medium text-neutral-600 leading-tight">
                {item.label}
              </span>
            </div>
            <div className="text-[9px] font-bold text-neutral-900">
              {item.roi}
              <span className="text-[5px] font-normal text-neutral-400">/yr</span>
            </div>
            <div className="mt-0.5 text-[5px] text-neutral-400">
              Live in {item.time}
            </div>
          </div>
        ))}
      </div>

      {/* Total impact callout */}
      <div className="flex items-center justify-between border border-brand/20 bg-brand/5 px-2 py-1">
        <span className="text-[6px] font-medium text-neutral-600">
          Combined Annual Impact
        </span>
        <span className="text-[10px] font-bold text-brand">$615K</span>
      </div>

      {/* Summary text block */}
      <div className="space-y-1 pt-1">
        <div className="text-[5px] font-medium text-neutral-500 uppercase tracking-wide">
          Recommendation
        </div>
        <div className="space-y-0.5">
          <div className="h-[3px] w-full bg-neutral-100" />
          <div className="h-[3px] w-[95%] bg-neutral-100" />
          <div className="h-[3px] w-[88%] bg-neutral-100" />
        </div>
      </div>

      {/* Quick stats row */}
      <div className="grid grid-cols-3 gap-1 border-t border-neutral-100 pt-1.5">
        <div className="text-center">
          <div className="text-[9px] font-bold text-neutral-800">6.2x</div>
          <div className="text-[5px] text-neutral-400">ROI (Yr 1)</div>
        </div>
        <div className="text-center">
          <div className="text-[9px] font-bold text-neutral-800">$99K</div>
          <div className="text-[5px] text-neutral-400">Investment</div>
        </div>
        <div className="text-center">
          <div className="text-[9px] font-bold text-neutral-800">90d</div>
          <div className="text-[5px] text-neutral-400">To Value</div>
        </div>
      </div>
    </div>
  );
}

// Workflow Diagram: Before/After AI integration flow
function WorkflowDiagramContent() {
  const currentSteps = ["Ticket In", "Triage", "Assign", "Draft", "Send"];
  const futureSteps = [
    { label: "Ticket In", ai: false },
    { label: "AI Classify", ai: true },
    { label: "AI Draft", ai: true },
    { label: "Review", ai: false },
    { label: "Send", ai: false },
  ];

  return (
    <div className="space-y-2">
      {/* Section title */}
      <div className="border-b border-neutral-100 pb-1.5">
        <h3 className="text-[7px] font-semibold text-neutral-800">
          Move 01: Support Workflow
        </h3>
      </div>

      {/* Current State */}
      <div>
        <div className="flex items-center gap-1 mb-1">
          <div className="h-2 w-2 bg-neutral-300" />
          <span className="text-[5px] font-medium text-neutral-500 uppercase tracking-wide">
            Current (Manual)
          </span>
          <span className="ml-auto text-[5px] text-neutral-400">24 min avg</span>
        </div>
        <div className="flex items-center justify-between">
          {currentSteps.map((step, i) => (
            <div key={i} className="flex items-center">
              <div className="flex h-7 w-9 items-center justify-center border border-neutral-200 bg-neutral-50">
                <span className="text-center text-[5px] leading-tight text-neutral-500">
                  {step}
                </span>
              </div>
              {i < currentSteps.length - 1 && (
                <div className="w-1.5 flex items-center justify-center">
                  <span className="text-[6px] text-neutral-300">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-brand/30" />
        <span className="text-[5px] font-semibold text-brand px-1">AI-ENHANCED</span>
        <div className="h-px flex-1 bg-brand/30" />
      </div>

      {/* Future State */}
      <div>
        <div className="flex items-center gap-1 mb-1">
          <div className="h-2 w-2 bg-brand" />
          <span className="text-[5px] font-medium text-brand uppercase tracking-wide">
            Future (AI-Assisted)
          </span>
          <span className="ml-auto text-[5px] font-medium text-brand">4 min avg</span>
        </div>
        <div className="flex items-center justify-between">
          {futureSteps.map((step, i) => (
            <div key={i} className="flex items-center">
              <div
                className={`flex h-7 w-9 items-center justify-center border ${
                  step.ai
                    ? "border-brand bg-brand/10"
                    : "border-neutral-200 bg-neutral-50"
                }`}
              >
                <span
                  className={`text-center text-[5px] leading-tight ${
                    step.ai ? "font-medium text-brand" : "text-neutral-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {i < futureSteps.length - 1 && (
                <div className="w-1.5 flex items-center justify-center">
                  <span className={`text-[6px] ${step.ai ? "text-brand" : "text-neutral-300"}`}>→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Impact metrics */}
      <div className="grid grid-cols-2 gap-2 border-t border-neutral-100 pt-2">
        <div className="text-center border border-neutral-100 py-1.5">
          <div className="text-[9px] font-bold text-brand">−83%</div>
          <div className="text-[5px] text-neutral-400">Time per ticket</div>
        </div>
        <div className="text-center border border-neutral-100 py-1.5">
          <div className="text-[9px] font-bold text-neutral-800">4,200 hrs</div>
          <div className="text-[5px] text-neutral-400">Saved annually</div>
        </div>
      </div>
    </div>
  );
}

// Vendor Analysis: Comparison matrix with scoring
function VendorAnalysisContent() {
  const vendors = [
    { name: "Intercom", scores: [5, 4, 5, 4], total: 18, rec: true },
    { name: "Zendesk", scores: [4, 3, 4, 3], total: 14, rec: false },
    { name: "Custom", scores: [3, 2, 5, 5], total: 15, rec: false },
  ];
  const criteria = ["Fit", "Cost", "Speed", "Scale"];

  return (
    <div className="space-y-2.5">
      {/* Section title */}
      <div className="border-b border-neutral-100 pb-1.5">
        <h3 className="text-[7px] font-semibold text-neutral-800">
          Vendor Evaluation: Support AI
        </h3>
      </div>

      {/* Comparison matrix - simplified 4 criteria */}
      <div className="overflow-hidden border border-neutral-100">
        {/* Header row */}
        <div className="grid grid-cols-4 bg-neutral-50">
          <div className="border-b border-r border-neutral-100 px-1.5 py-1">
            <span className="text-[5px] font-medium text-neutral-500">Criteria</span>
          </div>
          {vendors.map((v, idx) => (
            <div
              key={v.name}
              className={`border-b border-neutral-100 px-1 py-1 text-center ${idx < vendors.length - 1 ? "border-r" : ""} ${
                v.rec ? "bg-brand/5" : ""
              }`}
            >
              <span className={`text-[5px] font-semibold ${v.rec ? "text-brand" : "text-neutral-600"}`}>
                {v.name}
              </span>
              {v.rec && (
                <span className="ml-0.5 text-[4px] text-brand">★</span>
              )}
            </div>
          ))}
        </div>

        {/* Score rows - 4 criteria only */}
        {criteria.map((criterion, ci) => (
          <div key={criterion} className="grid grid-cols-4">
            <div className={`border-r border-neutral-100 px-1.5 py-1 ${ci < criteria.length - 1 ? "border-b" : ""}`}>
              <span className="text-[5px] text-neutral-500">{criterion}</span>
            </div>
            {vendors.map((v, vi) => (
              <div
                key={vi}
                className={`flex items-center justify-center gap-[2px] px-1 py-1 ${vi < vendors.length - 1 ? "border-r" : ""} ${ci < criteria.length - 1 ? "border-b" : ""} border-neutral-100 ${
                  v.rec ? "bg-brand/5" : ""
                }`}
              >
                {[1, 2, 3, 4, 5].map((dot) => (
                  <div
                    key={dot}
                    className={`h-[5px] w-[5px] rounded-full ${
                      dot <= v.scores[ci]
                        ? v.rec
                          ? "bg-brand"
                          : "bg-neutral-400"
                        : "bg-neutral-200"
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Total scores - inline */}
      <div className="flex items-center justify-between px-1">
        <span className="text-[5px] font-medium text-neutral-500">Total Score</span>
        <div className="flex gap-3">
          {vendors.map((v) => (
            <span
              key={v.name}
              className={`text-[7px] font-bold ${v.rec ? "text-brand" : "text-neutral-500"}`}
            >
              {v.total}/20
            </span>
          ))}
        </div>
      </div>

      {/* Pricing comparison - cleaner layout */}
      <div className="border-t border-neutral-100 pt-2">
        <div className="mb-1.5 text-[5px] font-medium text-neutral-500 uppercase tracking-wide">
          Annual Cost
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { name: "Intercom", cost: "$18K", rec: true },
            { name: "Zendesk", cost: "$24K", rec: false },
            { name: "Custom", cost: "$45K", rec: false },
          ].map((item) => (
            <div
              key={item.name}
              className={`py-1.5 text-center ${
                item.rec ? "border border-brand/30 bg-brand/5" : "bg-neutral-50"
              }`}
            >
              <div
                className={`text-[8px] font-bold ${
                  item.rec ? "text-brand" : "text-neutral-600"
                }`}
              >
                {item.cost}
              </div>
              <div className="text-[5px] text-neutral-400">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ROI Model: Simplified bar chart + key metrics
function ROIModelContent() {
  return (
    <div className="space-y-2.5">
      {/* Section title */}
      <div className="border-b border-neutral-100 pb-1.5">
        <h3 className="text-[7px] font-semibold text-neutral-800">
          ROI Model: 90-Day Projection
        </h3>
      </div>

      {/* Simplified horizontal bar chart - cleaner than waterfall */}
      <div className="space-y-1.5">
        {[
          { label: "Support AI", value: 340, percent: 55 },
          { label: "Doc Automation", value: 180, percent: 29 },
          { label: "Sales Intel", value: 95, percent: 16 },
        ].map((item, idx) => (
          <div key={item.label} className="space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="text-[5px] text-neutral-600">
                <span className="font-medium text-brand">0{idx + 1}</span> {item.label}
              </span>
              <span className="text-[6px] font-bold text-neutral-800">${item.value}K</span>
            </div>
            <div className="h-3 w-full bg-neutral-100">
              <div
                className="h-full bg-brand"
                style={{ width: `${item.percent}%`, opacity: 1 - idx * 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Total callout */}
      <div className="flex items-center justify-between border border-brand/20 bg-brand/5 px-2 py-1.5">
        <span className="text-[6px] font-medium text-neutral-600">
          Total Annual Savings
        </span>
        <span className="text-[11px] font-bold text-brand">$615K</span>
      </div>

      {/* Key metrics grid - 2x2 */}
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: "Investment", value: "$99K" },
          { label: "ROI", value: "6.2x" },
          { label: "Payback", value: "58 days" },
          { label: "3-Yr NPV", value: "$1.7M" },
        ].map((metric) => (
          <div
            key={metric.label}
            className="border border-neutral-100 bg-neutral-50/50 px-2 py-1.5 text-center"
          >
            <div className="text-[9px] font-bold text-neutral-800">
              {metric.value}
            </div>
            <div className="text-[5px] text-neutral-400">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Assumptions note */}
      <div className="text-[5px] text-neutral-400 text-center">
        85% adoption · $65/hr labor · See appendix
      </div>
    </div>
  );
}

// Implementation Gantt: Timeline with phases
function ImplementationGanttContent() {
  const phases = [
    { name: "Support AI", start: 0, duration: 45, color: "bg-brand" },
    { name: "Doc Automation", start: 30, duration: 30, color: "bg-brand/70" },
    { name: "Sales Intel", start: 60, duration: 30, color: "bg-brand/50" },
  ];

  return (
    <div className="space-y-2">
      {/* Section title */}
      <div className="border-b border-neutral-100 pb-1.5">
        <h3 className="text-[7px] font-semibold text-neutral-800">
          90-Day Implementation Roadmap
        </h3>
      </div>

      {/* Timeline header - aligned with bars */}
      <div className="grid grid-cols-[3rem_1fr] gap-2">
        <div />
        <div className="flex justify-between text-[5px] text-neutral-400 px-0.5">
          <span>Day 0</span>
          <span>30</span>
          <span>60</span>
          <span>90</span>
        </div>
      </div>

      {/* Gantt bars */}
      <div className="space-y-2">
        {phases.map((phase, idx) => (
          <div key={phase.name} className="grid grid-cols-[3rem_1fr] gap-2 items-center">
            <div className="text-[5px] text-neutral-600 leading-tight truncate">
              <span className="font-medium text-brand">0{idx + 1}</span> {phase.name}
            </div>
            <div className="relative h-5 bg-neutral-100/50 border border-neutral-100">
              {/* Grid lines */}
              <div className="absolute inset-0 flex">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex-1 border-r border-neutral-200/30 last:border-r-0"
                  />
                ))}
              </div>
              {/* Phase bar */}
              <div
                className={`absolute top-1 h-3 ${phase.color}`}
                style={{
                  left: `${(phase.start / 90) * 100}%`,
                  width: `${(phase.duration / 90) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Key milestones - horizontal list instead of overlapping markers */}
      <div className="border-t border-neutral-100 pt-2">
        <div className="mb-1 text-[5px] font-medium text-neutral-500 uppercase tracking-wide">
          Key Milestones
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          {[
            { day: "Day 14", label: "Blueprint delivered" },
            { day: "Day 45", label: "Move 01 live" },
            { day: "Day 60", label: "Move 02 live" },
            { day: "Day 90", label: "Move 03 live" },
          ].map((m) => (
            <div key={m.day} className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rotate-45 bg-brand flex-shrink-0" />
              <span className="text-[5px] text-neutral-600">
                <span className="font-medium">{m.day}:</span> {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Resources - simplified */}
      <div className="border-t border-neutral-100 pt-1.5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="text-[5px] font-medium text-neutral-500 uppercase tracking-wide mb-0.5">
              Resources
            </div>
            <div className="text-[5px] text-neutral-600">
              PM + Tech Lead + IT
            </div>
          </div>
          <div>
            <div className="text-[5px] font-medium text-neutral-500 uppercase tracking-wide mb-0.5">
              Dependencies
            </div>
            <div className="text-[5px] text-neutral-600">
              CRM API, Ticket export
            </div>
          </div>
        </div>
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
        <div className="flex gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:pb-0 lg:grid-cols-3 xl:grid-cols-5">
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
