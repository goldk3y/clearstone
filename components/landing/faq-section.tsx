"use client";

import { Section } from "@/components/layout";
import { useState } from "react";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How much is this going to cost?",
    answer:
      "The 30-minute opportunity call is free. The ClearStone Blueprint is a flat $2,500, delivered in 2 weeks, fully credited toward implementation if you proceed. Implementation typically runs $15,000–$45,000 depending on scope. You'll get a real number on the call, not after three rounds of \"discovery.\"",
  },
  {
    question:
      "I tried an AI pilot last year and it went nowhere. Why would this be different?",
    answer:
      "Because we won't sell you a pilot. MIT's 2025 NANDA study found that ~95% of GenAI pilots produce no measurable P&L impact, almost always because they aren't integrated into a real workflow. Every Blueprint we deliver is scoped to a specific workflow your team already runs, with a specific dollar number attached.",
  },
  {
    question: "Who does the actual implementation?",
    answer:
      "You have three options: (1) hand off the Blueprint to your existing team or IT vendor (many clients do this); (2) we implement with your team in a 6–12 week engagement; (3) we hand off to one of our certified implementation partners. Your call.",
  },
  {
    question: "Do you replace my IT team or work with them?",
    answer:
      "Work with them. We're not a body shop. The IT or ops lead is usually our biggest internal champion because we're solving the problem they've been trying to articulate for six months.",
  },
  {
    question: "What if you can't find 3 high-ROI opportunities in our business?",
    answer:
      "Then you don't pay for the Blueprint. We've never had it happen, but it's our guarantee on every engagement.",
  },
  {
    question: "Are we too small? Too big?",
    answer:
      "Our sweet spot is companies doing $25M–$250M in annual revenue with 50–500 employees. Below that, we recommend off-the-shelf tools and our DIY AI Readiness Assessment (free). Above $500M, you likely need a Big Four firm or our enterprise referral partner.",
  },
  {
    question: "Will our data leave our environment?",
    answer:
      "No. We work in your stack: your AWS/Azure/GCP, your Microsoft/Google Workspace, your CRM. We don't take custody of your data. Standard mutual NDA on call one; full DPA before any data review.",
  },
  {
    question: "Why should I trust you over a Big Four or McKinsey?",
    answer:
      "For a $500K enterprise transformation? You shouldn't. But for mid-market operators, the Big Four pricing model breaks down: a $300K strategy deck on a $50M company is 0.6% of revenue spent on PowerPoint. We deliver the diagnostic for $2,500 and we ship the implementation, not just the deck.",
  },
] as const;

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-6 text-left transition-colors hover:text-muted-foreground"
        aria-expanded={isOpen}
      >
        <span className="text-h4 pr-8 text-foreground text-pretty">{question}</span>
        <span className="shrink-0">
          {isOpen ? (
            <RiSubtractLine className="size-5 text-muted-foreground" />
          ) : (
            <RiAddLine className="size-5 text-muted-foreground" />
          )}
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr] px-6 pb-6" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-body pr-12 text-pretty">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" background="muted" padding="default">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-overline mb-4">Questions & Answers</p>
          <h2 className="text-h2 mb-4 text-foreground text-balance">
            Frequently asked questions
          </h2>
          <p className="text-body-lg mb-12 text-pretty">
            The questions we hear most from mid-market operators evaluating AI
            consulting.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="border border-border bg-card">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <p className="mt-8 text-center text-body text-pretty">
          Still have questions?{" "}
          <a href="mailto:hello@clearstone.ai" className="link-default font-medium">
            Email us
          </a>{" "}
          or{" "}
          <a href="#book" className="link-default font-medium">
            book a call
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
