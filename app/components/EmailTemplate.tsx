import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Button,
} from "@react-email/components";

import FormTypes from "../types/formTypes";

const EmailTemplate = ({
  nameInput,
  emailInput,
  messageInput,
}: FormTypes) => {
  return (
    <Html>
      <Head />

      <Body style={styles.body}>
        <Container style={styles.container}>
          
          <Heading style={styles.h1}>
            Nový dopyt
          </Heading>

          <Text style={styles.text}>
            <strong>Dobrý deň, obdržali sme nový dopyt z Vášho webu.</strong>
          </Text>
          <Text style={styles.text}>
            <strong>Nižšie nájdete detaily:</strong>
          </Text>

          <Section style={styles.dataBox}>
            <Text style={styles.text}>
              <strong>Meno:</strong> {nameInput} 
            </Text>
            <Text style={styles.text}>
                          <strong>Email:</strong>
                          <a href={`mailto:${emailInput}`} style={styles.link}>
    {emailInput}
                          </a>
            </Text>
            <Text style={styles.text}>
              <strong>Správa:</strong> {messageInput}
            </Text>
          </Section>

          <Button href="https://www.impresse.sk" style={styles.button}>
            www.impresse.sk
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const styles = {
  body: {
    backgroundColor: "#f4f7fa",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },

  container: {
    backgroundColor: "#ffffff",
    padding: "30px",
  },

  h1: {
    fontSize: "28px",
    color: "#d4ffbc",
    margin: "20px 0",
    fontWeight: "600",
  },

  text: {
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.6",
    marginBottom: "16px",
    },
  
  link: {
  color: "#d4ffbc",
//   textDecoration: "none",
  fontWeight: "600",
},

  dataBox: {
    margin: "20px 0",
    padding: "20px",
    backgroundColor: "#F5F8FF",
  },

  button: {
    display: "inline-block",
    padding: "14px 28px",
    backgroundColor: "#d4ffbc",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "600",
    marginTop: "20px",
  },
};