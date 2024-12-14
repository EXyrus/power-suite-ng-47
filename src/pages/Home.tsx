import { Metadata } from "@/components/Metadata";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";

const Home = () => {
  return (
    <>
      <Metadata
        title="Training & Consultancy Agency"
        description="Expert training and consultancy services to help you grow"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Training & Consultancy Agency",
          "description": "Expert training and consultancy services to help you grow",
          "url": window.location.origin,
        }}
      />
      <Hero />
      <Features />
    </>
  );
};

export default Home;