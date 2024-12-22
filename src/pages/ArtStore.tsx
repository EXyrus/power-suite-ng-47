import { useState } from "react";
import { Metadata } from "@/components/Metadata";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ArtPurchaseModal } from "@/components/ArtPurchaseModal";

const artworks = [
  {
    title: "Digital Dreams",
    artist: "Elena Rodriguez",
    price: "$799",
    description: "A stunning digital artwork exploring the intersection of technology and nature.",
    medium: "Digital Art",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    artistBio: "Elena Rodriguez is a digital artist known for her unique blend of natural elements and technological concepts. With over 10 years of experience, her work has been featured in numerous digital art exhibitions worldwide."
  },
  {
    title: "Urban Pulse",
    artist: "Marcus Chen",
    price: "$1,200",
    description: "Contemporary urban landscape capturing the energy of modern city life.",
    medium: "Mixed Media",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    artistBio: "Marcus Chen specializes in urban landscapes and contemporary art. His work reflects the dynamic energy of city life, influenced by his background in architecture and fine arts."
  },
  {
    title: "Quantum Reflections",
    artist: "Sarah Johnson",
    price: "$950",
    description: "Abstract visualization of quantum mechanics principles through digital art.",
    medium: "Digital Art",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    artistBio: "Sarah Johnson combines her background in quantum physics with digital art to create unique visualizations of scientific concepts. Her work bridges the gap between science and art."
  },
  {
    title: "Tech Flora",
    artist: "David Kim",
    price: "$850",
    description: "Botanical illustrations reimagined through a technological lens.",
    medium: "Digital Print",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    artistBio: "David Kim is a pioneering artist in the digital botanical art space. His work seamlessly blends traditional botanical illustration techniques with modern digital tools."
  }
];

const ArtStore = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<{
    title: string;
    price: string;
    artist: string;
  } | null>(null);

  return (
    <>
      <Metadata
        title="Art Gallery | Power Suite Tech"
        description="Explore our curated collection of digital and contemporary artwork from talented artists."
        schema={{
          "@context": "https://schema.org",
          "@type": "Store",
          "name": "Power Suite Art Gallery",
          "description": "Curated collection of digital and contemporary artwork",
          "@id": `${window.location.origin}/art-store`,
          "url": `${window.location.origin}/art-store`,
        }}
      />
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork, index) => (
              <motion.div
                key={artwork.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HoverCard>
                  <HoverCardTrigger>
                    <Card className="backdrop-blur-md bg-white/30 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="relative w-full h-[300px] mb-4 overflow-hidden rounded-lg">
                          <div 
                            className="absolute inset-0 bg-cover bg-center rounded-lg"
                            style={{ 
                              backgroundImage: `url(${artwork.image})`,
                              pointerEvents: 'none',
                              userSelect: 'none'
                            }}
                          />
                        </div>
                        <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                          {artwork.title}
                        </CardTitle>
                        <CardDescription className="text-gray-700">By {artwork.artist}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="mb-4 text-gray-700">{artwork.description}</p>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">{artwork.medium}</span>
                            <span className="font-semibold text-purple-600">{artwork.price}</span>
                          </div>
                          <Button 
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => setSelectedArtwork(artwork)}
                          >
                            Purchase
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="backdrop-blur-md bg-white/80 border border-white/20 w-80">
                    <h3 className="font-semibold mb-2">About the Artist</h3>
                    <p className="text-sm text-gray-700">{artwork.artistBio}</p>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {selectedArtwork && (
        <ArtPurchaseModal
          isOpen={!!selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          artworkTitle={selectedArtwork.title}
          artworkPrice={selectedArtwork.price}
          artist={selectedArtwork.artist}
        />
      )}
    </>
  );
};

export default ArtStore;
