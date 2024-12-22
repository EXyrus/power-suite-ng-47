import { useQuery } from "@tanstack/react-query";
import { Metadata } from "@/components/Metadata";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { demoJobs } from "@/data/demoJobs";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Jobs = () => {
  const { toast } = useToast();

  const { data: jobs, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      try {
        toast({
          title: "Using Demo Data",
          description: "Could not connect to job database. Showing demo jobs instead.",
          variant: "default",
        });
        return demoJobs;
      } catch (error) {
        console.error("Error fetching jobs:", error);
        return demoJobs;
      }
    },
    initialData: demoJobs,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Job Opportunities</h1>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-8 w-2/3" />
                <Skeleton className="h-4 w-1/3 mt-2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Metadata
        title="Job Board | Power Suite Tech"
        description="Explore career opportunities and job openings at Power Suite Tech."
        schema={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "name": "Job Opportunities at Power Suite Tech",
          "description": "Find your next career opportunity with Power Suite Tech",
          "hiringOrganization": {
            "@type": "Organization",
            "name": "Power Suite Tech",
          },
        }}
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Job Opportunities</h1>
        <div className="space-y-6">
          {jobs?.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.company}</CardDescription>
                  </div>
                  <Badge>{job.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{job.location}</span>
                    <span>{job.salary}</span>
                  </div>
                  <p className="text-sm line-clamp-2">{job.description}</p>
                  <div className="flex justify-end gap-4">
                    <Link to={`/jobs/${job.id}`}>
                      <Button variant="outline">View Details</Button>
                    </Link>
                    <a 
                      href={`mailto:careers@powersuite.tech?subject=Application for ${job.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="default">Apply Now</Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;