/* eslint-disable @next/next/no-img-element */
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface PreviewSideProps {
    enableContactUs: boolean;
    contactContent: string;
    userName: string;
    jobTitle: string;
    phoneNumber: string;
  }

const PreviewSide: React.FC<PreviewSideProps> = ({
  enableContactUs,
  contactContent,
  userName,
  jobTitle,
  phoneNumber,
}) => {
  
    const handleCopySignature = async () => {
        const signatureDiv = document.getElementById("signatureContent");
        if (signatureDiv) {
          try {
            const html = signatureDiv.innerHTML;
            const blob = new Blob([html], { type: "text/html" });
            const data = [new ClipboardItem({ "text/html": blob })];
            await navigator.clipboard.write(data);
            alert("Signature copied to clipboard!");
          } catch (err) {
            console.error("Failed to copy text: ", err);
          }
        }
      };

  return (
    <Box padding={"32px"}>
      <Flex alignItems="center" justifyContent="flex-end">
        <Button size="sm" colorScheme="gray" onClick={handleCopySignature}>
          Install Signature
        </Button>
      </Flex>
      <Box borderBottom="1px solid #E2E8F0" padding="12px 0">
        <Text color="GrayText">To: Your Recipient</Text>
      </Box>
      <Box borderBottom="1px solid #E2E8F0" padding="12px 0">
        <Text color="GrayText">Subject: Gotham needs you!</Text>
      </Box>
      <Box marginTop="32px">
        <div id="signatureContent">
          <div style={{ border: "2px solid #56B0BB", width: "44px" }}></div>
          <div style={{ marginTop: "24px" }}>
            <p style={{ fontWeight: "700", fontSize: "16px" }}>{userName}</p>
            <p style={{ marginTop: "8px", fontSize: "14px", color: "#4E596C" }}>
              {jobTitle}
            </p>
            <p style={{ fontSize: "14px", color: "#4E596C" }}>{phoneNumber}</p>
            {enableContactUs && (
              <button
                type="button"
                onClick={() =>
                  (window.location.href = `https://${contactContent}`)
                }
                style={{
                  fontSize: "15px",
                  border: "3.25px solid #4A9CA666",
                  padding: "8px",
                  borderRadius: "12px",
                  marginTop: "8px",
                  color: "#4A9CA6",
                  fontWeight: 700,
                }}
              >
                Contact Us
              </button>
            )}
          </div>
          <div
            style={{
              marginTop: "24px",
              borderTop: "1.5px solid #64748B26",
              maxWidth: "400px",
            }}
          >
            <div style={{ marginTop: "24px" }}>
              <img
                src="https://ss-staging-public.s3.amazonaws.com/email-signature/logo.png"
                alt="SurveySparrow Logo"
                style={{ width: 150, height: 24 }}
              />
              <p
                style={{ color: "#848484", fontSize: "9px", marginTop: "8px" }}
              >
                This email contains sensitive information meant only for the
                specified recipient. In the event of unintended receipt, please
                notify us immediately for proper deletion. Unauthorized
                distribution or disclosure of its contents is strictly
                prohibited. While precautions have been taken to prevent
                malware, SurveySparrow cannot be held liable for any resulting
                loss or damage.
              </p>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default PreviewSide;
