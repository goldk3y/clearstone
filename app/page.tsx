import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Mirror,
  Stakes,
  Blueprint,
  WhyThree,
  InsideBlueprint,
  FourteenDays,
  Guarantee,
  PilotAutopsy,
  Founder,
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

        {/* Section 5: Why Three (mechanism) */}
        <WhyThree />

        {/* Section 6: Inside the Blueprint (visual deliverable) */}
        <InsideBlueprint />

        {/* Section 7: The 14 Days (process) */}
        <FourteenDays />

        {/* Section 8: The Guarantee */}
        <Guarantee />

        {/* Section 9: Already Tried AI? (Pilot Autopsy) */}
        <PilotAutopsy />

        {/* Section 10: Who Built This (founder) */}
        <Founder />

        {/* Section 11: Pricing */}
        <Pricing />

        {/* Section 12: FAQ */}
        <FAQ />

        {/* Section 13: Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
