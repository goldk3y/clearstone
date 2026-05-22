# ClearStone Website Rebuild — Implementation Spec

You are rebuilding the ClearStone AI homepage (and adjacent routes) at `clearstoneai.com`. This is a Next.js site. Treat this document as the source of truth — when in doubt, follow this spec over what's currently in the codebase.

The rebuild is a strategic repositioning, not a redesign. Copy changes, structural reordering, removal of borrowed-credibility sections, and the addition of four new sections are the meat of the work. Design system changes are secondary but specified at the bottom.

---

## 1. Strategic context (read this first)

ClearStone is a productized AI diagnostic for founder-led US companies in the $25M–$100M revenue band. The product is the **3-Bet Blueprint**: a 14-day, fixed-fee written deliverable that names the three highest-ROI AI investments in the buyer's business and ships with workflows, vendor selections, ROI models, and a 90-day implementation plan per bet.

The market is at Schwartz sophistication Level 5 — every variant of generic AI consulting copy has been heard and discounted. The site wins by being:

1. **Specific** — concrete numbers (three, fourteen, fifteen thousand), no buzzwords
2. **Mechanism-led** — "Why three" is the proprietary constraint; treat it as a brand element
3. **Deliverable-first** — show the artifact before the founder, before the pricing, before the case studies (which don't exist yet)
4. **Adult in tone** — no exclamation points, no "we believe", no transformation language

The visitor lands believing AI matters but feeling overwhelmed and behind. The site's job is to move them from "I should do something" to "I'm booking the call" by being the clearest, most believable path to a board-defensible AI plan.

---

## 2. What to keep, cut, add (high level)

### Keep
- The three-pillar problem section copy ("You bought the tools. Nothing's connected." / shadow ChatGPT / vendors don't show numbers)
- The MIT NANDA 95% citation (but demote — see Section 5 below)
- The fixed-fee + Blueprint-credited-toward-implementation offer structure
- The FAQ (with edits below)
- The "Big Four / 0.6% of revenue on PowerPoint" framing — move to FAQ
- Calendly integration for booking

### Cut entirely
- The borrowed-credibility logo/stats section ("Drawing on the playbooks that helped JPMorgan… HSBC… Klarna…")
- The Klarna featured case study section (the big block with 700 FTE / 2/3 of chats / $40M savings)
- The "Proven Playbooks" stat strip (360K / 60% / 700)
- The "Industries We Serve" four-card section
- The current "AI That Ships in 90 Days" eyebrow above the hero
- The hero stock image
- All references to a $2,500 price point — replace with $15,000

### Add (new sections)
- "Why Three" mechanism section
- "Inside the Blueprint" visual section (with placeholder strategy — see Section 4 below)
- "The 14 Days" day-by-day timeline section
- "Already Tried AI?" Pilot Autopsy entry section
- Named founder section ("Who Built This")
- Explicit Pricing section (currently embedded in the Blueprint card — pull it out)
- "What you don't get" anti-list inside the Blueprint section

### Reframe
- Hero headline, CTAs, qualifier line (verbatim copy below)
- The "How It Works" 3-step section becomes "The 14 Days" with a different structure
- Guarantee language (precise legal version provided below)
- All pricing language: Blueprint $15K, Implementation $15K–$100K per bet

### Hide but do not delete
- `/industries/professional-services`, `/industries/ecommerce-retail`, `/industries/manufacturing`, `/industries/financial-services` — remove from nav, remove from homepage card grid, but keep the route files for future use. Add `noindex` meta to each for now.

---

## 3. New homepage section order

Implement the homepage as 13 sections in this exact order. Each section is its own component for maintainability.

| # | Section | Component name |
|---|---|---|
| 1 | Hero | `<Hero />` |
| 2 | The Mirror (problem framing) | `<Mirror />` |
| 3 | The Stakes (market evidence) | `<Stakes />` |
| 4 | The Blueprint (offer) | `<Blueprint />` |
| 5 | Why Three (mechanism) | `<WhyThree />` |
| 6 | Inside the Blueprint (visual deliverable) | `<InsideBlueprint />` |
| 7 | The 14 Days (process) | `<FourteenDays />` |
| 8 | The Guarantee | `<Guarantee />` |
| 9 | Already Tried AI? (Pilot Autopsy) | `<PilotAutopsy />` |
| 10 | Who Built This (founder) | `<Founder />` |
| 11 | Pricing | `<Pricing />` |
| 12 | FAQ | `<FAQ />` |
| 13 | Final CTA | `<FinalCTA />` |

Top nav: `Blueprint` (anchors to §4), `Inside` (§6), `14 Days` (§7), `Pricing` (§11), `FAQ` (§12), and a `Book a Call` button on the right.

Remove the `Industries` nav item.

---

## 4. Section-by-section implementation

For each section: the purpose, the verbatim copy, the design intent, and any technical notes.

### Section 1 — Hero

**Purpose:** Lock in the offer in 5 seconds.

**Copy:**

> **Three AI bets. Fourteen days. Fixed fee.**
>
> ClearStone identifies the three AI investments most likely to pay back inside 90 days in your business — then delivers the workflows, vendor selections, ROI model, and build plan to execute them.
>
> [**Find Your Three AI Bets**] &nbsp; [See a Sample Blueprint]
>
> *A fixed-fee diagnostic for founder-led companies, $25M–$100M revenue.*

**Design:**
- Massive vertical whitespace. The hero should breathe.
- No hero image. No stock photography. No animation. The headline carries the section.
- Primary CTA solid (accent color). Secondary CTA outlined or text-link weight.
- The qualifier line (italic) sits beneath the CTAs, smaller, muted.
- No eyebrow text above the headline. Drop "AI That Ships in 90 Days."
- No logo strip below. No "trusted by." Zero borrowed credibility.

**Technical notes:**
- Primary CTA → Calendly link (existing)
- Secondary CTA → email capture modal that delivers the sample Blueprint PDF (see placeholder strategy below)
- Remove `/site-images/hero-image.png` reference

---

### Section 2 — The Mirror

**Purpose:** Make the buyer feel seen before any selling happens.

**Copy:**

> ## You bought the tools. Nothing's connected.
>
> ChatGPT licenses are in expense reports. Copilot is on someone's laptop. A vendor pitched you an agent that would do "everything" and you couldn't tell if it was real.
>
> Your team is using AI in the shadows. Your board is asking what your AI strategy is. Your CFO wants a number.
>
> You've sat through three pitch decks this quarter. None of them gave you a P&L line.

**Design:**
- Three short paragraphs. No bullets, no icons, no cards.
- Generous line-height. Reads like a letter, not a brochure.
- No CTA at the end of this section. The reader's job is just to nod and scroll.

**Technical notes:**
- Pull the existing three-pillar copy ("01 / 02 / 03" with icons) and convert to flowing prose as above. The substance is right; the format is too SaaS.

---

### Section 3 — The Stakes

**Purpose:** Quantify the cost of staying stuck. Demote the MIT NANDA stat from hero anchor to supporting evidence.

**Copy:**

> ## Most AI programs don't ship.
>
> Of the companies that launched AI initiatives last year, only about 1 in 20 produced measurable P&L impact. The rest are stuck in pilot purgatory, vendor sprawl, or strategy decks nobody acts on.
>
> The companies that crossed the line had one thing in common: they picked a small number of high-leverage workflows, built them, and shipped them. They didn't try to "transform." They placed bets.
>
> *Sources: MIT NANDA, State of AI in Business 2025; McKinsey, State of AI 2025; BCG AI Radar 2026.*

**Design:**
- Citations in small, italic, muted type beneath the section. Not in a callout box. Not on the hero.
- Frame as "about 1 in 20" rather than "95% fail" — same number, less newsroom-sensational, more analyst-credible.

---

### Section 4 — The Blueprint

**Purpose:** Show what the buyer is actually buying. The "What you don't get" list is mandatory.

**Copy:**

> ## The 3-Bet Blueprint
>
> A 14-day, fixed-fee diagnostic that ends with three named AI investments, ranked by 90-day ROI, with the workflows, vendors, integration plan, and build roadmap to execute.
>
> ### What you get
>
> - A 25–35 page Blueprint document, written for the CEO and CFO, with three prioritized bets
> - Workflow-level diagrams of where AI fits in your current operation
> - Vendor-or-build recommendations for each bet, with named tools and dollar figures
> - A dollar ROI model per bet — savings, risk-adjusted, with assumptions you can audit
> - A 90-day implementation Gantt for each bet
> - A 60-minute walkthrough with you, your COO, and your CFO
> - A fixed-fee implementation proposal, valid for 30 days
>
> ### What you don't get
>
> - A 200-page deck
> - Generic "AI strategy" frameworks
> - A list of vendors with affiliate links
> - "AI maturity scores"
> - Three weeks of discovery before any work starts

**Design:**
- Two-column layout on desktop (What you get / What you don't get), stacked on mobile.
- The "don't get" column visually distinct — strikethrough or muted color or X icons. It should read as an anti-list, not a second positive list.
- No price in this section. Pricing lives in Section 11.

---

### Section 5 — Why Three

**Purpose:** Name and defend the proprietary mechanism.

**Copy:**

> ## Why three?
>
> Not because three is a magic number. Because three is the smallest number that demonstrates a program — and the largest number a mid-market team can actually ship in 90 days.
>
> **One bet** isn't a strategy. It's a project.
>
> **Five bets** is a roadmap. Roadmaps don't ship.
>
> **Three bets** is what gets to your next board meeting with real numbers.

**Design:**
- Treat the numeral "3" as a brand element. Large, confident, possibly with a custom display treatment.
- The three "One / Five / Three" lines should have visual rhythm — equal weight, scannable, with the "Three" line emphasized.
- This section should feel opinionated, not corporate.

---

### Section 6 — Inside the Blueprint *(highest-leverage section on the page)*

**Purpose:** Show the actual deliverable. This is the single most important section for conversion.

**Copy (frames the visuals):**

> ## Inside the Blueprint
>
> The Blueprint is the deliverable. Here's what's actually in one.

Then below, **five visual blocks** showing pages from a redacted sample Blueprint:

1. **Executive summary page** — three bets named, dollar impact, timeline
2. **Workflow diagram page** — before/after of one workflow
3. **Vendor analysis page** — three vendors evaluated against criteria
4. **ROI model page** — assumptions, sensitivities, 90-day curve
5. **Implementation Gantt page** — week-by-week milestones

Each visual gets a one-line caption underneath. No more.

**PLACEHOLDER STRATEGY (critical — the sample Blueprint asset does not exist yet):**

For initial deploy:
- Build the section structure with five `<BlueprintPage />` components
- Each component accepts `image`, `caption`, and `alt` props
- Use **high-fidelity wireframe-style placeholders** for the images — not stock photos, not "coming soon" cards. Generate clean, designed mockups that resemble what the real pages will look like. They should be obviously stylized (e.g., grayscale or single-tone) so they don't masquerade as real client work, but professional enough that they don't look like dev placeholders.
- Add a small disclaimer beneath the gallery: *"Sample pages from a redacted Blueprint. Full sample available on request."*
- Wire the "See a Sample Blueprint" CTA (hero secondary CTA) to an email-gated download form. Until the real PDF exists, the form should capture the email and respond with: *"The full sample Blueprint is being finalized — we'll send it to you within 48 hours."* Use a simple form + email notification to the founder.

**Design:**
- Dominantly visual section. Almost zero body copy.
- Large image blocks, sequential narrative, magazine-spread feel.
- This section should be the longest scroll length on the page.
- Lightbox or modal-on-click optional but valuable.

---

### Section 7 — The 14 Days

**Purpose:** Demystify the process. Replace the existing three-step "How It Works" section.

**Copy:**

> ## What happens in 14 days
>
> **Day 1 — Kickoff (90 min).** You, your COO, your CFO, and us. We map the business, the stack, and the constraints.
>
> **Days 2–5 — Workflow interviews.** We talk to your top operators — sales, finance, ops, support. We map current workflows. We surface what's broken and what's costly.
>
> **Days 6–9 — Analysis.** We model the candidates. We pressure-test vendor options. We build the ROI cases.
>
> **Days 10–13 — Drafting.** We write the Blueprint. Three bets. Workflows. Vendors. Dollar models. Implementation plans.
>
> **Day 14 — Walkthrough.** 60 minutes with you and your team. The Blueprint is yours.

**Design:**
- Horizontal timeline on desktop, vertical on mobile.
- Each step has a clear "Day X" label as the anchor.
- No icons unless they earn their place. Numbers are the visual hierarchy.

**Technical notes:**
- Replace the existing `HowItWorks` component (the one with "30-min AI Opportunity Call → $2,500 Blueprint → Implementation" cards). Repurpose the structure but with the 14-day breakdown.

---

### Section 8 — The Guarantee

**Purpose:** Handle the price-risk objection with legally precise language.

**Copy:**

> ## If we can't find three, you don't pay.
>
> At the end of the diagnostic, if ClearStone has not identified three implementation-ready AI bets that pass your team's internal hurdle rate, the engagement fee is fully refunded.
>
> No subjective satisfaction clause. No mood test. The bar is simple: three viable bets, or the fee is yours back.

**Design:**
- Stand-alone section with visual weight. Not a footnote, not buried in the offer section.
- Could be visually framed (border, background tint, or accent treatment) to read as a promise.

---

### Section 9 — Already Tried AI? (Pilot Autopsy)

**Purpose:** Capture defensive-mindset buyers who came in saying "we already failed." Provide a secondary entry point that isn't the main CTA.

**Copy:**

> ## Already tried AI and got nowhere?
>
> Send us the project. We'll write you a free Pilot Autopsy — a 30-minute analysis of what stalled and whether it's worth fixing, replacing, or killing.
>
> Most teams who hire us start here.
>
> [**Request a Pilot Autopsy**]

**Design:**
- Visually quieter than the main CTA sections. This is a side-door, not the main door.
- The CTA opens a short form: company, what they tried, who built it, what stalled. Free-text fields.

**Technical notes:**
- Form submits to founder's email
- Auto-response: "Thanks — I'll review and send you the Pilot Autopsy within 3 business days."

---

### Section 10 — Who Built This (Founder)

**Purpose:** Establish credibility through specificity. Replace borrowed logos with named operator.

**Copy template (founder fills in `[bracketed]` items):**

> ## Built by an operator, not a deck shop.
>
> ClearStone is built and delivered by **[Founder Name]**, a full-stack product designer and operator with 10+ years shipping software, including three years building AI-native products and AI integrations across [specific contexts — startups, consumer products, B2B tools, internal operations — name them].
>
> Prior work includes [specific shipped products and companies, named, with dates — e.g., "Vidi VR (TIME Best Inventions 2020)", "[Company 2] (2021–2023)", "[Product 3]"].
>
> When you hire ClearStone, the person on the Day 1 kickoff is the same person writing the Blueprint and the same person you call after it ships. No analysts. No handoffs.
>
> ### Credentials
>
> - Designed and shipped [N] products across [categories]
> - Built and integrated AI into operations at [N] companies
> - Founded and operated [N] startups
> - [One specific recognizable credential]

**Design:**
- Optional founder photo — professional, not a startup headshot cliché. If no good photo exists, skip it. A no-photo founder section reads more confident than a bad-photo one.
- Credentials as a clean bulleted list, not as stat cards.

**Technical notes:**
- Leave the `[bracketed]` placeholders in the code as `{props.founderName}`, `{props.priorWork}`, etc. — the founder will populate these before launch.

---

### Section 11 — Pricing

**Purpose:** Publish pricing. Specific, no "contact us."

**Copy:**

> ## Pricing
>
> ### The 3-Bet Blueprint — $15,000
>
> Fixed fee. 14 days. One Blueprint, three bets, full deliverable.
>
> The fee is 100% credited toward implementation if you choose to build any of the three bets with ClearStone.
>
> ### Implementation — $15,000–$100,000 per bet
>
> Fixed-fee per bet, scoped during the Blueprint. Typical engagements run one to three bets, depending on complexity.
>
> [**Find Your Three AI Bets**]

**Design:**
- Two pricing cards or a clean two-row layout.
- Prices large and confident. No strikethroughs, no "from", no "starting at" — these read as freelancer.
- Single primary CTA below pricing.

**Important: Do NOT publish founding-client discount pricing on the site.** That pricing ($7,500–$10,000 for the first three case-study clients) is negotiated privately during sales calls. Publishing it would anchor every future buyer to a number we're trying to move off of.

---

### Section 12 — FAQ

**Purpose:** Handle remaining objections. Keep most of existing FAQ — just update prices and add a few.

**Copy — replace existing FAQ with this set:**

1. **Who is this for?**
   Founder-led US companies, roughly $25M–$100M in annual revenue, with enough operational complexity that "where do we start with AI" is a real question. Below $25M, you're likely better served by off-the-shelf tools and a Make.com or Zapier freelancer. Above $250M, you may need a larger firm.

2. **How is this different from McKinsey, BCG, or Deloitte?**
   For a $500K enterprise transformation? You shouldn't hire us. For mid-market operators, the Big Four pricing model breaks down: a $300K strategy deck on a $50M company is 0.6% of revenue spent on PowerPoint. We deliver the diagnostic for $15,000, and we ship the implementation, not just the deck.

3. **How is this different from an "AI automation agency"?**
   Most AI automation agencies sell tools first and figure out the problem second. We do the opposite — diagnose the three highest-ROI workflows in your business first, then recommend build-or-buy. If the right answer is "buy this $400/month tool and wire it up," we say so.

4. **What if our highest-leverage opportunity isn't actually AI?**
   We'll tell you. Two of the three bets in a typical Blueprint are usually narrow workflow automations, not LLM agents. If AI isn't the right answer at all, we'll say that before you pay for the Blueprint.

5. **We already have a CTO / Head of AI. Where do you fit?**
   We work with them, not around them. The Blueprint typically gives your CTO the prioritization artifact they've been trying to write for six months while running everything else.

6. **We've tried pilots that stalled. How is this different?**
   Most clients who hire us tried pilots first. Send us the project — we'll write you a free Pilot Autopsy explaining what stalled and whether it's worth fixing, replacing, or killing.

7. **Will you recommend tools you resell?**
   No. ClearStone doesn't resell any software. No affiliate fees, no vendor kickbacks. Half of typical Blueprint recommendations are off-the-shelf tools we have no commercial relationship with.

8. **We're in a regulated industry. Can you work with HIPAA / SOC2 / FINRA?**
   Yes, with appropriate controls. Standard mutual NDA on call one. Full DPA before any data review. We work in your environment — your AWS/Azure/GCP, your CRM, your data warehouse. We don't take custody of your data.

9. **What does implementation actually look like?**
   Fixed-fee per bet, $15K–$100K depending on scope, with a defined timeline and acceptance criteria for each bet. We can build with your team, hand off to your team, or hand off to one of our certified implementation partners. Your call.

10. **Can we share the Blueprint with our board?**
    Yes. The Blueprint is written for the CEO and CFO to share with the board. Several sections are explicitly built for board-meeting use.

11. **What if we don't proceed to implementation?**
    That's a normal outcome. About a third of Blueprint clients implement with us, a third implement with their own team, and a third implement with a hybrid. The Blueprint is yours either way.

12. **What if you can't find three opportunities in our business?**
    Then you don't pay for the Blueprint. The bar is three implementation-ready bets that pass your team's internal hurdle rate.

**Design:**
- Accordion or expandable rows. Keep answers tight (2–4 sentences max).
- "Still have questions?" line at the end with an email link.

---

### Section 13 — Final CTA

**Purpose:** Close.

**Copy:**

> ## Find your three AI bets.
>
> Book a 30-minute call. We'll figure out if a Blueprint is the right fit. If it isn't, we'll tell you that.
>
> [**Book the Call**]
>
> *30 minutes. Free. No pitch.*

**Design:**
- Clean, large, generous whitespace.
- Single CTA. No secondary CTA in the final section.
- The "if it isn't, we'll tell you that" line is the most important sentence in the footer area. Don't bury it.

---

## 5. Design system updates

### Typography
- Move toward editorial, not SaaS. Suggested stack:
  - Headlines: a strong display serif (e.g., Tiempos, Söhne Breit, Editorial New) OR a high-contrast sans (Untitled Sans, Söhne, Inter Display)
  - Body: clean neutral sans (Inter, Söhne, Untitled Sans)
- Avoid gradient text. Avoid Inter at default weights everywhere — it's the AI-startup cliché.
- Treat the numeral **3** as a brand element. When it appears in headlines and section titles, give it visual emphasis (larger size, accent color, or a custom display character).

### Color
- Single accent color. Pick one and use it everywhere — CTAs, key numbers, links. Do not introduce a multi-color palette.
- Suggested direction: a deep, confident accent (e.g., a sharp blue, a deep amber, or a forest green) — not the typical AI gradient purple/blue.
- Generous use of neutral grays and white. The site should feel calm, not busy.

### Spacing
- Significantly more vertical whitespace than the current site. Each section should breathe.
- Hero, in particular, should have aggressive top/bottom padding.

### Images
- Remove all stock photography and stock dashboard images.
- The only imagery on the site should be:
  - The five sample Blueprint pages in Section 6 (placeholder mockups initially, real artifact later)
  - Optionally, a founder photo in Section 10 (skip if no good photo exists)
- No stock AI imagery anywhere (no glowing brains, no abstract networks, no robot hands).

### Components
- Build all 13 sections as separate components in `/components/sections/`.
- Centralize copy in a `/content/home.ts` file so future edits don't require touching JSX.

---

## 6. Routes and meta

### Homepage (`/`)
- Implement the 13 sections above.

### Industry pages (`/industries/*`)
- Remove from main nav.
- Remove from any homepage links.
- Add `noindex, nofollow` meta to each.
- Keep route files in place for future use.

### Meta tags
- Update homepage `<title>`: `ClearStone | The 3-Bet AI Blueprint for Mid-Market Operators`
- Update meta description: `A 14-day, fixed-fee diagnostic that names the three AI investments most likely to pay back inside 90 days in your business. For founder-led US companies, $25M–$100M.`
- Update OG title/description to match.
- Resolve domain inconsistency: og:url currently says `clearstone.ai` but live site is `clearstoneai.com`. Pick one and align everything (meta tags, internal links, canonical).

### Calendly
- Keep existing Calendly link for primary CTAs.
- Pilot Autopsy CTA goes to a form, not Calendly.

---

## 7. Acceptance criteria

Before considering the rebuild done, verify each of these:

1. **The 60-second test.** Show the homepage to three people not in AI (a founder friend, a CFO, a designer). Give them 60 seconds. Ask:
   - What does this company do?
   - Who is it for?
   - What does it cost?
   All three should be answerable from a 60-second skim. If not, copy is still too soft.

2. **No borrowed logos.** Zero mentions of JPMorgan, HSBC, Klarna, or any other company we don't have a direct relationship with — except possibly as a single example inside a Pilot Autopsy case study, if any are published.

3. **No dead phrases.** Search the site for every instance of: "AI transformation," "AI-powered," "next-generation," "cutting-edge," "unlock the power of AI," "game-changer," "AI-first," "AI-native," "transform your business," "future of work," "operationalize," "10x." Remove or rewrite all instances.

4. **Pricing is correct everywhere.** No `$2,500` anywhere on the site. Blueprint is `$15,000`. Implementation is `$15,000–$100,000 per bet`. Verify in: hero, Blueprint section, Pricing section, FAQ.

5. **Guarantee language is precise.** The phrase "three implementation-ready bets that pass your team's internal hurdle rate" appears verbatim in the Guarantee section.

6. **The number 3 is a visual anchor.** It appears prominently in: hero, Why Three section, Pricing section, Final CTA.

7. **No stock images.** No hero image. No stock dashboards. No abstract AI graphics.

8. **The "Inside the Blueprint" section has placeholder mockups visible.** Not "Coming Soon" cards. Not blank rectangles. Designed mockups that resemble the eventual real artifact.

9. **The founder section has `{props}` placeholders** for the founder to populate before launch.

10. **All four `/industries/*` pages have `noindex` and are unlinked from homepage.**

---

## 8. Tone and voice guardrails (read before writing any new copy)

- Adult, direct, slightly contrarian. The voice should sound like a senior operator wrote it for another senior operator.
- Short sentences. Specific numbers. Zero exclamation points.
- Never use "we believe," "we're passionate about," "our mission," or "we partner with."
- Never use the word "transformation."
- Never use "unlock," "supercharge," "10x," "game-changing," "revolutionary," or "cutting-edge."
- Never use "AI-powered [anything]."
- Avoid the phrase "next-generation" or "future of [anything]."
- Numbers always specific: "three bets," "14 days," "$15,000" — never "a few," "around two weeks," "affordable."
- Read every sentence out loud. If it would sound dumb said to a CFO, cut it.

---

## 9. Execution order

If you can't ship all sections in one pass, ship in this priority order:

1. **Phase 1 (highest priority):** Hero, Mirror, Blueprint, Why Three, Pricing, Guarantee, Final CTA. These together replace the most damaging current content (borrowed logos, $2,500 pricing, weak guarantee).
2. **Phase 2:** Inside the Blueprint (with placeholder mockups), The 14 Days, FAQ.
3. **Phase 3:** Founder section, Pilot Autopsy section.
4. **Phase 4:** Industry page hiding, meta tag updates, domain consistency.

Within Phase 1, the single highest-impact change is replacing the hero (headline + removing logo strip + removing $2,500 price).

---

## 10. What not to do

- Do not invent founder credentials. Leave `{props}` placeholders for the founder to fill in.
- Do not invent case studies, client names, or stats not provided in this spec.
- Do not add testimonials. We don't have any yet. Fake or anonymized testimonials would undercut everything.
- Do not add a "Trusted by" or "As seen in" strip with logos we don't have permission to use.
- Do not add an AI chatbot to the homepage. Yes, it's tempting. No, it doesn't help conversion in this market.
- Do not add animations, scroll-triggered effects, or fancy transitions beyond clean fades. Restraint reads as confidence.
- Do not introduce dark mode unless the existing site supports it cleanly. Out of scope.

---

When in doubt: be more specific, less generic, more restrained, less promotional. The site's job is to be the clearest, most believable path from "I should do something about AI" to "I'm booking the call." Every decision is measured against that.
