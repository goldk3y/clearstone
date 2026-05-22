import Link from "next/link";
import { Button } from "@/components/ui/button";
import { hero, siteConfig } from "@/content/home";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100dvh-4rem)] flex items-center justify-center">
      <div className="container-default py-12">
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <h1 className="text-display mb-8 text-foreground text-balance">
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg mx-auto mb-10 max-w-2xl text-pretty">
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 text-base bg-brand hover:bg-brand/90 text-brand-foreground"
            >
              <Link href={siteConfig.calendlyUrl}>{hero.primaryCta}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base"
            >
              <Link href="#sample">{hero.secondaryCta}</Link>
            </Button>
          </div>

          {/* Qualifier */}
          <p className="mt-8 text-body-sm italic text-muted-foreground">
            {hero.qualifier}
          </p>
        </div>
      </div>
    </section>
  );
}
