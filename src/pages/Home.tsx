import { Metadata } from "@/components/Metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { WorkspaceShowcase } from "@/components/sections/WorkspaceShowcase";

const Home = () => {
  return (
    <>
      <Metadata
        title="Power Suite Tech - Training & Consultancy Agency"
        description="Expert training and consultancy services to help you grow"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Power Suite Tech",
          "description": "Expert training and consultancy services to help you grow",
          "url": "https://powersuite.com.ng",
        }}
      />
      <HeroSection />
      <FeaturesGrid />
      <WorkspaceShowcase />
    </>
  );
};

export default Home;