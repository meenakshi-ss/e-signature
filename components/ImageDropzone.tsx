import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Dropzone from "react-dropzone";

const ImageDropzone = () => {
  return (
    <Dropzone>
      {({ getRootProps, getInputProps }) => (
        <Flex
          {...getRootProps()}
          background="white"
          height={200}
          borderRadius={12}
          marginTop={4}
          alignItems="center"
          justify="center"
          border={'1px dashed #E2E6EB'}
        >
          <input {...getInputProps()} />
          <Text color="gray" fontSize="small">Feature under development</Text>
        </Flex>
      )}
    </Dropzone>
  );
};

export default ImageDropzone;
