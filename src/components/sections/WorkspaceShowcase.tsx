import { Button } from "@/components/ui/button";

export const WorkspaceShowcase = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Space to make your greatest impact
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you're a solo entrepreneur or leading a team, our workspace 
              provides the perfect environment for your success.
            </p>
            <Button variant="outline" size="lg">
              See our rates
            </Button>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg"
              alt="Modern workspace"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};