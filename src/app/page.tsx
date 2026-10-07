import Hero from "@/components/sections/Hero";
import TheFirm from "@/components/sections/TheFirm";
import PracticeAreas from "@/components/sections/PracticeAreas";
import GlobalNetwork from "@/components/sections/GlobalNetwork";
import Insights from "@/components/sections/Insights";
import Recognition from "@/components/sections/Recognition";
import Careers from "@/components/sections/Careers";
import ContactCta from "@/components/sections/ContactCta";

/**
 * Homepage sequence, exactly as specified in §20 of the brief:
 * Hero → The Firm → Practice → Global Network → Insights → Recognition →
 * Careers → Contact → Footer.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TheFirm />
      <PracticeAreas />
      <GlobalNetwork />
      <Insights />
      <Recognition />
      <Careers />
      <ContactCta />
    </>
  );
}
