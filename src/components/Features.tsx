import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Trophy, Palette } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Expert Training",
      description: "Learn from industry professionals with years of experience",
      icon: BookOpen,
    },
    {
      title: "Professional Network",
      description: "Connect with like-minded professionals and expand your network",
      icon: Users,
    },
    {
      title: "Certified Programs",
      description: "Gain recognized certifications to boost your career",
      icon: Trophy,
    },
    {
      title: "Art Gallery",
      description: "Explore our curated collection of unique artworks",
      icon: Palette,
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};