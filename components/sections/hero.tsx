import Link from "next/link";
import { Button } from "@/components/ui/button";
import { hero, siteConfig } from "@/content/home";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100dvh-4rem)] flex items-center justify-center">
      <div className="container-default py-12">
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <h1 className="text-display mb-12 text-foreground text-balance">
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg mx-auto mb-3 text-pretty">
            {hero.subheadline}
          </p>

          {/* Audience qualifier */}
          <p className="text-body-sm mx-auto mb-14 max-w-xl text-muted-foreground/70 text-pretty">
            {hero.qualifier}
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-12 px-8 text-base bg-brand hover:bg-brand/90 text-brand-foreground"
            >
              <Link href={siteConfig.calendlyUrl}>{hero.primaryCta}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-12 px-8 text-base"
            >
              <Link href="#inside">{hero.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
