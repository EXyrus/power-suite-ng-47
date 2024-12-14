import { Metadata } from "@/components/Metadata";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ArtStore = () => {
  const artworks = [
    {
      title: "Abstract Harmony",
      artist: "Jane Doe",
      price: "$599",
      description: "A vibrant abstract piece exploring color and movement",
    },
    {
      title: "Urban Landscape",
      artist: "John Smith",
      price: "$799",
      description: "Contemporary interpretation of city life",
    },
    {
      title: "Nature's Dance",
      artist: "Maria Garcia",
      price: "$699",
      description: "Organic forms inspired by natural elements",
    },
  ];

  return (
    <>
      <Metadata
        title="Art Store | Training & Consultancy Agency"
        description="Browse and purchase unique artworks from talented artists"
        schema={{
          "@context": "https://schema.org",
          "@type": "Store",
          "name": "Art Store",
          "description": "Browse and purchase unique artworks from talented artists",
          "url": `${window.location.origin}/art-store`,
        }}
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Art Store</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <Card key={artwork.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{artwork.title}</CardTitle>
                <CardDescription>By {artwork.artist}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{artwork.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{artwork.price}</span>
                  <Button>Add to Cart</Button>
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