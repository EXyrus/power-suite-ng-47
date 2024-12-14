import { Metadata } from "@/components/Metadata";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      title: "IT Support Fundamentals",
      duration: "12 weeks",
      price: "$999",
      description: "Master the essentials of IT support, including hardware, software, and network troubleshooting.",
      level: "Beginner",
    },
    {
      title: "Web Development Bootcamp",
      duration: "16 weeks",
      price: "$1,499",
      description: "Learn full-stack web development with modern technologies and frameworks.",
      level: "Intermediate",
    },
    {
      title: "Data Analysis & Visualization",
      duration: "10 weeks",
      price: "$1,299",
      description: "Develop skills in data analysis, visualization, and reporting using industry-standard tools.",
      level: "Intermediate",
    },
    {
      title: "Digital Art & Design",
      duration: "8 weeks",
      price: "$899",
      description: "Create stunning digital artwork and designs using professional software and techniques.",
      level: "All Levels",
    },
  ];

  return (
    <>
      <Metadata
        title="Professional Courses | Power Suite Tech"
        description="Explore our comprehensive range of professional training courses in IT, web development, data analysis, and digital art."
        schema={{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Professional Training Courses",
          "description": "Comprehensive professional training courses in various technical and creative fields",
          "provider": {
            "@type": "Organization",
            "name": "Power Suite Tech",
          },
        }}
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Professional Training Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>Duration: {course.duration}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{course.description}</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Level: {course.level}</span>
                    <span className="font-semibold">{course.price}</span>
                  </div>
                  <Button className="w-full">Enroll Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;