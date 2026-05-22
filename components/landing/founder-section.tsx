import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout";
import { RiLinkedinBoxFill } from "@remixicon/react";

export function FounderSection() {
  return (
    <Section id="founder" padding="default" background="default">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Photo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-square w-64 overflow-hidden lg:w-full lg:max-w-[360px]">
              <Image
                src="/site-images/founder-headshot.png"
                alt="Stan Sedberry, Founder of ClearStone AI"
                fill
                sizes="(max-width: 1024px) 256px, 360px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <p className="text-overline mb-3">The Operator Behind The Work</p>

            <h2 className="text-h2 mb-1 text-foreground">
              Stan Sedberry
            </h2>
            <p className="text-body-lg text-muted-foreground mb-1">
              Founder, ClearStone
            </p>
            <p className="text-body text-muted-foreground mb-8">
              10+ years shipping product and scaling businesses
            </p>

            {/* Story */}
            <p className="text-body mb-4 max-w-2xl text-pretty">
              I built ClearStone because I kept seeing the same pattern: operators
              buying AI tools, watching pilots fizzle, and ending up more skeptical
              than when they started. The problem isn&apos;t AI. It&apos;s that most
              consultants sell strategy decks, not working systems. I&apos;ve spent
              my career shipping products that drive real business outcomes. Now I
              help operators do the same with AI.
            </p>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/in/stansedberry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-body-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <RiLinkedinBoxFill className="size-5" />
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
