import { Metadata } from "@/components/Metadata";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <Metadata
        title="About Us | Power Suite Tech and Galleria"
        description="Learn about our mission, vision, and commitment to empowering individuals through technology and art education"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Us",
          "description": "Power Suite Tech and Galleria - Where innovation, education, and creativity converge",
          "url": `${window.location.origin}/about`,
        }}
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardContent className="p-6">
              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  Welcome to Power Suite Tech and Galleria, a forward-thinking company where innovation, education, and creativity converge. We are dedicated to empowering individuals with the essential skills and expertise to thrive in the ever-evolving digital landscape, while offering businesses comprehensive support to navigate their growth and achieve operational excellence. Our approach integrates technology and artistry, creating a unique platform that fosters the development of both the next generation of digital professionals and visionary artists.
                </p>
                <p className="text-lg mb-6">
                  At Power Suite Tech and Galleria, we are driven by a mission to deliver transformative educational programs and consultancy services that bridge the gap between technical proficiency and creative expression. By offering cutting-edge training in emerging fields like IT support, web development, data analysis, graphic design, and digital art, we prepare young professionals to meet the challenges of tomorrow's workforce. In addition, our tailored consultancy services provide businesses with expert guidance on strategy, marketing, and operational optimization to drive success in today's competitive market.
                </p>
                <p className="text-lg mb-6">
                  We pride ourselves on fostering an environment of continuous learning and growth, cultivating a community where knowledge is shared, creativity is nurtured, and professional excellence is achieved. With a diverse team of experienced instructors and consultants, we ensure that our clients—whether individuals or businesses—receive unparalleled support to realize their full potential.
                </p>
                <p className="text-lg mb-6">
                  As a company that understands the synergy between technology and art, we also place a significant focus on collaborations that allow tech professionals and artists to explore the creative possibilities that both industries have to offer. We are passionate about creating opportunities for personal and professional development, supporting a wide array of industries, and enabling the success of businesses and individuals alike.
                </p>
                <p className="text-lg">
                  Through our education and consultancy services, we aim to shape a future where technology and creativity are seamlessly integrated to solve real-world problems and inspire innovation. We invite you to partner with us as we create a thriving ecosystem for the leaders, creators, and innovators of tomorrow.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg mb-6">
                At Power Suite Tech and Galleria, we envision a world where aspiring tech professionals and artists have access to the knowledge, tools, and opportunities necessary for success. We believe that with the right guidance, anyone can realize their potential, contribute to the global workforce, and make a lasting impact in their respective industries.
              </p>
              
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-4">Our mission is twofold:</p>
              <ul className="list-disc pl-6 mb-6 text-lg">
                <li className="mb-2">Empower individuals through comprehensive education and training in technology and art fields.</li>
                <li className="mb-2">Support businesses with consultancy services that drive success and operational efficiency.</li>
              </ul>
              <p className="text-lg font-semibold">
                Join us in revolutionizing the intersection of technology and creativity, where your growth is our priority.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;