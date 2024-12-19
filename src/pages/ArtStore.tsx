import { useState } from "react";
import { Metadata } from "@/components/Metadata";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { EnrollmentModal } from "@/components/EnrollmentModal";

const ArtStore = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<{
    title: string;
    price: string;
  } | null>(null);

  const artworks = [
    {
      title: "Digital Dreams",
      artist: "Elena Rodriguez",
      price: "$799",
      description: "A stunning digital artwork exploring the intersection of technology and nature.",
      medium: "Digital Art",
    },
    {
      title: "Urban Pulse",
      artist: "Marcus Chen",
      price: "$1,200",
      description: "Contemporary urban landscape capturing the energy of modern city life.",
      medium: "Mixed Media",
    },
    {
      title: "Quantum Reflections",
      artist: "Sarah Johnson",
      price: "$950",
      description: "Abstract visualization of quantum mechanics principles through digital art.",
      medium: "Digital Art",
    },
    {
      title: "Tech Flora",
      artist: "David Kim",
      price: "$850",
      description: "Botanical illustrations reimagined through a technological lens.",
      medium: "Digital Print",
    },
  ];

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
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Digital Art Gallery
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork, index) => (
              <motion.div
                key={artwork.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="backdrop-blur-md bg-white/30 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {selectedArtwork && (
        <EnrollmentModal
          isOpen={!!selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          courseName={selectedArtwork.title}
          coursePrice={selectedArtwork.price}
        />
      )}
    </>
  );
};

export default ArtStore;