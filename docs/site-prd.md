# ClearStone AI — Product Requirements Document & Implementation Plan
**Version 1.0 · May 2026 · Prepared by Lead Research Agent**

---

## ⚠️ Important Note on Source Material
The user-attached report at `/mnt/user-data/uploads/compass_artifact_wf-...md` could **not be accessed** by the available tools (every fetch attempt returned a permissions error — the file was outside the allowed fetch surface). This PRD therefore substitutes the attached report's customer-pain source-of-truth with **publicly sourced, named research**: the MIT NANDA *GenAI Divide: State of AI in Business 2025* report (July 2025), the RSM US 2025 Middle Market AI Survey (Big Village, n=966, fielded Feb 21–Mar 4 2025), McKinsey's "Economic Potential of Generative AI" (June 2023), and operator-tier 2025–26 pricing research from Aries Consulting, Buildtothrive, and Idealink. Before build kickoff, the founder should re-share the attached report (paste contents inline) so the copy in §5 can be re-tuned to the exact language and objections it captured. The architecture, pricing, segmentation, and component-level decisions below do **not** depend on the attached file.

---

## Executive Summary

**ClearStone AI is a productized AI-consulting funnel: a free discovery call → a paid "AI Integration Blueprint" ($2,500 flat) → an implementation upsell ($15K–$45K).** The website's only job is to convert a stranger into a booked discovery call with a pre-qualified mid-market operator who already believes AI matters but is frustrated that nearly all corporate GenAI pilots stall.

**Three opinionated recommendations the founder asked for:**

1. **Target segment — Lead with Mid-Market ($25M–$250M revenue); accept upper SMB ($5M–$25M) as a secondary segment; do NOT target sub-$5M or enterprises >$500M.** The RSM US 2025 Middle Market AI Survey of 966 mid-market decision-makers reports that 91% of mid-market firms now use generative AI (up from 77% the prior year) and verbatim that *"70% using generative AI report they need outside assistance to get the most out of that tool"* (RSM, "Middle Market Firms Rapidly Embracing Generative AI, But Expertise Gaps Pose Risks," June 11 2025). Yet RSM found only 37% have a "well-formulated" AI strategy and 53% feel just "somewhat prepared." That is the willingness-to-pay, the funded budget, and the readiness gap a $2,500–$45,000 productized offer is engineered to close. SMBs under $5M convert worse and can't fund implementation. Enterprises over $500M require RFPs, procurement, and SOC 2 review cycles ClearStone is not yet positioned to service.

2. **Pricing transparency — Show the Blueprint price publicly ($2,500 flat, credited toward implementation); show Implementation as a "starts at $15,000" anchor with full custom pricing call-gated.** Marcus Sheridan's "They Ask, You Answer" thesis is the cleanest evidence in print: in a 2025 RevOps Champions interview he stated verbatim, *"When I started talking about They Ask, You Answer, about 98% of companies were not addressing cost and price online for B2B services. To this day, that number is still about 94%. Most companies still don't address it"* (revopschampions.denamico.com/marcus-sheridan). HockeyStack's 80-company B2B SaaS study (31M visitors, 2024) provides the counter-balance: demo pages convert 1.44x better than full-pricing pages — but transparent pricing pages produce more downstream pipeline. The right answer for ClearStone is a hybrid: the *productized* offer (the Blueprint) shows price publicly; the *custom* offer (Implementation) uses an anchored "starts at" range. Two independent 2026 operator analyses (Aries Consulting; the Buildtothrive "Money Stack" report) place productized AI audits in a $1,500–$3,000 band — pricing the Blueprint at $2,500 anchors directly into the proven market band.

3. **Site architecture — ClickFunnels-style conversion pages glued to an SEO-grade content hub.** One squeeze-style home page, 4 industry pages (Professional Services, E-commerce/Retail, Manufacturing, Financial Services), 5 use-case pages, a blog with a 3-pillar topic-cluster structure, and supporting Thank-You / About / Contact pages. Every page funnels to the same primary CTA: **"Book a Free 30-Minute AI Opportunity Call."** Paid-traffic variants use a "naked" `/lp/*` version with no navigation.

---

## §1. Site Architecture & Sitemap

### 1.1 Top-level information architecture

```
clearstone.ai (Home — hybrid squeeze)
├── /industries/
│   ├── /industries/professional-services
│   ├── /industries/ecommerce-retail
│   ├── /industries/manufacturing
│   └── /industries/financial-services
├── /use-cases/
│   ├── /use-cases/ai-customer-support
│   ├── /use-cases/ai-sales-marketing
│   ├── /use-cases/ai-document-knowledge
│   ├── /use-cases/ai-workflow-automation
│   └── /use-cases/ai-readiness-audit
├── /blueprint/         (paid offer sales page)
├── /blog/              (SEO hub with 3 pillar pages)
│   └── /blog/[slug]
├── /resources/         (gated lead-magnet hub)
│   ├── /resources/ai-roi-calculator
│   ├── /resources/ai-readiness-assessment
│   └── /resources/[industry]-ai-playbook
├── /about
├── /case-studies/
├── /contact
├── /book/              (Calendly embed — the conversion destination)
├── /thank-you-call
├── /thank-you-leadmagnet
└── /lp/[name]          (paid-traffic-only "naked" variants)
```

### 1.2 URL & SEO rules
- **URL structure:** flat, keyword-first, hyphenated. Examples: `/industries/manufacturing` (short) or `/industries/manufacturing-ai-consulting` if keyword research justifies.
- **Canonical strategy:** every page self-canonical; paid-ad variants use `?utm_*` only (never new URLs that fragment SEO).
- **Navigation:** Home, Industries (dropdown), Use Cases (dropdown), Blueprint, Blog, About, then a high-contrast right-aligned persistent **[Book a Call]** button.
- **Critical rule — paid-traffic landing pages do NOT use the global nav.** Unbounce's published research on navigation-stripped dedicated landing pages shows this single move is one of the highest-leverage conversion changes in B2B. ClearStone should ship parallel "naked" versions of each industry/use-case page at `/lp/[name]` for paid traffic — same copy, no nav, no footer links except legal.

### 1.3 Internal linking strategy
- **Hub-and-spoke:** Home → Industries → Use Cases → Blog cluster posts → back to Industries/Use Cases.
- **Every blog post** ends with a contextual CTA block pointing to (a) the most relevant industry page and (b) the Blueprint offer page.
- **Every industry page** links to 2–3 most relevant use-case pages and 1 case study.
- **Every use-case page** links to 2–3 most relevant industry pages.
- **Pillar-cluster discipline:** each pillar post links to and is linked back from 6–10 cluster articles. This is now table stakes for both Google ranking and AI-search citation (ChatGPT, Perplexity, Gemini), per multiple 2026 SEO sources (Stridec, Conductor, Digitalscouts).

---

## §2. Page-by-Page Specifications

### 2.1 Main Landing Page (Home)

**Strategic intent:** The home page is a *hybrid squeeze* — not a pure ClickFunnels squeeze (which is a single offer, no nav, email-or-die) and not a corporate site (which is unfocused). It commits to **one primary conversion goal** (book a discovery call) while supporting one secondary goal (download a lead magnet). Russell Brunson's principle that homepages convert at 1–2% vs. 20–50% on a focused squeeze is true *in isolation*, but a B2B consulting business needs the SEO surface and credibility a homepage provides. We deliberately split the difference.

**Section-by-section breakdown (top to bottom):**

| # | Section | Components | Copy direction | Rationale |
|---|---|---|---|---|
| 1 | **Hero (above the fold)** | Headline + sub + primary CTA + secondary CTA + micro-proof line | Hook = specific outcome + specific buyer: *"Find the 3 AI Investments That Will Pay Back in 90 Days — Or You Don't Pay."* Sub: For mid-market operators who are tired of GenAI pilots that go nowhere. Book a 30-min call. Walk away with a prioritized opportunity list — free. Primary CTA: "Book My AI Opportunity Call". Secondary CTA: "Get the Free AI ROI Calculator". | Hook-Story-Offer (Brunson). Specific number ("3") + specific outcome ("pay back in 90 days") outperforms vague headlines (GrowthSpree's 2026 dataset documents 35% lift from headlines with specific numbers vs. generic ones). Risk reversal ("Or You Don't Pay") addresses the #1 mid-market objection: "we already paid for a pilot that didn't work." |
| 2 | **Problem agitation** | 3-column problem grid + 1-sentence headline | Headline: *"95% of GenAI pilots fail to deliver any P&L impact. Yours doesn't have to."* Columns: (a) "You've bought the tools. Nothing's connected." (b) "Your team is using ChatGPT in the shadows. You can't measure ROI." (c) "Every vendor promises transformation. None show numbers." | Direct PAS (Problem-Agitate-Solve). The MIT NANDA finding ("95% of generative AI pilots are failing"; Fortune, Aug 18 2025) is now broadly known among mid-market operators and instantly establishes ClearStone is informed. |
| 3 | **Solution / Differentiator** | "How ClearStone Works" 3-step diagram | Step 1: "30-min AI Opportunity Call (free)" — we map your top revenue/cost workflows and flag the 3 highest-ROI AI plays. Step 2: "AI Integration Blueprint ($2,500)" — fixed-scope, 2-week deliverable: prioritized roadmap, vendor recommendations, ROI model, 90-day implementation plan. Step 3: "Implementation (optional, starts at $15,000)" — we build it with you or hand off to your team. | Resolves the buyer's #1 confusion: "what am I actually buying?" The 3-step productized funnel is the documented 2026 pattern (Corey Ganim's $1,000 audit on the Niche Pursuits podcast; Buildtothrive's "Money Stack" placing productized audits at $1,500–$3,000). Showing the Blueprint price publicly here — not gating it — is the They-Ask-You-Answer move. |
| 4 | **Proof bar** | Logo strip + 2 quoted testimonials + 1 stat | Before founder has logos, use proxy proof: *"Drawing on the playbooks behind JPMorgan's COiN (which cut 360,000 lawyer-hours of contract review per year, per the ABA Journal), HSBC's AML AI (60% reduction in false-positive alerts, per HSBC press, June 21 2023), and The Permanente Medical Group's ambient AI scribes (15,791 documentation-hours saved across 7,260 physicians, per AMA, Jan 2026)."* | Proxy proof until ClearStone has its own case studies. VWO's A/B test with WikiJobs documented that *"adding testimonials increased conversions 34%"* — placing social proof near CTAs is the highest-leverage trust move. |
| 5 | **Industry selector** | 4 industry cards w/ icons + 1-line descriptions | "Which describes your business?" → Professional Services / E-com & Retail / Manufacturing / Financial Services. Each card links to a dedicated industry page. | Self-segments the visitor. Unbounce's Q4 2024 Conversion Benchmark Report (41,000 landing pages, 464M visitors) shows the median SaaS landing-page conversion is 3.8% while the top-quartile threshold is 11.6% — and the single biggest differentiator across that data is intent-matched copy. Self-segmentation is how we get every visitor onto an intent-matched page. |
| 6 | **The Blueprint offer** | Offer block — price, what's included, deliverables, timeline, guarantee | *"The AI Integration Blueprint — $2,500, flat fee, fully credited toward implementation if you proceed."* Stack: 2-week delivery, executive-ready report (~30 pages), 3 prioritized opportunities with ROI models, vendor shortlist, 90-day execution plan, 1-hour walkthrough. Guarantee: *"If, after the call, you don't see at least 3 high-confidence AI opportunities in your business, you don't pay for the Blueprint."* | Brunson "stack-slide" pattern. Productized fixed-fee + credit-toward-implementation is the documented 2026 high-conversion structure (Idealink reports ~30% lead→paid conversion; Ganim ships at $1,000; the broader productized-audit market sits at $1,500–$3,000). |
| 7 | **FAQ** | 8–10 collapsible Q&As (FAQ schema JSON-LD) | Address known objections (see §5.4). | FAQs lift conversion AND drive AI-search citation when wrapped in FAQ schema. |
| 8 | **Founder bio (mini)** | Photo + 4-sentence story + link to /about | Brunson "attractive character" frame: vulnerability + specific qualification + the moment you decided to help others. | Solo consultants who personalize the brand outperform faceless agencies in trust signals. |
| 9 | **Lead-magnet capture** | Inline form, 2 fields (work email + company size dropdown) | *"Not ready to book? Grab the AI ROI Calculator — see what 3 use cases could save your business."* | Catches the 90%+ of visitors not ready to book. 2-field forms convert at ~25% vs. <15% for 5+-field forms (Unbounce, Tryflint, Martal 2026 datasets converge). |
| 10 | **Final CTA block** | Full-width CTA + 1-line of urgency | *"Most operators we talk to could be running AI ROI within 60 days. The longer you wait, the more your competitors lap you. Book the call →"* | Recovers the visitor who needed objection-handling first. |
| 11 | **Footer** | Standard | Address, privacy, terms, social, blog link. | Trust + legal. |

**Above-the-fold technical requirements:**
- **LCP < 2.0s.** Per Akamai/Google research and the Portent/Colorlib 2026 dataset, pages loading in 1 second convert at ~40% vs. 22% at 5 seconds. Every second past 2s costs ~7% in conversion.
- Hero CTA must be visible *without scroll* on a 1366×768 laptop screen.
- Mobile: form must be tappable with one thumb.

### 2.2 Industry Squeeze Pages (template)

**One template, four instances.** Each industry page sits at `/industries/[name]`. A paid-traffic "naked" twin lives at `/lp/[name]` (no nav, no footer links).

**Universal section order:**
1. **Hero (industry-specific)** — headline includes the industry + a number specific to that industry. Primary CTA: "Book a 30-min AI Opportunity Call for [Industry]."
2. **"You're not the only one"** — 3-bullet problem agitation specific to the industry.
3. **What AI is actually doing in [Industry] right now** — 3-card grid of the top 3 use cases for that industry, each with a named-company proof point.
4. **The ClearStone process for [Industry]** — same 3-step diagram as home, with industry-specific examples in each step.
5. **Mini case study or proxy case** — 1 detailed use case with numbers.
6. **Industry-specific FAQ** — 5–7 questions addressing this industry's unique objections (HIPAA, SOC 2, FINRA, PCI, etc.).
7. **Final CTA + industry-tailored lead magnet** (e.g., "The Professional Services AI ROI Playbook").

**The four industries to launch (MVP) and why:**

| Industry | Why this one (data-backed) | Headline ROI proof point |
|---|---|---|
| **Professional Services** (accounting firms, law firms, consulting firms, agencies $5M–$250M) | Knowledge is the product → AI compounds value. Documentation burden + billable-hour pressure = high willingness to pay. Production-grade case maturity. | JPMorgan's COiN reduced **~360,000 lawyer-hours per year** of commercial-loan-agreement review to seconds (Bloomberg / ABA Journal). |
| **E-commerce / Retail** ($10M–$500M GMV) | Customer-service AI has the fastest, most measurable ROI. High data density, clear conversion math. | Klarna's GPT-4 assistant handled **2.3M conversations its first month** — equivalent to 700 FTEs, resolving in 2 min vs. 11 min, projected $40M profit impact in 2024 (Klarna press release, Feb 27 2024). *Caveat: Klarna partially walked back the claims in 2025 — footnote when citing.* |
| **Manufacturing** ($25M–$500M revenue) | Predictive maintenance + quality control are textbook AI-ROI examples; older-economy CEOs need a translator more than tech. Lower competitive density for AI consulting buyers. | Siemens Senseye predictive-maintenance platform: **up to 50% reduction in unplanned downtime** and **up to 55% improvement in maintenance efficiency** (Siemens press releases, 2023–2025). |
| **Financial Services** (community banks, RIAs, fintechs, insurance brokers $25M–$500M) | Highest regulatory pressure → highest demand for governance-aware AI consulting. Fraud, AML, and compliance ROI are easy to model. | HSBC's ML-based AML AI identifies **2–4x more suspicious activity** while reducing **alert volumes by ~60%** (HSBC press / Google Cloud, June 21 2023). |

Healthcare is a strong fifth option but adds HIPAA/BAA complexity that may not be MVP-ready. Recommend Phase 2 — and when launched, anchor with the Permanente Medical Group ambient-AI-scribe figure: **15,791 hours of documentation time saved** across 7,260 physicians and 2.5M+ patient encounters (AMA, Jan 2026; NEJM Catalyst publication).

### 2.3 Use-Case Pages

Each use-case page is structured: **Problem → How AI solves it → What ClearStone delivers → ROI math → CTA.** Use cases are *cross-industry* and exist primarily to capture SEO traffic for "AI for [function]" queries and to give the founder a clean scope on the Blueprint.

**MVP use cases (5):**

| Use Case | URL | Why this one | Anchor proof |
|---|---|---|---|
| **AI Customer Support** | `/use-cases/ai-customer-support` | Highest deployment-to-ROI velocity (weeks, not months); easy entry point. | Klarna: 2.3M chats / month = work of 700 FTEs (Klarna press release, Feb 27 2024). |
| **AI Sales & Marketing Automation** | `/use-cases/ai-sales-marketing` | Largest spending category in mid-market AI budgets (per MIT NANDA observation that "AI budgets overwhelmingly favor sales and marketing"); broad entry point. | HubSpot Aerotech case study: 66% increase in win rates, 18 hours saved per week within 3 months. |
| **AI Document & Knowledge Automation** | `/use-cases/ai-document-knowledge` | Strong fit for professional services + financial services; high-trust ROI story. | JPMorgan COiN: ~360,000 lawyer-hours saved annually. |
| **AI Workflow / Ops Automation** | `/use-cases/ai-workflow-automation` | Catches the "agentic AI" search volume; broadly applicable. | Direct Mortgage Corp document-classification case study (Multimodal, 2025); HSBC processing time cut from "several weeks to a few days" (Google Cloud, 2023). |
| **AI Readiness Assessment** | `/use-cases/ai-readiness-audit` | Doubles as a discovery-conversion mechanism. This is also where the Blueprint offer is anchored most concretely. | RSM 2025: 53% of mid-market firms feel only "somewhat prepared"; verbatim *"70% using generative AI report they need outside assistance to get the most out of that tool."* |

### 2.4 Blog Page & SEO Strategy

**Structure:** `/blog` index → list of recent posts + pillar tile featured + topic-cluster nav. Each post page uses Article schema, FAQ schema where relevant, and a sticky email-capture sidebar.

**Three pillar topics (matching the three biggest buyer questions):**

1. **Pillar 1: "AI Integration for Mid-Market: The 2026 Operator's Guide"** — broad anchor page that links to 8–10 cluster posts on cost, build-vs-buy, vendor selection, governance, change management, ROI measurement.
2. **Pillar 2: "AI Use Cases by Industry: What's Actually Working in 2026"** — broad anchor that links to industry-specific cluster posts (mirrors the industry pages but goes deeper, journalistic in tone).
3. **Pillar 3: "AI ROI: How to Build a Business Case That Wins Approval"** — anchor for budget/CFO-friendly cluster posts. This is the highest-converting cluster because it targets bottom-of-funnel intent.

**Why pillar/cluster matters in 2026:** AI search engines (ChatGPT, Perplexity, Gemini) cite based on semantic depth and entity relationships, not single-page keyword stuffing. 8–20 interlinked pieces per pillar is the documented standard (Stridec, Conductor, INSIDEA, 2026).

**Recommended MVP launch:** 1 pillar post + 6 cluster posts per pillar = ~21 posts at launch. If founder can only write half that, prioritize Pillar 1 (operator's guide) and Pillar 3 (ROI/CFO).

**Recommended starter post titles:**
- "Why 95% of GenAI Pilots Fail — And What Mid-Market Operators Should Do Instead" (anchors MIT NANDA)
- "AI ROI Calculator: How to Justify a $50K AI Investment to Your CFO"
- "Build vs. Buy vs. Hire a Consultant: The Mid-Market AI Decision Framework"
- "How to Pick the First AI Use Case Your Business Should Actually Ship"
- "AI Readiness Assessment: A 7-Dimension Self-Audit for Founders"
- "Predictive Maintenance for Manufacturers Under $250M: A Practical 90-Day Pilot Plan"
- "The Real Cost of an AI Implementation in 2026 (and Why $25K–$45K Is the Most Common Number)"

### 2.5 About / Contact / Thank-You pages

- **/about** — founder photo, 800–1,000-word origin story (Hook-Story-Offer applied to the *brand*), values, methodology, links to LinkedIn, podcast appearances. Personal branding sells consulting better than corporate branding in this space.
- **/contact** — minimal form (name + email + message) + Calendly fallback + direct email. Do NOT make this the primary CTA; `/book` is.
- **/book** — Calendly embed (full-width), 3 testimonials below, and a "what to expect on the call" 5-bullet block. This page handles ~60–70% of total revenue-driving conversions; it deserves the most polish.
- **/thank-you-call** — confirmation + countdown to call + "while you wait, read this case study" + a 5-minute pre-call worksheet (drives show-up rate, which is the single most important call-funnel metric after booking rate).
- **/thank-you-leadmagnet** — delivers the magnet + soft pitch ("you just downloaded the calculator — want help interpreting the numbers? Book a 30-min call here").

---

## §3. Conversion Components Library

These are reusable components a designer/developer can build once and drop into every page.

| Component | Spec | Notes |
|---|---|---|
| **Primary CTA button** | "Book My AI Opportunity Call →" / high-contrast color (orange or electric blue) / minimum 48px tall / hover + tap micro-animation. | Specific button copy ("Book My") consistently outperforms generic ("Submit", "Book a Call") in B2B testing. |
| **Secondary CTA button** | "Get the AI ROI Calculator" / outlined / same height. | Always present as the "not-yet-ready" path. |
| **Lead-magnet inline form** | 2 fields max (work email + company size dropdown). Submit = "Send Me the Calculator." | 2-field forms convert at ~25%; every added field costs 10–15% (consistent across Unbounce, HubSpot, Cobloom datasets). |
| **Exit-intent modal** | Triggers on cursor leaving viewport (desktop) / 50% scroll + idle (mobile). Single field. Offers: "The 5 Highest-ROI AI Use Cases for [Industry] — free 12-page PDF." | Exit pop-ups recover 10–15% of bouncing traffic with no downside. |
| **Sticky scroll CTA** | After 50% scroll, a small persistent button bar appears bottom-right ("Book a call →"). Dismissable. | Lifts CTA visibility without distracting from content. |
| **Social-proof bar** | Logo strip + counter ("Trusted by 47+ mid-market operators") OR rotating one-line testimonial. | Once founder has 5+ clients, swap to a real logo bar. The VWO/WikiJobs A/B test cited by Tryflint documented a 34% conversion lift from adding testimonials. |
| **Trust-badge cluster** | SOC 2 status (or "SOC 2 in progress" honestly), GDPR/CCPA, NDA-on-request promise, money-back-on-Blueprint guarantee, headshot+name founder signature. | Place adjacent to every conversion moment — not on the About page. |
| **Testimonial card** | Headshot + name + title + company + 1-sentence specific result. Video version: 30–60-second clip with subtitles. | Video testimonials outperform text ~2x. |
| **Mini ROI calculator (embedded)** | 4 inputs (revenue band, # employees, hours/week on target workflow, hourly cost). Output: estimated annual savings + "book a call to validate this" CTA. | Doubles as lead magnet and primary-page conversion tool. Build once, embed everywhere. |
| **Calendly widget** | Embedded directly on /book; pre-fills name+email from URL params; routes to founder's calendar. | Clean inline embed, no Calendly marketing upsells. |
| **FAQ accordion** | 8–10 questions per page, FAQ schema markup (JSON-LD). | Both UX and AI-search citation benefit. |

---

## §4. Lead Magnet & Email Capture Strategy

### 4.1 The lead-magnet portfolio (3 tiers, by commitment)

| Tier | Magnet | Where it lives | Why it works |
|---|---|---|---|
| **Low** | "AI ROI Calculator" (interactive web tool, email required to see results) | Home, footer, every use-case page | Calculators outperform static PDFs ~3:1 for B2B engagement. Quantifies the buyer's pain in their own numbers. |
| **Medium** | "The [Industry] AI Opportunity Playbook" — 12–18 page PDF, named ROI proofs, 5 ranked use cases for the industry, vendor shortlist, 90-day plan template | Each industry page + nurture emails | Industry-specific magnets convert at 2–3x generic ones. Doubles as a "proof of work" sample for the Blueprint deliverable's quality. |
| **High** | "Free 5-Minute AI Readiness Assessment" — interactive scored quiz, 15 questions, custom report PDF emailed, ends with Calendly link | `/resources/ai-readiness-assessment` + sidebar of every blog post | Well-built quizzes convert at 30–50% when the report is genuinely personalized. RSM's finding (53% of mid-market firms feel only "somewhat prepared") is the exact pain the quiz quantifies. |

### 4.2 Where to place capture (priority order)
1. **Above-the-fold secondary CTA** on home + every use-case page (calculator).
2. **Exit-intent modal** site-wide (industry-tailored playbook).
3. **Sticky scroll bar** site-wide (call CTA primary, magnet secondary).
4. **Content upgrades** in every blog post (mid-article: "Want this as a printable checklist? [download]").
5. **Footer email signup** with a soft offer ("Weekly: 1 mid-market AI ROI case study, no fluff").
6. **Dedicated /resources hub** for direct-link traffic.

### 4.3 Email nurture sequence (post-magnet, 7-touch over 21 days)

| Day | Email | Goal |
|---|---|---|
| 0 | Delivers magnet + "what to do next" + soft CTA | Make sure they actually open the magnet |
| 2 | Case-study email — "How [named company] saved [number]" with link to relevant industry page | Build proof |
| 5 | Founder-personal email — short, plain-text, "what surprised me most about the calculator was…" + question hook | Engagement / reply |
| 9 | Objection-handling email — "The #1 mistake mid-market operators make with AI" (cites MIT NANDA's 95%-fail finding and the verbatim NANDA stat that *"90% of workers surveyed reported daily use of personal AI tools like ChatGPT or Claude for job tasks"* — i.e., shadow AI is happening with or without you) | Pre-handle "we already tried it" objection |
| 13 | Specific Blueprint offer email — what's included, who it's for, price, guarantee | First direct offer |
| 17 | Risk-reversal email — "Why we credit the entire Blueprint fee toward implementation" | Re-frame price |
| 21 | "Should we stay in touch?" email — soft re-permission, last call to book | Hard segmentation; non-responders drop to monthly cadence |

Use ConvertKit / MailerLite / HubSpot Free; do NOT build custom. Sequences re-trigger based on which industry magnet was downloaded.

---

## §5. Sample Copy

### 5.1 Home page — Hero

> **Headline:** Find the 3 AI Investments That Will Pay Back in 90 Days — Or You Don't Pay.
>
> **Sub-headline:** For mid-market operators tired of pilots that go nowhere. Book a free 30-minute call. Walk away with a prioritized opportunity list — and a real number for what it would save.
>
> **Primary CTA:** Book My AI Opportunity Call →
> **Secondary CTA:** Get the Free AI ROI Calculator
>
> **Micro-proof line below CTAs:** Drawing on the playbooks that helped JPMorgan eliminate ~360,000 hours of legal review per year, HSBC cut false-positive AML alerts by ~60%, and Klarna handle the work of 700 customer-service agents — adapted for businesses your size.

### 5.2 Home page — Problem agitation block

> **95% of GenAI pilots fail to deliver any P&L impact. Yours doesn't have to.**
> *— MIT NANDA, "The GenAI Divide: State of AI in Business 2025"*
>
> Three reasons mid-market operators get stuck:
>
> **1. You bought the tools. Nothing's connected.** Copilot, ChatGPT Enterprise, Notion AI — all paid for, none talking to each other, none touching your real workflows.
>
> **2. Your team is using ChatGPT in the shadows.** MIT NANDA found verbatim that *"90% of workers surveyed reported daily use of personal AI tools like ChatGPT or Claude for job tasks."* You can't govern it, you can't measure it, you can't capture the value.
>
> **3. Every vendor promises transformation. None show numbers.** You've sat through three pitch decks this quarter. None of them gave you a P&L line.

### 5.3 Industry pages — sample hero copy

**Professional Services:**
> Headline: *Stop Losing $300K a Year to Manual Document Work.*
> Sub: For accounting, legal, and consulting firms doing $5M–$250M. We map the 3 AI plays that will free your highest-billed people — in 2 weeks, for a flat $2,500.
> CTA: Book My AI Opportunity Call →

**E-commerce / Retail:**
> Headline: *Your Best CX Rep Already Works for an AI Vendor. Hire It.*
> Sub: Klarna's AI handled 2.3M conversations its first month — equivalent to 700 full-time agents, resolving in 2 minutes instead of 11 (Klarna press release, Feb 27 2024). We help mid-market retailers and DTC brands deploy the same playbook in 90 days.
> CTA: Book My AI Opportunity Call →

**Manufacturing:**
> Headline: *Cut Unplanned Downtime by Half. We'll Prove the ROI in 14 Days.*
> Sub: Siemens' Senseye platform has delivered up to a 50% reduction in unplanned downtime and a 55% lift in maintenance efficiency (Siemens press, 2023–2025). For US manufacturers doing $25M–$500M, we identify which 1–2 lines should pilot it first.
> CTA: Book My AI Opportunity Call →

**Financial Services:**
> Headline: *Find 2–4x More Fraud. Reduce False Alerts by ~60%. Build a Defensible AI Stack.*
> Sub: HSBC's AML AI is doing exactly that (HSBC press / Google Cloud, June 21 2023) — and the same architecture is now available to community banks, RIAs, and insurance brokers under $500M in revenue. We map the 3 plays that produce the fastest payback in your regulatory environment.
> CTA: Book My AI Opportunity Call →

### 5.4 Sample FAQ (home page — 8 questions)

> **Q: How much is this going to cost?**
> A: The 30-minute opportunity call is free. The AI Integration Blueprint is a flat $2,500, delivered in 2 weeks, fully credited toward implementation if you proceed. Implementation typically runs $15,000–$45,000 depending on scope. You'll get a real number on the call, not after three rounds of "discovery."
>
> **Q: I tried an AI pilot last year and it went nowhere. Why would this be different?**
> A: Because we won't sell you a pilot. MIT's 2025 NANDA study found that ~95% of GenAI pilots produce no measurable P&L impact — almost always because they aren't integrated into a real workflow. Every Blueprint we deliver is scoped to a specific workflow your team already runs, with a specific dollar number attached.
>
> **Q: Who does the actual implementation?**
> A: You have three options: (1) hand off the Blueprint to your existing team or IT vendor — many clients do this; (2) we implement with your team in a 6–12 week engagement; (3) we hand off to one of our certified implementation partners. Your call.
>
> **Q: Do you replace my IT team or work with them?**
> A: Work with them. We're consultants, not a body shop. The IT or ops lead is usually our biggest internal champion because we're solving the problem they've been trying to articulate for six months.
>
> **Q: What if you can't find 3 high-ROI opportunities in our business?**
> A: Then you don't pay for the Blueprint. We've never had it happen — but it's our guarantee on every engagement.
>
> **Q: Are we too small? Too big?**
> A: Our sweet spot is companies doing $25M–$250M in annual revenue with 50–500 employees. Below that, we recommend off-the-shelf tools and our DIY AI Readiness Assessment (free). Above $500M, you likely need a Big Four firm or our enterprise referral partner.
>
> **Q: Will our data leave our environment?**
> A: No. We work in your stack: your AWS/Azure/GCP, your Microsoft/Google Workspace, your CRM. We don't take custody of your data. Standard mutual NDA on call 1; full DPA before any data review.
>
> **Q: Why should I trust you over a Big Four or McKinsey?**
> A: For a $500K enterprise transformation? You shouldn't. But for mid-market operators, the Big Four pricing model breaks down: a $300K strategy deck on a $50M company is 0.6% of revenue spent on PowerPoint. We deliver the diagnostic for $2,500 and we ship the implementation, not just the deck.

---

## §6. Pricing Display Strategy (with evidence)

**Final recommendation: hybrid pricing transparency.**

| Offer | Price displayed publicly? | Why |
|---|---|---|
| Discovery call | **Yes — FREE, prominently** | Lowest commitment; removes "is this going to cost me?" friction. |
| AI Integration Blueprint | **Yes — $2,500 flat, credit-back guarantee** | Productized, fixed-scope. Two independent 2026 operator analyses (Aries Consulting; Buildtothrive's "Money Stack") put productized AI audits at $1,500–$3,000 — $2,500 anchors directly into the proven market band. |
| Implementation | **"Starts at $15,000"** + range explanation on page, full price call-gated | Custom-scope; per HockeyStack's 80-company B2B SaaS study, demo pages convert 1.44x better than pricing pages when scoping requires consultation. The "starts at" anchor avoids hiding pricing entirely, which is the Sheridan-documented mistake. |
| Retainers / ongoing support | **Public ranges: $1,500–$3,500/month** | Same logic as Blueprint — productized enough to publish. |

**Evidence summary the founder can use to internally justify this:**
- **Marcus Sheridan**, *They Ask, You Answer* (2025 RevOps Champions interview, verbatim): *"When I started talking about They Ask, You Answer, about 98% of companies were not addressing cost and price online for B2B services. To this day, that number is still about 94%. Most companies still don't address it."* The 94% who don't are losing leads to the 6% who do.
- **HockeyStack** (80 B2B SaaS companies, 31M visitors, 2024): demo pages convert 1.44x better than pricing pages overall — *but* transparent pricing pages generate more downstream pipeline. The right move is to use both.
- **Patrick Campbell (Paddle/ProfitWell)**: under-$5K ACV expects full transparency; $5K–$50K supports partial transparency; $50K+ supports more gating. ClearStone's Blueprint ($2.5K) sits squarely in the "expect transparency" band; Implementation ($15K–$45K) sits in the "partial transparency" band.
- **Operator-tier 2026 data**: Idealink.tech reports converting ~30% of leads who use their free AI cost estimator into paid implementations — concrete evidence that public-price productized funnels work in this exact category.

---

## §7. Technical Recommendations

### 7.1 Stack
| Layer | Recommended | Why |
|---|---|---|
| **CMS / Builder** | Framer or Webflow | Fast for design-driven B2B sites, CMS for blog, great Lighthouse/LCP scores. Avoid WordPress for v1 — slower to launch, more maintenance. |
| **Forms** | Native CMS + Make/Zapier → CRM | Don't introduce yet-another tool for v1. |
| **CRM** | HubSpot Free → Starter | Free tier supports landing pages, forms, email, basic automation, contact management. Mid-market buyers expect to see HubSpot logos in the contact-form receipt; it's a small trust signal. |
| **Calendar booking** | Calendly or Cal.com | Cal.com is open-source/cheaper; Calendly is more polished. Either works. |
| **Email** | ConvertKit or MailerLite | Avoid Mailchimp for serious B2B. |
| **Analytics** | GA4 + Plausible or PostHog | GA4 for ad-platform compatibility; Plausible/PostHog for actually usable analytics. PostHog adds session replay (essential for finding form-friction issues). |
| **A/B testing** | VWO Free or PostHog feature flags | Start with hero-headline + CTA-copy tests only. Don't over-engineer. |
| **AI-search optimization** | `llms.txt`, semantic HTML, FAQ schema, OG tags | AI-search-friendly markup is now table stakes in 2026. |

### 7.2 Tracking — events you MUST log from day 1
- Page view (with utm_*)
- CTA click (which button, which page)
- Form submission (which form, which page)
- Lead-magnet download (which magnet)
- Calendly booking (use Calendly webhook → HubSpot)
- Call show-up (manual or via Calendly + Zoom integration)
- Blueprint purchase (Stripe webhook → HubSpot)
- Implementation contract signed (manual deal-stage update)

**Funnel report to pull weekly:** Visitor → Lead → Booked Call → Showed Call → Blueprint Sold → Implementation Sold. Industry-benchmark targets: visitor→lead 3–8%, lead→booked call 20–40%, booked→showed 60–75%, showed→Blueprint sold 25–40%, Blueprint→Implementation 40–60%.

---

## §8. Implementation Phases

### Phase 0 — Founder pre-work (Week 0, ~5 days)
- Finalize Blueprint deliverable template (you should be able to show it on a sales call).
- Record 5–7 customer-discovery calls (real or simulated with friendly operators) to extract verbatim buyer language for copy.
- Re-share the attached customer-problems report so §5 copy can be re-tuned to the founder's first-party research.
- Lock the 4 launch industries.

### Phase 1 — MVP launch (Weeks 1–4)
- Build: Home, 4 industry pages, 5 use-case pages, /blueprint sales page, /book, /thank-you variants, /about, /contact. (~13 pages.)
- Launch with 1 lead magnet (the ROI calculator) and 1 email nurture sequence.
- Launch with 3 pillar blog posts (one per pillar) — not the full 21.
- Set up GA4 + HubSpot + Calendly + Stripe.
- **Goal: 10 booked calls in first 30 days, 3 Blueprints sold.**

### Phase 2 — Content expansion + paid traffic (Weeks 5–12)
- Add 1 industry (Healthcare) + 2 use cases (AI Governance, AI Training).
- Publish 12 more blog posts (4 per pillar).
- Launch industry-tailored playbook lead magnets (4 PDFs).
- Begin paid ads: LinkedIn ($2K/month test) + Google Search ($1.5K/month on bottom-funnel terms like "AI consultant for [industry]") + retargeting.
- Build the 5-minute AI Readiness quiz.
- A/B test hero headline and CTA copy.
- **Goal: 40+ booked calls/month, 10+ Blueprints sold/month, $25K+ MRR.**

### Phase 3 — Optimization + scale (Months 4–6)
- Hire 1 fractional SDR or content writer.
- Publish remaining cluster posts to complete the 3 pillars.
- Add case studies (3–5 real, named).
- Test webinar funnel: monthly "How [Industry] Operators Are Cutting [Workflow Cost] With AI" → invitation to Blueprint.
- Pricing test: are operators booking at the same rate if the Blueprint is $3,500?
- **Goal: $100K+ MRR, 50%+ revenue from Implementation.**

---

## §9. Open Questions / Decisions the Founder Needs to Make

1. **Industry priority confirmation.** I've recommended Professional Services + E-commerce + Manufacturing + Financial Services. The attached customer-problems report likely flagged a different ranking; reconcile.
2. **Geographic scope.** US-only initially, or also UK/EU? Affects GDPR copy, currency display, time-zone routing.
3. **Founder credentials.** What's the founder's named credibility hook? (Ex-Big Four? Built X at Y? Published Z?) Drives the About page and proxy-proof in the hero.
4. **Implementation capacity.** How many concurrent implementations can the founder personally run? This caps funnel velocity and may force a "limited slots" scarcity element in pricing.
5. **Pricing edges.** Final Blueprint price ($2,500 vs $3,500)? Final minimum Implementation price?
6. **Brand voice.** Punchy/operator (recommended — matches the audience) vs. corporate/strategic? Affects every word of copy.
7. **Industry magnets — build all 4 at launch or stagger?**
8. **Will the founder publish under their own name (recommended for trust) or under "ClearStone AI" only?** Affects About-page strategy and authorship of blog posts.
9. **The attached customer-problems report — can you re-share it inline?** It is *the* source of truth for the exact buyer language, fears, and pain phrases that should appear in §5. Until that's integrated, treat §5 as a strong v0.5, not v1.0.

---

## §10. Caveats

- The attached customer-problems report could not be read by the research tool, so §5 copy is informed by *external* mid-market AI research (MIT NANDA, RSM, McKinsey, HSBC, Klarna, Siemens, JPMorgan, Permanente Medical Group) rather than the founder's first-party report. **Highest-priority fix before launch:** re-tune §5 against the attached report.
- Several headline ROI stats — most notably Klarna's $40M projection and Walmart's stockout/inventory percentages — have well-known asterisks in 2025–26 (Klarna partially walked back claims in 2025; the most precise Walmart percentages live in third-party aggregators rather than Walmart's direct disclosure). Use them but footnote them.
- MIT NANDA's 95% number has been challenged by some methodologists; the recommended framing is *"MIT NANDA reports ~95% of GenAI pilots produce no measurable P&L impact"* rather than as an absolute fact. The directional point holds regardless.
- The Accenture "$7,800 per employee per year" generative-AI-productivity stat that's circulating in 2026 SEO content **could not be verified** in primary Accenture sources during research. Do not use it as cited. If a productivity-value claim is needed, substitute Accenture's verified figures: $10.3 trillion in additional global economic value by 2038 from gen AI (Accenture, "Work, Workforce, Workers: Reinvented," Jan 16 2024) or "Reinventors" capturing 2.5x revenue growth and 2.4x productivity gains (Accenture, "Reinventing Enterprise Operations with Gen AI," Oct 10 2024).
- The "78% of B2B decision-makers find typical price communication inadequate" claim that appears in several 2026 SEO posts attributed to Forrester **could not be verified** to Forrester's published research. The actual Forrester finding (State of Business Buying, Jan 21 2026) is that 78% of buyers making purchases of $10M+ engage in a trial first — a different claim entirely. We have therefore *not* cited that statistic in §6; the pricing-transparency recommendation rests on Sheridan (verbatim), HockeyStack, and Patrick Campbell, which are all independently verified.
- ClickFunnels squeeze-page convention is to remove ALL nav and links, run email-only opt-in, and aim for 20–50% conversion. We deliberately *do not* apply this to the home page because B2B mid-market buyers expect a fuller site to validate the seller before booking a $25K+ engagement. We *do* apply the convention to the `/lp/[name]` paid-traffic variants. Make sure your designer doesn't accidentally apply it everywhere — it will tank organic credibility.
- Unbounce's Q4 2024 Conversion Benchmark Report figures cited in this PRD (3.8% median SaaS conversion / 11.6% top-quartile threshold) describe the *spread of performance across 41,000 landing pages*, not a custom-vs-template comparison. The implication for ClearStone is clear regardless: top-quartile performance is roughly 3x the median, and intent-matched, industry-specific pages are how you get there.

---
*End of PRD v1.0 — ready for designer/developer handoff pending the open questions in §9.*