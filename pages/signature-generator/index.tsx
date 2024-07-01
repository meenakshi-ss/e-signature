import DetailsSide from "@/components/DetailsSide";
import PreviewSide from "@/components/PreviewSide";
import SurveySparrow from "@/icons/SurveySparrow";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const SignatureGenerator = () => {
  const [userName, setUserName] = useState("Bruce Wayne");
  const [jobTitle, setJobTitle] = useState("Batman");
  const [phoneNumber, setPhoneNumber] = useState("+919876543210");
  const [enableContactUs, setEnableContactUs] = useState(false);
  const [contactContent, setContactContent] = useState("");

  return (
    <Box
      fontFamily="body"
      minH={"100vh"}
      backgroundColor={"#E2E6EB"}
      padding="32px"
    >
      <Flex alignItems="center" gap="8px">
        <SurveySparrow size="36" />
        <Text fontWeight="500" fontSize="large">
          Email-Signature Generator
        </Text>
      </Flex>
      <Flex marginTop="24px" minH={"85vh"} padding="24px">
        <Box flex="0 0 30%" borderLeftRadius="16px" backgroundColor="#E6F3F4">
          <DetailsSide
            enableContactUs={enableContactUs}
            setEnableContactUs={setEnableContactUs}
            contactContent={contactContent}
            setContactContent={setContactContent}
            userName={userName}
            setUserName={setUserName}
            jobTitle={jobTitle}
            setJobTitle={setJobTitle}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        </Box>
        <Box flex="0 0 70%" backgroundColor="white" borderRightRadius="16px">
          <PreviewSide
            enableContactUs={enableContactUs}
            contactContent={contactContent}
            userName={userName}
            jobTitle={jobTitle}
            phoneNumber={phoneNumber}
          />
        </Box>
      </Flex>
    </Box>
  );
};
export default SignatureGenerator;
