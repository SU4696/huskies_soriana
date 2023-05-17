import {
  Box,
  chakra,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import {

  AiOutlineShoppingCart,

} from "react-icons/ai";
import {
  BiArrowBack
} from "react-icons/bi";



const Topbar = ({titulo}: {titulo: string}) => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const tagTitle = titulo;

  return (
    <React.Fragment>
      <chakra.header
        borderBottomRadius={"2rem"}
        bg={"#208220"}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={0.1}
        shadow="md"
        marginBottom={"15px"}
      >
        <Flex  justifyContent="center" mx="auto">
        <Link href={"/main"}>
               {/*Back arrow button*/}
               <IconButton
                aria-label="Back"
                size={"lg"}
                color="#ffffff"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<BiArrowBack />}
              />
            </Link>

          {/* "Todos" text, for next sprint we should bring the category name from database*/ }
          
          <Text  >{tagTitle}</Text>          
         

          
        </Flex>

        <HStack
          justifyContent={"center"}
          margin={"13px"}
          display={mobileNav.isOpen ? "none" : "flex"}
          alignItems="center"
        >

        </HStack>
      </chakra.header>
    </React.Fragment>
  );
};

export default Topbar;
