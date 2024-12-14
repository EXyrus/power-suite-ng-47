import { Metadata } from "@/components/Metadata";

const About = () => {
  return (
    <>
      <Metadata
        title="About Us | Training & Consultancy Agency"
        description="Learn about our mission, values, and expert team"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Us",
          "description": "Learn about our mission, values, and expert team",
          "url": `${window.location.origin}/about`,
        }}
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            We are a leading training and consultancy agency dedicated to helping individuals
            and organizations reach their full potential through expert guidance and
            comprehensive training programs.
          </p>
          <p className="text-lg">
            Our team of experienced professionals brings years of industry expertise to
            deliver exceptional results for our clients.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;