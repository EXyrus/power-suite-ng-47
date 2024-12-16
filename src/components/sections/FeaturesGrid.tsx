import { BookOpen, Users, Trophy, Palette } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Expert Training",
    description: "Learn from industry professionals with years of experience"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Professional Network",
    description: "Connect with like-minded professionals and expand your network"
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Certified Programs",
    description: "Gain recognized certifications to boost your career"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Art Gallery",
    description: "Explore our curated collection of unique artworks"
  }
];

export const FeaturesGrid = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};