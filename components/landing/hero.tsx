import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "@remixicon/react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-transparent" />

      <div className="container-default pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Content */}
          <div>
            {/* Eyebrow */}
            <p className="text-overline mb-6">
              AI That&apos;s Live in 90 Days
            </p>

            {/* Headline */}
            <h1 className="text-h1 mb-6 text-foreground text-pretty">
              Find the 3 AI Investments That Will Pay Back in 90 Days. Or You Don&apos;t Pay.
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg mb-4 max-w-xl text-pretty">
              For mid-market operators tired of pilots that go nowhere. Book a
              30-minute call. Walk away with a prioritized opportunity list and
              a real number for what it would save.
            </p>

            {/* Guarantee clarifier */}
            <p className="text-body-sm mb-8 max-w-xl text-muted-foreground">
              If the 30-min call doesn&apos;t surface 3 high-confidence AI plays, the $2,500 Blueprint is free.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 text-base bg-brand hover:bg-brand/90 text-brand-foreground"
              >
                <Link href="#book">
                  Book My AI Opportunity Call
                  <RiArrowRightLine className="ml-2 size-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base"
              >
                <Link href="#blueprint">See The Blueprint</Link>
              </Button>
            </div>

            {/* Micro-proof */}
            <p className="mt-8 text-body-sm max-w-lg text-pretty">
              Drawing on the playbooks that helped JPMorgan eliminate ~360,000
              hours of legal review per year, HSBC cut false-positive alerts by
              ~60%, and Klarna handle the work of 700 agents. Adapted for
              businesses your size.
            </p>
          </div>

          {/* Hero image */}
          <div className="hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/site-images/hero-image.png"
                alt="Business executive reviewing AI implementation results"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
