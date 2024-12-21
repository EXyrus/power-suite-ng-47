import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const facilitators = [
  {
    name: "Dr. Sarah Chen",
    position: "Lead Technical Instructor",
    image: "/placeholder.svg",
    initials: "SC"
  },
  {
    name: "Michael Rodriguez",
    position: "Senior Art Director",
    image: "/placeholder.svg",
    initials: "MR"
  },
  {
    name: "Dr. Emily Thompson",
    position: "Digital Arts Specialist",
    image: "/placeholder.svg",
    initials: "ET"
  },
  {
    name: "James Wilson",
    position: "Technology Innovation Lead",
    image: "/placeholder.svg",
    initials: "JW"
  },
  {
    name: "Dr. Aisha Patel",
    position: "Creative Design Head",
    image: "/placeholder.svg",
    initials: "AP"
  },
  {
    name: "Robert Kim",
    position: "Technical Development Director",
    image: "/placeholder.svg",
    initials: "RK"
  },
  {
    name: "Lisa Johnson",
    position: "Art Education Coordinator",
    image: "/placeholder.svg",
    initials: "LJ"
  },
  {
    name: "David Martinez",
    position: "Innovation Strategy Lead",
    image: "/placeholder.svg",
    initials: "DM"
  }
];

export const Facilitators = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Meet Our Facilitators
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {facilitators.map((facilitator) => (
            <div
              key={facilitator.name}
              className="flex flex-col items-center p-4 rounded-lg backdrop-blur-sm bg-white/30 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={facilitator.image} alt={facilitator.name} />
                <AvatarFallback>{facilitator.initials}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold text-center">{facilitator.name}</h3>
              <p className="text-sm text-gray-600 text-center">{facilitator.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};