import { Hero } from "../components/hero";
import TreeFloat from "../components/treeFloat";
import { Footer } from "../components/footer";
import { MemoryWarningSection } from "../components/memoryWarningSection";
import { ResourcesSection } from "../components/resourcesSection";
import { StepsSection } from "../components/stepsSection";
import { ColletionSection } from "../components/collectionSection";
import FaqSection from "@/components/faqSection";

export default function Home() {
  return (
    <>
      <Hero />
      <MemoryWarningSection />
      <ResourcesSection />
      <ColletionSection />
      <StepsSection />
      <FaqSection />
      <TreeFloat />
      <Footer />
    </>
  );
}
