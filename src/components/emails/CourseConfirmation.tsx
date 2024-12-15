import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Text,
} from "@react-email/components";

interface CourseConfirmationEmailProps {
  fullName: string;
  courseName: string;
  whatsappLink: string;
}

export const CourseConfirmationEmail = ({
  fullName,
  courseName,
  whatsappLink,
}: CourseConfirmationEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Course Enrollment Confirmation</Heading>
        <Text style={text}>Dear {fullName},</Text>
        <Text style={text}>
          Thank you for enrolling in {courseName}. Your payment has been confirmed and your spot is secured.
        </Text>
        <Text style={text}>
          Please join our WhatsApp group for course updates and materials:
        </Text>
        <Link href={whatsappLink} style={button}>
          Join WhatsApp Group
        </Link>
        <Text style={text}>
          If you have any questions, please don't hesitate to contact us.
        </Text>
        <Text style={text}>Best regards,</Text>
        <Text style={text}>Power Suite Tech Team</Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const h1 = {
  color: "#1a1a1a",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.1",
  margin: "0 0 15px",
};

const text = {
  color: "#444",
  fontSize: "16px",
  lineHeight: "1.4",
  margin: "0 0 15px",
};

const button = {
  backgroundColor: "#000",
  borderRadius: "5px",
  color: "#fff",
  display: "inline-block",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "50px",
  textAlign: "center" as const,
  textDecoration: "none",
  width: "200px",
  margin: "10px 0",
};