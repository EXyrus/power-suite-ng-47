import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Metadata } from "@/components/Metadata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { demoJobs } from "@/data/demoJobs";
import { useToast } from "@/components/ui/use-toast";

const JobDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const { data: job, isLoading } = useQuery({
    queryKey: ["job", id],
    queryFn: async () => {
      try {
        // Since we don't have access to Airtable credentials, we'll use demo data
        toast({
          title: "Using Demo Data",
          description: "Could not connect to job database. Showing demo job instead.",
          variant: "default",
        });
        return demoJobs.find((j) => j.id === id);
      } catch (error) {
        console.error("Error fetching job:", error);
        return demoJobs.find((j) => j.id === id);
      }
    },
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-4 w-1/3 mt-2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-40 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Job Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Metadata
        title={`${job.title} | Power Suite Tech Jobs`}
        description={job.description}
        schema={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": job.title,
          "description": job.description,
          "hiringOrganization": {
            "@type": "Organization",
            "name": job.company,
          },
          "jobLocation": {
            "@type": "Place",
            "address": job.location,
          },
          "employmentType": job.type,
          "datePosted": job.postedDate,
        }}
      />
      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-3xl">{job.title}</CardTitle>
                <p className="text-xl text-muted-foreground mt-2">{job.company}</p>
              </div>
              <Badge className="text-lg px-4 py-2">{job.type}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-between text-lg">
              <span>{job.location}</span>
              <span className="font-semibold">{job.salary}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{job.description}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Requirements</h3>
              <p className="text-muted-foreground">{job.requirements}</p>
            </div>
            <div className="text-sm text-muted-foreground">
              Posted: {new Date(job.postedDate).toLocaleDateString()}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default JobDetails;
