import { Section } from "@/components/layout";
import { whyThree } from "@/content/home";

export function WhyThree() {
  return (
    <Section id="why-three" container="default" padding="default">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-h2 mb-6 text-foreground text-balance">
          {whyThree.headline}
        </h2>
        <p className="text-body-lg mb-4 text-pretty font-medium text-foreground">
          {whyThree.intro}
        </p>
        <p className="text-body-lg mb-12 text-pretty">
          {whyThree.detail}
        </p>

        {/* Criteria */}
        <div className="mb-10">
          <h3 className="text-h4 mb-6 text-foreground">
            {whyThree.criteria.title}
          </h3>
          <div className="space-y-6">
            {whyThree.criteria.items.map((item, index) => (
              <div key={index}>
                <p className="text-body-lg text-pretty">
                  <span className="font-semibold text-foreground">{item.label}</span>
                  <br />
                  <span className="text-muted-foreground">{item.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-body-lg font-medium text-foreground">
          {whyThree.closing}
        </p>
      </div>
    </Section>
  );
}
