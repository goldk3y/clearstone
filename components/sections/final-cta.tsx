import Link from "next/link";
import { Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { finalCta, siteConfig } from "@/content/home";

export function FinalCTA() {
  return (
    <Section id="book" container="narrow" padding="lg">
      <div className="text-center">
        <h2 className="text-h2 mb-6 text-foreground text-balance">
          {finalCta.headline}
        </h2>
        <p className="text-body-lg mb-10 max-w-xl mx-auto text-pretty">
          {finalCta.description}
        </p>

        <Button
          asChild
          size="lg"
          className="h-14 px-10 text-lg bg-brand hover:bg-brand/90 text-brand-foreground"
        >
          <Link href={siteConfig.calendlyUrl}>{finalCta.cta}</Link>
        </Button>

        <p className="mt-6 text-body-sm italic text-muted-foreground">
          {finalCta.note}
        </p>
      </div>
    </Section>
  );
}
