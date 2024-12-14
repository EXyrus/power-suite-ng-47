import { Metadata } from "@/components/Metadata";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ArtStore = () => {
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
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Art Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <Card key={artwork.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{artwork.title}</CardTitle>
                <CardDescription>By {artwork.artist}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{artwork.description}</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{artwork.medium}</span>
                    <span className="font-semibold">{artwork.price}</span>
                  </div>
                  <Button className="w-full">Purchase</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtStore;