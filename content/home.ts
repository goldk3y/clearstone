// ClearStone AI Homepage Content
// All copy centralized for easy editing without touching JSX

export const siteConfig = {
  name: "ClearStone",
  domain: "clearstoneai.com",
  email: "hello@clearstoneai.com",
  calendlyUrl: "#book", // Replace with actual Calendly link
} as const;

// =============================================================================
// Section 1: Hero
// =============================================================================
export const hero = {
  headline: "Find the three AI projects worth building first.",
  subheadline:
    "In 14 days, ClearStone maps how work moves through your business, identifies the automation opportunities most likely to save time or increase revenue, and turns them into a build-ready AI Opportunity Blueprint.",
  qualifier:
    "For 10-100 employee companies with manual workflows and no internal AI team.",
  primaryCta: "Book a Blueprint Fit Call",
  secondaryCta: "See What's Included",
} as const;

// =============================================================================
// Section 2: The Mirror (Problem Framing)
// =============================================================================
export const mirror = {
  headline: "Your team already has AI tools. The work still runs manually.",
  intro: "ChatGPT. Zapier. A CRM. Spreadsheets. Project management software. Maybe a few half-built automations.",
  bridge: "But the work still runs through people.",
  symptoms: [
    "Leads still get copied by hand.",
    "Reports still take hours.",
    "Follow-ups still depend on memory.",
    "Customer data still lives across too many systems.",
    "The same information still gets retyped into the same places every week.",
  ],
  conclusion: "The problem is not that you need more tools. The problem is that nobody has mapped where automation fits in the operation.",
} as const;

// =============================================================================
// Section 3: The Stakes (Market Evidence)
// =============================================================================
export const stakes = {
  headline: "Most AI projects die between the demo and the workflow.",
  intro: "They usually break in one of four places:",
  failures: [
    {
      title: "Too many ideas.",
      description:
        "Everyone has a use case. Nobody knows which one is worth building.",
    },
    {
      title: "No workflow map.",
      description:
        "The team talks about automation before understanding how the work actually happens.",
    },
    {
      title: "No owner.",
      description:
        "The project sounds exciting, but nobody is accountable for getting it live.",
    },
    {
      title: "No build path.",
      description:
        "The company gets strategy, but not the sequence of decisions needed to implement.",
    },
  ],
  conclusion: "ClearStone exists to fix that gap.",
} as const;

// =============================================================================
// Section 4: The Blueprint (Offer)
// =============================================================================
export const blueprint = {
  headline: "The AI Opportunity Blueprint",
  description:
    "A focused 14-day sprint that turns scattered automation ideas into three build-ready projects.",
  detail:
    "We study how your business actually runs, identify the workflows where automation can create measurable leverage, and package the best opportunities into a clear implementation roadmap.",
  outcomes: {
    title: "At the end, you know:",
    items: [
      "What to build first",
      "Why it matters",
      "What workflow it improves",
      "Which tools or systems are involved",
      "What data is needed",
      "Who should own it",
      "What the implementation path looks like",
      "What tradeoffs to expect",
    ],
  },
  closing: "The Blueprint is a decision document your team can use to decide what to build, what not to build, who owns it, what it requires, and what happens next.",
} as const;

// =============================================================================
// Section 5: Sample Outputs (New - Example Projects)
// =============================================================================
export const sampleOutputs = {
  headline: "Sample outputs from a Blueprint",
  intro: "These are the kinds of projects we might identify:",
  examples: [
    {
      title: "Lead intake automation",
      description:
        "Reduce response time by routing inbound leads, enriching company records, assigning owners, and drafting first replies.",
    },
    {
      title: "Weekly ops report",
      description:
        "Replace manual reporting with an automated summary of sales, service, and operational exceptions.",
    },
    {
      title: "Customer follow-up system",
      description:
        "Trigger follow-ups based on missed replies, stale opportunities, completed jobs, or customer status changes.",
    },
  ],
} as const;

// =============================================================================
// Section 6: Why Three (Mechanism)
// =============================================================================
export const whyThree = {
  headline: "Why only three?",
  intro: "Because focus beats AI theater.",
  detail:
    "A business does not need fifty automation ideas. It needs the few that deserve time, money, and operational attention.",
  criteria: {
    title: "We score every opportunity by:",
    items: [
      {
        label: "Impact",
        description:
          "Will it save time, reduce cost, increase revenue, or remove operational drag?",
      },
      {
        label: "Feasibility",
        description:
          "Can it be built with your current systems, data, and team?",
      },
      {
        label: "Speed",
        description: "Can it reach a useful first version quickly?",
      },
    ],
  },
  closing:
    "The goal is not to prove automation can be used everywhere. The goal is to find where it should be used first.",
} as const;

// =============================================================================
// Section 7: Inside the Blueprint (Visual Deliverable)
// =============================================================================
export const insideBlueprint = {
  headline: "What you get inside the Blueprint",
  deliverables: [
    {
      id: "workflow-map",
      title: "Workflow Map",
      question: "Where is time being lost?",
      description:
        "A clear map of the workflows, handoffs, bottlenecks, repeated tasks, and manual decisions inside the business.",
    },
    {
      id: "opportunity-scorecard",
      title: "Opportunity Scorecard",
      question: "Which ideas are actually worth considering?",
      description:
        "A ranked list of opportunities scored by impact, feasibility, speed, risk, and dependency.",
    },
    {
      id: "three-moves",
      title: "Three Priority Projects",
      question: "What should we build first?",
      description:
        "The three highest-confidence projects, with the business case and reasoning behind each recommendation.",
    },
    {
      id: "recommended-stack",
      title: "Recommended Stack",
      question: "What tools and integrations are needed?",
      description:
        "The recommended tools, integrations, data sources, and technical approach for each project.",
    },
    {
      id: "implementation-plan",
      title: "Implementation Roadmap",
      question: "How do we get this live?",
      description:
        "A phased plan with owners, dependencies, risks, and next steps.",
    },
  ],
} as const;

// =============================================================================
// Section 8: The 14 Days (Process)
// =============================================================================
export const fourteenDays = {
  headline: "What happens in 14 days",
  steps: [
    {
      day: "Day 1",
      title: "Kickoff",
      description:
        "Define goals, collect context, review current tools, and choose the workflows worth studying.",
      output: "Inputs collected: tools, workflows, goals, team structure.",
    },
    {
      day: "Days 2-5",
      title: "Workflow discovery",
      description:
        "Interview key operators, review current processes, and map how work actually moves.",
      output: "Output: current-state workflow map.",
    },
    {
      day: "Days 6-9",
      title: "Opportunity scoring",
      description:
        "Identify possible automation projects, remove weak ideas, and rank the strongest opportunities.",
      output: "Output: ranked opportunity scorecard.",
    },
    {
      day: "Days 10-12",
      title: "Blueprint development",
      description:
        "Turn the top opportunities into detailed project plans with workflow logic, tools, dependencies, and implementation paths.",
      output: "Output: top three project plans.",
    },
    {
      day: "Days 13-14",
      title: "Review and decision",
      description:
        "Walk through the Blueprint, explain the tradeoffs, and help your team decide what to build first.",
      output: "Output: final Blueprint and recommended next step.",
    },
  ],
} as const;

// =============================================================================
// Section 9: The Guarantee
// =============================================================================
export const guarantee = {
  headline: "If we cannot find three real opportunities, you do not pay.",
  paragraphs: [
    "If we cannot identify at least three projects with a clear workflow, business case, owner, and implementation path, the Blueprint is free.",
    "That keeps the incentive simple: We only win if we find work worth doing.",
  ],
} as const;

// =============================================================================
// Section 10: Without/With Comparison (New)
// =============================================================================
export const comparison = {
  headline: "Without the Blueprint vs. With the Blueprint",
  without: [
    "Dozens of scattered automation ideas",
    "Tool-first decisions",
    "Unclear ownership",
    "Generic strategy",
    "Risky implementation",
  ],
  with: [
    "Three ranked priorities",
    "Workflow-first decisions",
    "Clear owners and dependencies",
    "Build-ready roadmap",
    "Sequenced implementation path",
  ],
} as const;

// =============================================================================
// Section 11: Who This Is For
// =============================================================================
export const whoIsThisFor = {
  headline: "Built for companies with real operations.",
  fitTitle: "ClearStone is a fit if you have:",
  fitItems: [
    "10-100 employees",
    "$2M-$25M in annual revenue",
    "Repeatable workflows across sales, admin, operations, service, or support",
    "Manual work that still depends on spreadsheets, inboxes, CRMs, forms, calls, or internal docs",
    "No internal AI transformation team",
  ],
  notFitTitle: "ClearStone is not a fit if you want:",
  notFitItems: [
    "A generic AI training session",
    "A list of trendy tools",
    "A chatbot demo",
    "Strategy without operational detail",
    "Automation before workflow discovery",
  ],
} as const;

// =============================================================================
// Section 12: Who Built This (Founder)
// =============================================================================
export interface FounderData {
  name: string;
  role: string;
  bio: string;
  photoUrl?: string;
  linkedInUrl?: string;
}

export const founder: FounderData = {
  name: "Stan Sedberry",
  role: "Founder, ClearStone",
  bio: "ClearStone is led by Stan Sedberry, a technical founder and operator who builds AI systems, workflow automations, and software products.",
  photoUrl: "/site-images/founder-headshot.png",
  linkedInUrl: "https://linkedin.com/in/stansedberry",
};

export const founderSection = {
  headline: "Built by an operator, not a deck shop.",
  detail:
    "That matters because the Blueprint is designed for implementation, not presentation.",
  intro:
    "Every recommendation is judged by practical questions:",
  questions: [
    "Can this be built?",
    "Can the team use it?",
    "What data is required?",
    "What breaks when this touches real operations?",
    "What should be built now, later, or never?",
  ],
} as const;

// =============================================================================
// Section 13: Why Blueprint Costs Less (Before Pricing)
// =============================================================================
export const whyBlueprintCostsLess = {
  headline: "Why the Blueprint costs less than guessing.",
  paragraphs: [
    "The expensive part of AI is not the software. It is building the wrong thing.",
    "A bad automation project can waste months of internal time, create fragile systems, confuse the team, and still fail to change the operation.",
  ],
  conclusion: "The Blueprint exists to answer the most expensive question first: What should we build?",
  kicker: "For most companies, one wrong build costs more than the Blueprint.",
} as const;

// =============================================================================
// Section 14: Pricing
// =============================================================================
export interface PricingTier {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  label?: string;
  includes?: string[];
  note?: string;
  credit?: string;
}

export const pricing = {
  headline: "Pricing",
  tiers: [
    {
      name: "AI Opportunity Blueprint",
      price: "$15,000",
      priceNote: "fixed fee",
      label: "Best first step",
      description:
        "For companies that want clarity before investing in implementation.",
      includes: [
        "Workflow discovery",
        "Operator interviews",
        "Current-state workflow map",
        "Opportunity scorecard",
        "Three priority project plans",
        "Recommended stack",
        "Implementation roadmap",
        "Final Blueprint review",
      ],
      credit: "If you hire ClearStone to implement one of the recommended projects, $5,000 of the Blueprint fee is credited toward the build.",
    },
    {
      name: "Implementation",
      price: "Custom scope",
      description:
        "For companies that want ClearStone to help build one or more projects from the Blueprint.",
      includes: [
        "Automation design",
        "Tool setup",
        "System integrations",
        "Workflow buildout",
        "Testing and rollout",
        "Team handoff",
      ],
      note: "Scoped separately based on complexity, integrations, data requirements, and timeline.",
    },
  ] as PricingTier[],
  cta: "Book a Blueprint Fit Call",
} as const;

// =============================================================================
// Section 15: FAQ
// =============================================================================
export const faq = {
  headline: "Frequently asked questions",
  items: [
    {
      question: "Is this just strategy?",
      answer:
        "No. The Blueprint is a practical implementation plan: workflows, priorities, stack, dependencies, owners, and next steps.",
    },
    {
      question: "Why not just start building?",
      answer:
        "Because builders usually build what you ask for. The Blueprint determines what is actually worth asking for.",
    },
    {
      question: "What if we already have automation ideas?",
      answer:
        "Good. We evaluate them against your workflows and rank them against other opportunities.",
    },
    {
      question: "Do we need clean data?",
      answer:
        "No. Part of the Blueprint is identifying what data exists, what is missing, and what needs to be cleaned or connected.",
    },
    {
      question: "Who needs to be involved?",
      answer:
        "Usually the owner or executive sponsor, plus the people closest to the workflows being studied.",
    },
    {
      question: "How much time does our team need to commit?",
      answer:
        "Usually a kickoff call, a few focused interviews, async document sharing, and a final review. The process is designed to avoid dragging your team through endless discovery.",
    },
    {
      question: "Can you implement afterward?",
      answer:
        "Yes. Implementation is scoped separately after the Blueprint.",
    },
    {
      question: "What if you cannot find three good projects?",
      answer:
        "You do not pay. If we cannot identify three specific opportunities with a clear workflow, business case, and implementation path, the Blueprint is free.",
    },
  ],
  stillHaveQuestions: "Still have questions?",
} as const;

// =============================================================================
// Section 16: Final CTA
// =============================================================================
export const finalCta = {
  headline: "Know what to build before you spend money building.",
  description:
    "Book a 30-minute Blueprint Fit Call. We will learn how your business runs, determine whether the Blueprint is a fit, and recommend the next step.",
  cta: "Book a Blueprint Fit Call",
  note: "30 minutes. Free. No pitch.",
} as const;

// =============================================================================
// Navigation
// =============================================================================
export const navigation = {
  links: [
    { href: "#blueprint", label: "Blueprint" },
    { href: "#inside", label: "What's Included" },
    { href: "#process", label: "14 Days" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: {
    href: "#book",
    label: "Book a Call",
  },
} as const;
