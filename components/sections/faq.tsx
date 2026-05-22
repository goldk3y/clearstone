"use client";

import { Section } from "@/components/layout";
import { faq, siteConfig } from "@/content/home";
import { useState } from "react";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";
import { cn } from "@/lib/utils";
import Script from "next/script";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-6 text-left transition-colors hover:text-muted-foreground"
        aria-expanded={isOpen}
      >
        <span className="text-h4 pr-8 text-foreground text-pretty">
          {question}
        </span>
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

// Generate FAQ schema for JSON-LD
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" container="default" padding="default">
      {/* FAQ Schema for SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl">
        <h2 className="text-h2 mb-12 text-center text-foreground text-balance">
          {faq.headline}
        </h2>

        {/* FAQ Accordion */}
        <div className="border border-border bg-card">
          {faq.items.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <p className="mt-8 text-center text-body">
          {faq.stillHaveQuestions}{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="link-default font-medium"
          >
            Email us
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
