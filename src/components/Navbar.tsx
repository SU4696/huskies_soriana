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
  AiOutlineSearch,
  AiOutlineGift,
  AiOutlineShoppingCart,
  AiFillCamera,
} from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsFillCameraVideoFill } from "react-icons/bs";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
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
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Test
                </Button>
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
            <Link href={"/perfil"}>
              <IconButton
                aria-label="Go to Perfil"
                fontSize="25px"
                color="#208220"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<HiOutlineUserCircle />}
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
                icon={<AiOutlineGift />}
              />
            </Link>
            {/* Link to Cart */}
            <Link href={"/cart"}>
              <IconButton
                aria-label="Go to cart"
                fontSize="25px"
                color="#208220"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineShoppingCart />}
              />
            </Link>
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
              placeholder="Search..."
            />
          </InputGroup>

          {/* Camera Button */}
          <IconButton
            style={{
              position: "absolute",
              top: "35%",
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
        </HStack>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;
