import { Wifi, Coffee, Zap, Users, Building2, Clock } from "lucide-react";

const features = [
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "24/7hr Access",
    description: "Work whenever inspiration strikes"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Collaborative Space",
    description: "Connect with like-minded professionals"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "High Speed Internet",
    description: "Lightning-fast connectivity always"
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Full Kitchen",
    description: "Complimentary coffee and snacks"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Meeting Rooms",
    description: "Professional spaces for your meetings"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Flexible Plans",
    description: "Choose what works best for you"
  }
];

export const FeaturesGrid = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          A Place That Helps Growth of Your Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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