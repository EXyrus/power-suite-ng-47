import { Helmet } from "react-helmet";

interface MetadataProps {
  title: string;
  description: string;
  schema: Record<string, any>;
}

export const Metadata = ({ title, description, schema }: MetadataProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};