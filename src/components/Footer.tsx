import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
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
          width={"20px"}
          height={"20px"}
        />
        <Text textAlign="center" fontSize="small">
          Copy right by Huskies
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
