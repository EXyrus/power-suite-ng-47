import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="bg-primary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Future with Expert Training
          </h1>
          <p className="text-xl mb-8">
            Discover comprehensive training programs and consultancy services designed to
            elevate your skills and accelerate your career growth.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link to="/courses">Explore Courses</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};