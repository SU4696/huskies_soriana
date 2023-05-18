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
  AiOutlineMenu,
  AiOutlineInbox,
  AiOutlineSearch,
  AiOutlineShop
} from "react-icons/ai";

import {
  BiLogOutCircle
} from "react-icons/bi";
import {
  FiShoppingCart,
  FiGift
} from "react-icons/fi";
import {
  CgProfile
} from "react-icons/cg";

import { BsFillCameraVideoFill } from "react-icons/bs";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { user, logOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <React.Fragment>
      <chakra.header
        borderBottomRadius={"2rem"}
        bg={"#F2EFE1"}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
        marginBottom={"15px"}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Link href={"/main"}>
              {/* Soriana Logo */}
              <Avatar
                size="md"
                name="Soriana Logo"
                src="/assets/sorianaLogo2.png"
                backgroundColor={"white"}
                padding={1}
              />
            </Link>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
              color="#208220"
            >
              {/* Template to open the menu when you click the icon */}
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={1}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
               {/* "Todos" button that takes to its page to see all the products */}
                <Link href={"/categTodos"}>
                  <IconButton
                    aria-label="Go to cart"
                    fontSize="25px"
                    color="#208220"
                    _dark={{
                      color: "inherit",
                    }}
                    variant="ghost"
                    icon={<AiOutlineShop />}
                  /> Todos
                </Link>
                <Button
                  w="full"
                  variant="solid"
                  colorScheme="brand"
                  leftIcon={<AiOutlineInbox />}
                >
                  Inbox
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<BsFillCameraVideoFill />}
                >
                  Videos
                </Button>
              </VStack>
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
          <HStack
            spacing={1}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            {/* Link to perfil */}
            <Link href={"/editarPerfil"}>
              <IconButton
                aria-label="Go to Perfil"
                fontSize="25px"
                color="#208220"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<CgProfile />}
              />
            </Link>
            {/* Link to promociones */}
            <Link href={"/promociones"}>
              <IconButton
                aria-label="Go to promociones"
                fontSize="25px"
                color="#208220"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<FiGift />}
              />
            </Link>
            {/* Link to Cart */}
            <Link href={"/carrito"}>
              <IconButton
                aria-label="Go to cart"
                fontSize="25px"
                color="#208220"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<FiShoppingCart />}
              />
            </Link>
             {/* Link to logout */}
             
              <IconButton
                aria-label="Go to Perfil"
                fontSize="25px"
                color="#208220"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                onClick={handleLogout}
                icon={<BiLogOutCircle />}
              />
            {/* open menu when you click */}
            <IconButton
              aria-label="Open menu"
              fontSize="20px"
              color="#208220"
              _dark={{
                color: "inherit",
              }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </HStack>
        </Flex>

        <HStack
          justifyContent={"center"}
          margin={"20px"}
          display={mobileNav.isOpen ? "none" : "flex"}
          alignItems="center"
        >
          {/* Searching Bar */}
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch color="#208220" />
            </InputLeftElement>
            <Input
              borderColor={"#208220"}
              backgroundColor={"white"}
              type="tel"
              placeholder="Buscar..."
            />
          </InputGroup>

          {/* Camera Button 
           <IconButton
            style={{
              position: "absolute",
              top: "70%",
            }}
            aria-label="Camera"
            justifyItems={"center"}
            variant="outline"
            size={"lg"}
            borderColor={"lightgray"}
            borderWidth={"medium"}
            borderRadius={"3rem"}
            backgroundColor={"#208220"}
            icon={<AiFillCamera color="white" size={30} />}
          
            /> 
           */} 
        </HStack>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;
