import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function footer() {
  return (
    <Box backgroundColor={"transparent"}  flexDirection={"column"} bottom={"0px"}>
      <Box
        flexWrap="wrap"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src={"/assets/huskies.png"}
          alt="introimg1"
          width={"80px"}
          height={"80px"}
        />
        <Text textAlign="center" fontSize="medium">
          Copy right by Huskies
        </Text>
      </Box>
    </Box>
  );
}

export default footer;
