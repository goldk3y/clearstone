import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/layout";
import {
  RiBriefcaseLine,
  RiShoppingBag3Line,
  RiSettings3Line,
  RiBankLine,
} from "@remixicon/react";

const industries = [
  {
    title: "Professional Services",
    subtitle: "Accounting, Legal, Consulting",
    stat: "40% faster document review",
    image: "/site-images/industry-professional-services.png",
    href: "/industries/professional-services",
    Icon: RiBriefcaseLine,
  },
  {
    title: "E-commerce & Retail",
    subtitle: "$10M–$500M GMV",
    stat: "11 min to <2 min resolution",
    image: "/site-images/industry-ecommerce.png",
    href: "/industries/ecommerce-retail",
    Icon: RiShoppingBag3Line,
  },
  {
    title: "Manufacturing",
    subtitle: "$25M–$500M Revenue",
    stat: "50% less downtime",
    image: "/site-images/industry-manufacturing.png",
    href: "/industries/manufacturing",
    Icon: RiSettings3Line,
  },
  {
    title: "Financial Services",
    subtitle: "Banks, RIAs, Insurance",
    stat: "2-4x more fraud detected",
    image: "/site-images/industry-financial.png",
    href: "/industries/financial-services",
    Icon: RiBankLine,
  },
] as const;

export function IndustrySection() {
  return (
    <Section id="industries" background="muted" padding="default">
      {/* Left-aligned header */}
      <div className="mb-12 max-w-2xl">
        <p className="text-overline mb-4">Industries We Serve</p>
        <h2 className="text-h2 mb-4 text-foreground text-balance">
          Which describes your business?
        </h2>
        <p className="text-body-lg text-pretty">
          We&apos;ve mapped the highest-ROI AI use cases for each industry.
          Click to see what&apos;s working right now.
        </p>
      </div>

      {/* Industry cards - horizontal scroll on mobile, grid on desktop */}
      <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
        {industries.map((industry, index) => (
          <Link
            key={index}
            href={industry.href}
            className="group relative flex-shrink-0 w-[280px] sm:w-auto aspect-[3/4] overflow-hidden bg-foreground"
          >
            {/* Background image */}
            <Image
              src={industry.image}
              alt={industry.title}
              fill
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content - bottom left */}
            <div className="absolute inset-x-0 bottom-0 p-5">
              {/* Badge/stat */}
              <span className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white mb-3">
                {industry.stat}
              </span>

              {/* Title with icon */}
              <div className="flex items-center gap-2 mb-1">
                <industry.Icon className="size-5 text-white/80" />
                <h3 className="text-h4 text-white">
                  {industry.title}
                </h3>
              </div>

              {/* Subtitle */}
              <p className="text-sm text-white/70">
                {industry.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Not sure prompt */}
      <p className="mt-10 text-center text-body text-pretty">
        Not sure which category fits?{" "}
        <Link href="#book" className="link-default font-medium">
          Book a call
        </Link>{" "}
        and we&apos;ll figure it out together in 30 minutes.
      </p>
    </Section>
  );
}
