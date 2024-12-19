import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Text,
} from "@react-email/components";

interface ArtPurchaseConfirmationEmailProps {
  fullName: string;
  artworkTitle: string;
  artist: string;
  shippingAddress: string;
}

export const ArtPurchaseConfirmationEmail = ({
  fullName,
  artworkTitle,
  artist,
  shippingAddress,
}: ArtPurchaseConfirmationEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Art Purchase Confirmation</Heading>
        <Text style={text}>Dear {fullName},</Text>
        <Text style={text}>
          Thank you for purchasing "{artworkTitle}" by {artist}. We're excited to have you as a collector!
        </Text>
        <Text style={text}>
          Your artwork will be carefully packaged and shipped to:
        </Text>
        <Text style={address}>
          {shippingAddress}
        </Text>
        <Text style={text}>
          You will receive tracking information once your artwork has been shipped.
        </Text>
        <Text style={text}>
          If you have any questions about your purchase, please don't hesitate to contact us.
        </Text>
        <Text style={text}>Best regards,</Text>
        <Text style={text}>Power Suite Art Gallery Team</Text>
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

const address = {
  backgroundColor: "#f9f9f9",
  padding: "12px",
  borderRadius: "4px",
  margin: "10px 0",
  color: "#666",
  fontSize: "14px",
  lineHeight: "1.5",
};