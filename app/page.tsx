import { Header, Footer } from "@/components/layout";
import {
  Hero,
  CaseStudySection,
  ProblemSection,
  ProcessSection,
  ProofBar,
  IndustrySection,
  BlueprintSection,
  FAQSection,
  CTASection,
  FounderSection,
  StickyCTA,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProofBar />
        <CaseStudySection />
        <ProblemSection />
        <ProcessSection />
        <IndustrySection />
        <BlueprintSection />
        <FAQSection />
        <FounderSection />
        <CTASection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
