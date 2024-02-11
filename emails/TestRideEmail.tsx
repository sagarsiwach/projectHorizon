import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const TestRideEmail = ({
  model,
  location,
  email,
  name,
  mobile,
  referralCode,
}) => (
  <Html>
    <Head />
    <Preview>Thank you for Registering your Test Ride</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://ik.imagekit.io/kabiramobility/km-logo_FCABHRJgN.png?updatedAt=1707631320148"
          width="258"
          height="56"
          alt="Kabira Mobility"
          style={logo}
        />
        <Heading style={heading}>
          Thank you for registering for test ride
        </Heading>
        <Section style={buttonContainer}>
          <Text style={paragraph}>Hey, {name}!</Text>
          <Text style={paragraph}>
            Thank you for registering for the test ride. Someone from our team,
            will get in touch with you Shortly to coordinate for a Test Ride.
          </Text>
        </Section>
        <Section style={buttonContainer}>
          <Text style={paragraph}>
            <b>Name:</b> {name}
          </Text>
          <Text style={paragraph}>
            <b>Model:</b> {model}
          </Text>
          <Text style={paragraph}>
            <b>Pincode:</b> {location}
          </Text>
          <Text style={paragraph}>
            <b>E-Mail:</b> {email}
          </Text>
          <Text style={paragraph}>
            <b>Mobile Number:</b> {mobile}
          </Text>
          <Text style={paragraph}>
            <b>Referral Code:</b> {referralCode}
          </Text>
        </Section>
        <Hr style={hr} />
        <Text style={footerText}>©Kabira Mobility Private Limited</Text>
        <Link href="https://kabiramobility.com/privacy" style={reportLink}>
          Privacy Policy
        </Link>
      </Container>
    </Body>
  </Html>
);

export default TestRideEmail;

const logo = {
  borderRadius: 21,
  width: 184,
  height: 40,
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#484848",
  padding: "17px 0 0",
};

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};
const footerText = {
  margin: "0 0 15px",
  fontSize: "14px",
  lineHeight: "1.4",
  color: "#aaaaaa",
};
const reportLink = {
  fontSize: "14px",
  color: "#bbbbbb",
};

const buttonContainer = {
  padding: "27px 0 27px",
};

const hr = {
  borderColor: "#dfe1e4",
  margin: "42px 0 26px",
};
