/* eslint-disable @next/next/no-img-element */
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import React from "react";

interface PreviewSideProps {
  enableContactUs: boolean;
  contactContent: string;
  userName: string;
  jobTitle: string;
  phoneNumber: string;
  enableImage: boolean;
  contactCTA: string;
}

const PreviewSide: React.FC<PreviewSideProps> = ({
  enableContactUs,
  contactContent,
  userName,
  jobTitle,
  phoneNumber,
  enableImage,
  contactCTA,
}) => {
  const toast = useToast();
  const handleCopySignature = async () => {
    const signatureDiv = document.getElementById("signatureContent");
    if (signatureDiv) {
      try {
        const html = signatureDiv.innerHTML;
        const blob = new Blob([html], { type: "text/html" });
        const data = [new ClipboardItem({ "text/html": blob })];
        await navigator.clipboard.write(data);
        toast({
          title: "Signature Copied",
          description: "Now you can paste in your signature tab",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  return (
    <Box padding={"32px"}>
      <Flex alignItems="center" justifyContent="flex-end">
        <Button size="sm" colorScheme="gray" onClick={handleCopySignature}>
          Copy Signature
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
          <table
            cellPadding="0"
            cellSpacing="0"
            style={{ width: "50%", border: "none" }}
          >
            <tbody>
              {enableImage ? (
                <tr>
                  <td style={{ width: "100px", verticalAlign: "top" }}>
                    <img
                      src="https://ss-staging-public.s3.amazonaws.com/email-signature/meenakshi.png"
                      alt="profile"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50px",
                        position: "relative",
                        zIndex: 2,
                        marginLeft: "10px",
                      }}
                    />
                  </td>
                  <td style={{ verticalAlign: "top", position: "relative" }}>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ border: "none", position: "relative" }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "8px" }}>
                            <img
                              src="https://ss-staging-public.s3.amazonaws.com/email-signature/bg1.png"
                              alt="background1"
                              style={{ width: "40px", height: "100px" }}
                            />
                          </td>
                          <td>
                            <img
                              src="https://ss-staging-public.s3.amazonaws.com/email-signature/bg2.png"
                              alt="background2"
                              style={{ width: "40px", height: "100px" }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              ) : (
                <tr>
                  <div
                    style={{ border: "2px solid #56B0BB", width: "44px" }}
                  ></div>
                </tr>
              )}
              <tr>
                <td
                  colSpan={2}
                  style={{ paddingTop: "24px", paddingBottom: "16px" }}
                >
                  <p style={{ fontWeight: "700", fontSize: "16px", margin: 0 }}>
                    {userName}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#4E596C",
                      margin: "8px 0 0 0",
                    }}
                  >
                    {jobTitle}
                  </p>
                  <p style={{ fontSize: "14px", color: "#4E596C", margin: 0 }}>
                    {phoneNumber}
                  </p>
                  {enableContactUs && (
                    <a
                      href={contactContent}
                      style={{
                        fontSize: "14px",
                        padding: "8px",
                        borderRadius: "12px",
                        marginTop: "8px",
                        color: "#56B0BB",
                        fontWeight: 700,
                        border: "1.2px solid #56B0BB",
                        background: "white",
                        display: "inline-block",
                        cursor: "pointer",
                        textDecoration: 'unset'
                      }}
                    >
                      {contactCTA}
                    </a>
                  )}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    paddingTop: "24px",
                    borderTop: "1.5px solid #64748B26",
                    maxWidth: "400px",
                    marginTop: "20px",
                  }}
                >
                  <img
                    src="https://ss-staging-public.s3.amazonaws.com/email-signature/logo.png"
                    alt="SurveySparrow Logo"
                    style={{ width: "150px", height: "24px" }}
                  />
                  <p
                    style={{
                      color: "#848484",
                      fontSize: "9px",
                      marginTop: "8px",
                    }}
                  >
                    This email contains sensitive information meant only for the
                    specified recipient. In the event of unintended receipt,
                    please notify us immediately for proper deletion.
                    Unauthorized distribution or disclosure of its contents is
                    strictly prohibited. While precautions have been taken to
                    prevent malware, SurveySparrow cannot be held liable for any
                    resulting loss or damage.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
    </Box>
  );
};

export default PreviewSide;
