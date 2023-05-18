import {
  chakra,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Link,
  VisuallyHidden,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { BiArrowBack } from "react-icons/bi";

const Topbar = ({ titulo }: { titulo: string }) => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
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
               icon={<BiArrowBack color="#208220" size={30} />}
              backgroundColor={"transparent"}
             
             />
           </Link>
      <chakra.header
        borderBottomRadius={"2rem"}
        top={"0"}
        position={"fixed"}
        zIndex={"998"}
        bg={"#F2EFE1"}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
       
      >
        <Flex alignItems="center" justifyContent={"center"} mx="auto">
          <HStack >
            
          
            <Text
              color={"#208220"}
              fontSize={"20px"}
              fontWeight={"bold"}
            >
              {tagTitle}
            </Text>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Topbar;
