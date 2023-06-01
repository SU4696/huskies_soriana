import { chakra, Flex, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import React from "react";

import { BiArrowBack } from "react-icons/bi";

const Topbar = ({ titulo }: { titulo: string }) => {
  const tagTitle = titulo;

  return (
    <React.Fragment>
      <Link href={"/main"}>
        <IconButton
          zIndex={"999"}
          position={"fixed"}
          top={"12px"}
          left={"18px"}
          aria-label="goBack"
          size="md"
          name="Soriana Logo"
          icon={<BiArrowBack color="#F2EFE1" size={30} />}
          backgroundColor={"transparent"}
        />
      </Link>
      <chakra.header
        borderBottomRadius={"2rem"}
        top={"0"}
        position={"fixed"}
        zIndex={"998"}
        bg={"#208220"}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent={"center"} mx="auto">
          <HStack>
            <Text color={"#F2EFE1"} fontSize={"20px"} fontWeight={"bold"}>
              {tagTitle}
            </Text>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Topbar;
