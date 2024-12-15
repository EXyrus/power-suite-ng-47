import { Metadata } from "@/components/Metadata";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const technologyCourses = [
    {
      title: "IT Support",
      overview: "Comprehensive training in troubleshooting, networking, and customer service skills for IT support professionals.",
      keySkills: "Hardware & software troubleshooting, network configuration, technical customer service.",
      duration: "12 weeks",
      price: "$999",
    },
    {
      title: "Customer Support",
      overview: "Focused on enhancing communication and problem-solving skills to deliver exceptional customer service.",
      keySkills: "Communication strategies, conflict resolution, customer relationship management (CRM) tools.",
      duration: "8 weeks",
      price: "$799",
    },
    {
      title: "Project Management",
      overview: "Practical training on how to lead projects from initiation to completion, including planning, execution, and evaluation.",
      keySkills: "Project planning, risk management, team leadership, scheduling, and budgeting.",
      duration: "16 weeks",
      price: "$1,499",
    },
    {
      title: "Web Development",
      overview: "Hands-on training in coding languages, website design, and user experience (UX) principles.",
      keySkills: "HTML, CSS, JavaScript, responsive design, web development frameworks, UX/UI design.",
      duration: "20 weeks",
      price: "$1,999",
    },
    {
      title: "Data Analysis",
      overview: "Instruction on collecting, analyzing, and interpreting data to provide actionable insights for businesses and organizations.",
      keySkills: "Data collection methods, statistical analysis, data visualization tools (e.g., Excel, Power BI, Python).",
      duration: "14 weeks",
      price: "$1,299",
    },
    {
      title: "Graphic Design",
      overview: "Training in design principles, creative software tools (e.g., Adobe Suite), and building a strong design portfolio.",
      keySkills: "Typography, color theory, logo design, digital illustrations, Photoshop, Illustrator, InDesign.",
      duration: "16 weeks",
      price: "$1,399",
    },
  ];

  const creativeCourses = [
    {
      title: "Art and Painting",
      overview: "Workshops that foster creativity while developing technical skills in traditional and digital art techniques.",
      keySkills: "Drawing, painting, digital art tools (e.g., Procreate, Adobe Photoshop), artistic techniques, portfolio development.",
      duration: "10 weeks",
      price: "$899",
    },
    {
      title: "Creative Workshops",
      overview: "Hands-on workshops where participants merge technology and art to create innovative projects and explore new artistic possibilities.",
      keySkills: "Creative problem-solving, collaboration, digital and traditional media fusion, artistic exploration.",
      duration: "8 weeks",
      price: "$799",
    },
  ];

  return (
    <>
      <Metadata
        title="Professional Courses | Power Suite Tech"
        description="Explore our comprehensive range of professional training courses in technology and creative arts."
        schema={{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Professional Training Courses",
          "description": "Comprehensive professional training courses in technology and creative fields",
          "provider": {
            "@type": "Organization",
            "name": "Power Suite Tech",
          },
        }}
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Professional Training Courses</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Technology Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyCourses.map((course) => (
              <Card key={course.title} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>Duration: {course.duration}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Overview</h4>
                      <p className="text-sm text-muted-foreground">{course.overview}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Skills</h4>
                      <p className="text-sm text-muted-foreground">{course.keySkills}</p>
                    </div>
                    <div className="pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">{course.price}</span>
                      </div>
                      <Button className="w-full">Enroll Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Creative Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {creativeCourses.map((course) => (
              <Card key={course.title} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>Duration: {course.duration}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Overview</h4>
                      <p className="text-sm text-muted-foreground">{course.overview}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Skills</h4>
                      <p className="text-sm text-muted-foreground">{course.keySkills}</p>
                    </div>
                    <div className="pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">{course.price}</span>
                      </div>
                      <Button className="w-full">Enroll Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Courses;