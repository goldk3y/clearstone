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
  headline: "Three AI moves. Fourteen days. Fixed fee.",
  subheadline:
    "A 14-day, fixed-fee diagnostic that names the three AI investments most likely to pay back inside 90 days. With the workflows, vendors, and build plan to ship them.",
  primaryCta: "Find Your Three AI Moves",
  secondaryCta: "See a Sample Blueprint",
  qualifier: "For founder-led companies, $25M–$100M, with enough operational complexity that \"where do we start with AI\" is a real question.",
} as const;

// =============================================================================
// Section 2: The Mirror (Problem Framing)
// =============================================================================
export const mirror = {
  headline: "You bought the tools. Nothing's connected.",
  paragraphs: [
    "ChatGPT licenses are in expense reports. Copilot is on someone's laptop. A vendor pitched you an agent that would do \"everything\" and you couldn't tell if it was real.",
    "Your team is using AI in the shadows. Your board is asking what your AI strategy is. Your CFO wants a number.",
    "You've sat through three pitch decks this quarter. None of them gave you a P&L line.",
  ],
} as const;

// =============================================================================
// Section 3: The Stakes (Market Evidence)
// =============================================================================
export const stakes = {
  headline: "Most AI programs don't ship.",
  paragraphs: [
    "Of the companies that launched AI initiatives last year, only about 1 in 20 produced measurable P&L impact. The rest are stuck in pilot purgatory, vendor sprawl, or strategy decks nobody acts on.",
    "The companies that crossed the line had one thing in common: they picked a small number of high-leverage workflows, built them, and shipped them. They didn't try to \"transform.\" They made moves.",
  ],
  citation:
    "Sources: MIT NANDA, State of AI in Business 2025; McKinsey, State of AI 2025; BCG AI Radar 2026.",
} as const;

// =============================================================================
// Section 4: The Blueprint (Offer)
// =============================================================================
export const blueprint = {
  headline: "The 3-Move Blueprint",
  description:
    "A 14-day, fixed-fee diagnostic that ends with three named AI investments, ranked by 90-day ROI, with the workflows, vendors, integration plan, and build roadmap to execute.",
  whatYouGet: {
    title: "What you get",
    items: [
      "A 25–35 page Blueprint document, written for the CEO and CFO, with three prioritized moves",
      "Workflow-level diagrams of where AI fits in your current operation",
      "Vendor-or-build recommendations for each move, with named tools and dollar figures",
      "A risk-adjusted dollar ROI model per move, with assumptions you can audit",
      "A 90-day implementation Gantt for each move",
      "A 60-minute walkthrough with your leadership team",
      "A fixed-fee implementation proposal, valid for 30 days",
    ],
  },
  whatYouDontGet: {
    title: "What you don't get",
    items: [
      "A 200-page deck",
      "Generic \"AI strategy\" frameworks",
      "A list of vendors with affiliate links",
      "\"AI maturity scores\"",
      "Three weeks of discovery before any work starts",
    ],
  },
} as const;

// =============================================================================
// Section 5: Why Three (Mechanism)
// =============================================================================
export interface WhyThreeMove {
  number: string;
  label: string;
  description: string;
  emphasis?: boolean;
}

export const whyThree = {
  headline: "Why three?",
  intro:
    "Not because three is a magic number. Because three is the smallest number that demonstrates a program, and the largest number a mid-market team can actually ship in 90 days.",
  moves: [
    {
      number: "One",
      label: "move",
      description: "isn't a strategy. It's a project.",
    },
    {
      number: "Five",
      label: "moves",
      description: "is a roadmap. Roadmaps don't ship.",
    },
    {
      number: "Three",
      label: "moves",
      description: "ships, measures, and earns the next round.",
      emphasis: true,
    },
  ] as WhyThreeMove[],
} as const;

// =============================================================================
// Section 6: Inside the Blueprint (Visual Deliverable)
// =============================================================================
export const insideBlueprint = {
  headline: "Inside the Blueprint",
  intro: "The Blueprint is the deliverable. Here's what's actually in one.",
  pages: [
    {
      id: "executive-summary",
      title: "Executive Summary",
      caption: "Three moves named, dollar impact, timeline",
      alt: "Blueprint executive summary page showing three prioritized AI moves with ROI figures",
    },
    {
      id: "workflow-diagram",
      title: "Workflow Diagram",
      caption: "Before/after of one workflow",
      alt: "Blueprint workflow diagram showing current state and AI-enhanced future state",
    },
    {
      id: "vendor-analysis",
      title: "Vendor Analysis",
      caption: "Three vendors evaluated against criteria",
      alt: "Blueprint vendor comparison table with scoring matrix",
    },
    {
      id: "roi-model",
      title: "ROI Model",
      caption: "Assumptions, sensitivities, 90-day curve",
      alt: "Blueprint ROI model with assumptions and projected savings",
    },
    {
      id: "implementation-gantt",
      title: "Implementation Gantt",
      caption: "Week-by-week milestones",
      alt: "Blueprint 90-day implementation timeline with milestones",
    },
  ],
  disclaimer:
    "Sample pages from a redacted Blueprint. Full sample available on request.",
} as const;

// =============================================================================
// Section 7: The 14 Days (Process)
// =============================================================================
export const fourteenDays = {
  headline: "What happens in 14 days",
  steps: [
    {
      day: "Day 1",
      title: "Kickoff (90 min)",
      description:
        "You, your COO, your CFO, and us. We map the business, the stack, and the constraints.",
    },
    {
      day: "Days 2–5",
      title: "Workflow interviews",
      description:
        "We talk to your top operators, sales, finance, ops, support. We map current workflows. We surface what's broken and what's costly.",
    },
    {
      day: "Days 6–9",
      title: "Analysis",
      description:
        "We model the candidates. We pressure-test vendor options. We build the ROI cases.",
    },
    {
      day: "Days 10–13",
      title: "Drafting",
      description:
        "We write the Blueprint. Three moves. Workflows. Vendors. Dollar models. Implementation plans.",
    },
    {
      day: "Day 14",
      title: "Walkthrough",
      description:
        "60 minutes with you and your team. The Blueprint is yours.",
    },
  ],
} as const;

// =============================================================================
// Section 8: The Guarantee
// =============================================================================
export const guarantee = {
  headline: "If we can't find three, you don't pay.",
  paragraphs: [
    "At the end of the diagnostic, if ClearStone has not identified three implementation-ready AI moves that pass your team's internal hurdle rate, the engagement fee is fully refunded.",
    "No subjective satisfaction clause. No mood test. The bar is simple: three viable moves, or the fee is yours back.",
  ],
} as const;

// =============================================================================
// Section 9: Already Tried AI? (Pilot Autopsy)
// =============================================================================
export const pilotAutopsy = {
  headline: "Already tried AI and got nowhere?",
  description:
    "Send us the project. We'll write you a free Pilot Autopsy, a 30-minute analysis of what stalled and whether it's worth fixing, replacing, or killing.",
  note: "Most teams who hire us start here.",
  cta: "Request a Pilot Autopsy",
  formFields: {
    company: "Company name",
    project: "What did you try?",
    builder: "Who built it?",
    stalled: "What stalled?",
  },
  confirmation:
    "Thanks. I'll review and send you the Pilot Autopsy within 3 business days.",
} as const;

// =============================================================================
// Section 10: Who Built This (Founder)
// =============================================================================
export interface FounderData {
  name: string;
  role: string;
  bio: string;
  priorWork: string[];
  credentials: string[];
  photoUrl?: string;
  linkedInUrl?: string;
}

export const founder: FounderData = {
  name: "Stan Sedberry",
  role: "Founder, ClearStone",
  bio: "I'm Stan. I've spent the last decade designing, building, and shipping products. The last three of them building AI products and integrating AI into the businesses I run.",
  priorWork: [],
  credentials: [],
  photoUrl: "/site-images/founder-headshot.png",
  linkedInUrl: "https://linkedin.com/in/stansedberry",
};

export const founderSection = {
  headline: "Built by an operator, not a deck shop.",
  contrast: "Most AI strategy comes from people who've never shipped an AI product. I have.",
  closing: "When you hire ClearStone, you work directly with me. Same person on the kickoff, the Blueprint, and the build.",
  tagline: "No analysts. No handoffs. No recycled decks.",
} as const;

// =============================================================================
// Section 11: Pricing
// =============================================================================
export interface PricingTier {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  note?: string;
}

export const pricing = {
  headline: "Pricing",
  tiers: [
    {
      name: "The 3-Move Blueprint",
      price: "$15,000",
      description: "Fixed fee. 14 days. Three moves, named and modeled.",
      note: "The fee is 100% credited toward implementation if you choose to build any of the three moves with ClearStone.",
    },
    {
      name: "Implementation",
      price: "$15,000–$100,000",
      priceNote: "per move",
      description:
        "Fixed-fee per move, scoped during the Blueprint. Most clients implement one or two; the third often gets handed to their team.",
    },
  ] as PricingTier[],
  cta: "Find Your Three AI Moves",
} as const;

// =============================================================================
// Section 12: FAQ
// =============================================================================
export const faq = {
  headline: "Frequently asked questions",
  items: [
    {
      question: "Who is this for?",
      answer:
        "Founder-led US companies, roughly $25M–$100M in annual revenue, with enough operational complexity that \"where do we start with AI\" is a real question. Below $25M, you're likely better served by off-the-shelf tools and a Make.com or Zapier freelancer. Above $250M, you may need a larger firm.",
    },
    {
      question: "How is this different from McKinsey, BCG, or Deloitte?",
      answer:
        "For a $500K enterprise transformation? You shouldn't hire us. For mid-market operators, the Big Four pricing model breaks down: a $300K strategy deck on a $50M company is 0.6% of revenue spent on PowerPoint. We deliver the diagnostic for $15,000, and we ship the implementation, not just the deck.",
    },
    {
      question: "How is this different from an \"AI automation agency\"?",
      answer:
        "Most AI automation agencies sell tools first and figure out the problem second. We do the opposite, diagnose the three highest-ROI workflows in your business first, then recommend build-or-buy. If the right answer is \"buy this $400/month tool and wire it up,\" we say so.",
    },
    {
      question: "What if our highest-leverage opportunity isn't actually AI?",
      answer:
        "We'll tell you. Two of the three moves in a typical Blueprint are usually narrow workflow automations, not LLM agents. If AI isn't the right answer at all, we'll say that before you pay for the Blueprint.",
    },
    {
      question: "We already have a CTO / Head of AI. Where do you fit?",
      answer:
        "We work with them, not around them. The Blueprint typically gives your CTO the prioritization artifact they've been trying to write for six months while running everything else.",
    },
    {
      question: "We've tried pilots that stalled. How is this different?",
      answer:
        "Most clients who hire us tried pilots first. Send us the project. We'll write you a free Pilot Autopsy explaining what stalled and whether it's worth fixing, replacing, or killing.",
    },
    {
      question: "Will you recommend tools you resell?",
      answer:
        "No. ClearStone doesn't resell any software. No affiliate fees, no vendor kickbacks. Half of typical Blueprint recommendations are off-the-shelf tools we have no commercial relationship with.",
    },
    {
      question: "We're in a regulated industry. Can you work with HIPAA / SOC2 / FINRA?",
      answer:
        "Yes, with appropriate controls. Standard mutual NDA on call one. Full DPA before any data review. We work in your environment, your AWS/Azure/GCP, your CRM, your data warehouse. We don't take custody of your data.",
    },
    {
      question: "What does implementation actually look like?",
      answer:
        "Fixed-fee per move, $15K–$100K depending on scope, with a defined timeline and acceptance criteria for each move. We can build with your team, hand off to your team, or hand off to one of our certified implementation partners. Your call.",
    },
    {
      question: "Can we share the Blueprint with our board?",
      answer:
        "Yes. The Blueprint is written for the CEO and CFO to share with the board. Several sections are explicitly built for board-meeting use.",
    },
    {
      question: "What if we don't proceed to implementation?",
      answer:
        "That's a normal outcome. About a third of Blueprint clients implement with us, a third implement with their own team, and a third implement with a hybrid. The Blueprint is yours either way.",
    },
    {
      question: "What if you can't find three opportunities in our business?",
      answer:
        "Then you don't pay for the Blueprint. The bar is three implementation-ready moves that pass your team's internal hurdle rate.",
    },
  ],
  stillHaveQuestions: "Still have questions?",
} as const;

// =============================================================================
// Section 13: Final CTA
// =============================================================================
export const finalCta = {
  headline: "Find your three AI moves.",
  description:
    "Book a 30-minute call. We'll figure out if a Blueprint is the right fit. If it isn't, we'll tell you that.",
  cta: "Book the Call",
  note: "30 minutes. Free. No pitch.",
} as const;

// =============================================================================
// Navigation
// =============================================================================
export const navigation = {
  links: [
    { href: "#blueprint", label: "Blueprint" },
    { href: "#inside", label: "Inside" },
    { href: "#process", label: "14 Days" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: {
    href: "#book",
    label: "Book a Call",
  },
} as const;
