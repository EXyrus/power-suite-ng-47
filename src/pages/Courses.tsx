import { Metadata } from "@/components/Metadata";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Courses = () => {
  const courses = [
    {
      title: "Business Strategy",
      description: "Learn to develop and implement effective business strategies",
      duration: "8 weeks",
    },
    {
      title: "Leadership Development",
      description: "Enhance your leadership skills and team management abilities",
      duration: "6 weeks",
    },
    {
      title: "Digital Marketing",
      description: "Master modern digital marketing techniques and strategies",
      duration: "10 weeks",
    },
  ];

  return (
    <>
      <Metadata
        title="Courses | Training & Consultancy Agency"
        description="Explore our comprehensive range of professional training courses"
        schema={{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Professional Training Courses",
          "description": "Explore our comprehensive range of professional training courses",
          "provider": {
            "@type": "Organization",
            "name": "Training & Consultancy Agency",
          },
          "url": `${window.location.origin}/courses`,
        }}
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.title}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>Duration: {course.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;