import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const WorkspaceShowcase = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Elevate Your Skills with Our Programs
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you're starting your journey or advancing your career, our expert-led 
              training programs provide the knowledge and skills you need to succeed.
            </p>
            <Link to="/courses">
              <Button variant="outline" size="lg">
                View Course Catalog
              </Button>
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Training session"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};