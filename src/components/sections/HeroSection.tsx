import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url("/lovable-uploads/280f6f83-1e2f-4ce8-b88d-754fad59e6a5.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">Transform Your Future with Expert Training</h1>
          <p className="text-xl mb-8">
            Discover comprehensive training programs and consultancy services designed to 
            elevate your skills and accelerate your career growth.
          </p>
          <Link to="/courses">
            <Button size="lg" className="text-lg px-8">
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};