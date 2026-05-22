import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Mirror,
  Stakes,
  Blueprint,
  SampleOutputs,
  WhyThree,
  InsideBlueprint,
  FourteenDays,
  Guarantee,
  Comparison,
  WhoIsThisFor,
  Founder,
  WhyBlueprintCostsLess,
  Pricing,
  FAQ,
  FinalCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: The Mirror (problem framing) */}
        <Mirror />

        {/* Section 3: The Stakes (market evidence) */}
        <Stakes />

        {/* Section 4: The Blueprint (offer) */}
        <Blueprint />

        {/* Section 5: Sample Outputs (example projects) */}
        <SampleOutputs />

        {/* Section 6: Why Three (mechanism) */}
        <WhyThree />

        {/* Section 8: Inside the Blueprint (visual deliverable) */}
        <InsideBlueprint />

        {/* Section 9: The 14 Days (process) */}
        <FourteenDays />

        {/* Section 10: The Guarantee */}
        <Guarantee />

        {/* Section 11: Comparison (without vs with) */}
        <Comparison />

        {/* Section 12: Who is this for (fit/not fit) */}
        <WhoIsThisFor />

        {/* Section 13: Who Built This (founder) */}
        <Founder />

        {/* Section 14: Why the Blueprint costs less than guessing */}
        <WhyBlueprintCostsLess />

        {/* Section 15: Pricing */}
        <Pricing />

        {/* Section 16: FAQ */}
        <FAQ />

        {/* Section 17: Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
