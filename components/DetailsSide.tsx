import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ImageDropzone from "./ImageDropzone";

interface DetailsSideProps {
    enableContactUs: boolean;
    setEnableContactUs: (value: boolean) => void;
    contactContent: string;
    setContactContent: (value: string) => void;
    userName: string;
    setUserName: (value: string) => void;
    jobTitle: string;
    setJobTitle: (value: string) => void;
    phoneNumber: string;
    setPhoneNumber: (value: string) => void;
  }


  const DetailsSide: React.FC<DetailsSideProps>  = ({
  enableContactUs,
  setEnableContactUs,
  contactContent,
  setContactContent,
  userName,
  setUserName,
  jobTitle,
  setJobTitle,
  phoneNumber,
  setPhoneNumber,
}) => {
  return (
    <Box padding="32px">
      <Box
        borderBottom="1px solid #E2E6EB"
        paddingBottom={2}
        cursor={"not-allowed"}
        pointerEvents={"none"}
        opacity={0.5}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Flex gap="2px">
            <Text>Profile Picture</Text>
            <Text color="red">*</Text>
          </Flex>
          <Switch />
        </Flex>
        <ImageDropzone />
        <Flex alignItems="center" justifyContent="end">
          <Button size="xs" variant="ghost">
            Clear all
          </Button>
        </Flex>
      </Box>
      <VStack marginTop={4} gap={4}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Bruce Wayne"
            borderColor={"#E7E7E7"}
            background="white"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Job Title</FormLabel>
          <Input
            placeholder="Batman"
            borderColor={"#E7E7E7"}
            background="white"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Enter Phone</FormLabel>
          <Input
            placeholder="+919876543210"
            borderColor={"#E7E7E7"}
            background="white"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormControl>
      </VStack>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        marginTop={4}
        borderTop="1px solid #E2E6EB"
        paddingTop={4}
      >
        <Flex gap="2px">
          <Text>Contact us Button</Text>
          <Text color="red">*</Text>
        </Flex>
        <Switch onChange={() => setEnableContactUs(!enableContactUs)} />
      </Flex>
      {enableContactUs && (
        <Input
          borderColor={"#E7E7E7"}
          background="white"
          value={contactContent}
          onChange={(e) => setContactContent(e.target.value)}
          marginTop={4}
        />
      )}
    </Box>
  );
};

export default DetailsSide;
