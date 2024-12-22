import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const facilitators = [
  {
    name: "Aaron Oga",
    position: "Coordinator",
    image: "/data/aaron.png",
    initials: "AO"
  },
  {
    name: "Jennifer Otanwa",
    position: "Customer relationship management/ support",
    image: "/data/jennifer.jpg",
    initials: "JO"
  },
  {
    name: "Oguntimehin Ojo Clement",
    position: "Data Analysis/ Graphic Designer",
    image: "/dta/ojo.jpeg",
    initials: "OOC"
  },
  {
    name: "Dr. Kenneth Anueyiagu",
    position: "Business Plan/Analysis",
    image: "/dara/kenneth.jpeg",
    initials: "KA"
  },
  {
    name: "Dr. Aisha Patel",
    position: "Creative Design Head",
    image: "/placeholder.svg",
    initials: "AP"
  },
  {
    name: "Jacob Dogo",
    position: "Technical Development Director",
    image: "/data/jacob.png",
    initials: "JD"
  },
  {
    name: "Prince Shammah",
    position: "Web Designer",
    image: "/data/prince.jpg",
    initials: "PS"
  },
  {
    name: "Hannatu",
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