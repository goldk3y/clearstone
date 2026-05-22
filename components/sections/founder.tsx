import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout";
import { founder, founderSection } from "@/content/home";
import { RiLinkedinBoxFill } from "@remixicon/react";

export function Founder() {
  return (
    <Section id="founder" container="default" padding="default" background="muted">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
          {/* Photo */}
          {founder.photoUrl && (
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-square w-64 overflow-hidden lg:w-full lg:max-w-[360px]">
                <Image
                  src={founder.photoUrl}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 1024px) 256px, 360px"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Content */}
          <div className={founder.photoUrl ? "lg:col-span-7" : "lg:col-span-12"}>
            <h2 className="text-h2 mb-6 text-foreground text-balance">
              {founderSection.headline}
            </h2>

            <div className="space-y-4">
              <p className="text-body-lg leading-relaxed text-pretty">
                {founder.bio}
              </p>

              <p className="text-body leading-relaxed text-pretty">
                {founderSection.detail}
              </p>

              <p className="text-body leading-relaxed text-pretty">
                {founderSection.intro}
              </p>

              <ul className="space-y-2 text-body text-muted-foreground">
                {founderSection.questions.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ul>
            </div>

            {/* LinkedIn */}
            {founder.linkedInUrl && (
              <div className="mt-6">
                <Link
                  href={founder.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-body-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <RiLinkedinBoxFill className="size-5" />
                  Connect on LinkedIn
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
