import { useQuery } from "@tanstack/react-query";
import { Metadata } from "@/components/Metadata";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
  salary: string;
  postedDate: string;
}

const Jobs = () => {
  const { data: jobs, isLoading, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      // This is a placeholder - replace with your actual Airtable API call
      const response = await fetch("YOUR_AIRTABLE_API_ENDPOINT");
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
      return response.json();
    },
  });

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center text-red-500">
          Error loading jobs. Please try again later.
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
        <h1 className="text-4xl font-bold mb-8 text-center">Job Opportunities</h1>
        
        <div className="grid gap-6">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className="h-6 w-2/3" />
                  <Skeleton className="h-4 w-1/3 mt-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full" />
                </CardContent>
              </Card>
            ))
          ) : (
            // Actual job listings
            jobs?.map((job: Job) => (
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
                    <p className="text-sm">{job.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <p className="text-sm text-muted-foreground">{job.requirements}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Posted: {new Date(job.postedDate).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Jobs;