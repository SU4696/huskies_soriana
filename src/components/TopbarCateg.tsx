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
  Heading
} from "@chakra-ui/react";
import React from "react";
import {
  FiShoppingCart,
} from "react-icons/fi";
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
                aria-label="goBack"
            
                padding={"2px"}
                icon={<BiArrowBack color="white" size={30} />}
                paddingRight={"20px"}
                position={"fixed"}
                left={"25px"}
                marginTop={"15px"}
                variant="ghost"
              />
            </Link>
         
          {/* "Todos" text, for next sprint we should bring the category name from database*/ }
          
          <Text  
            marginTop={"20px"}
            color={"white"}
            fontSize={"20px"}
            fontWeight={"bold"}
          >
            
            
            {tagTitle}</Text>          
         

            <Link href={"/carrito"}>
               {/*Cart button*/}
               <IconButton
                aria-label="cart"
            
                padding={"2px"}
                icon={<FiShoppingCart color="white" size={30} />}
                paddingRight={"20px"}
                position={"fixed"}
                right={"25px"}
                marginTop={"15px"}
                variant="ghost"
              />
            </Link>
          
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
