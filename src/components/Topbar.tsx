import {
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
  VisuallyHidden,
  InputGroup,
  InputLeftElement,
  Avatar,
  Input,
  Link,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillHome,
  AiOutlineMenu,
  AiOutlineInbox,
  AiFillBell,
  AiOutlineGift,
  AiOutlineShoppingCart,
  AiOutlineArrowLeft,
  AiFillCamera,
} from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsFillCameraVideoFill } from "react-icons/bs";

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
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Link href={"/main"}>
               {/*Back arrow button*/}
               <IconButton
                aria-label="Back"
                fontSize="25px"
                color="#ffffff"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineArrowLeft />}
              />
            </Link>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
              color="#208220"
            >
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
          </HStack>

          {/* "Todos" text, for next sprint we should bring the category name from database*/ }
          <HStack>
            <p className="lg:text-lg text-white mt-5 mb-5 text-center font-bold ">{tagTitle}</p>            
          </HStack>

          <HStack
            spacing={1}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            {/* Link to Cart */}
            <Link href={"/carrito"}>
              <IconButton
                aria-label="Go to cart"
                fontSize="25px"
                color="#ffffff"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineShoppingCart />}
              />
            </Link>
            
          </HStack>
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
