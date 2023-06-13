import {
  Box,
  chakra,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  InputGroup,
  InputLeftElement,
  Avatar,
  Input,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Stack,

} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMenu, AiOutlineSearch, AiFillShop } from "react-icons/ai";
import Link from "next/link";
import {
  FaBaby,
  FaIceCream,
  FaAppleAlt,
  FaWineGlassAlt,
  FaChair,
  FaEdit,
} from "react-icons/fa";

import {
  MdCleaningServices,
  MdOutlineSmartToy,
  MdElectricBolt,
} from "react-icons/md";

import { FiShoppingCart, FiGift, FiLogOut } from "react-icons/fi";

import { BsBagCheckFill } from "react-icons/bs";

import { GiMedicines } from "react-icons/gi";

import { CgProfile } from "react-icons/cg";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Navbar = () => {
  const perfilNav = useDisclosure();
  const { logOut } = useAuth();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const historiaC = useDisclosure();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <chakra.header
        zIndex={"999"}
        borderBottomRadius={"2rem"}
        bg={"#208220"}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
        position={"fixed"}
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
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Categorias</DrawerHeader>

                <DrawerBody>
                  <Stack spacing="24px">
                    <Box>
                      <Link href={"/categorias/Abarrotes"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<AiFillShop />}
                        />{" "}
                        Abarrotes
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/categorias/Bebés"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<FaBaby />}
                        />{" "}
                        Bebés
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/categorias/Congelados"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<FaIceCream />}
                        />{" "}
                        Congelados
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/categorias/Farmacia"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<GiMedicines />}
                        />{" "}
                        Farmacia
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/categorias/Frutas y verduras"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<FaAppleAlt />}
                        />{" "}
                        Frutas y verduras
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/categorias/Limpieza"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<MdCleaningServices />}
                        />{" "}
                        Hogar
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/categorias/Jugueteria"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<MdOutlineSmartToy />}
                        />{" "}
                        Juguetería
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/categorias/VinosLicores"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<FaWineGlassAlt />}
                        />{" "}
                        Vinos y licores
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/categorias/Electrodomésticos"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<MdElectricBolt />}
                        />{" "}
                        Electrodomésticos
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/categorias/Muebles"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<FaChair />}
                        />{" "}
                        Muebles
                      </Link>
                    </Box>
                  </Stack>
                </DrawerBody>

                <DrawerFooter>
                  <Footer />
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer
              isOpen={perfilNav.isOpen}
              placement="right"
              onClose={perfilNav.onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Perfil</DrawerHeader>

                <DrawerBody>
                  <Stack spacing="24px">
                    <Box>
                      <Link href={"/editarPerfil"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<FaEdit />}
                        />{" "}
                        Editar Perfil
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/historiaCompra"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<BsBagCheckFill />}
                          onClick={historiaC.onOpen}
                        />{" "}
                        Historia de compra
                      </Link>
                    </Box>
                    <Box onClick={handleLogout}>
                      {/* Link to logout */}
                      <IconButton
                        aria-label="Log out"
                        fontSize="25px"
                        color="#208220"
                        _dark={{
                          color: "inherit",
                        }}
                        variant="ghost"
                        icon={<FiLogOut />}
                      />{" "}
                      Cerrar sesión
                    </Box>
                  </Stack>
                </DrawerBody>

                <DrawerFooter>
                  <Footer />
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
          </HStack>
          <HStack spacing={1} alignItems="center">
            {/* Link to perfil */}

            <IconButton
              aria-label="Go to Perfil"
              fontSize="25px"
              color="#F2EFE1"
              _dark={{
                color: "inherit",
              }}
              variant="ghost"
              onClick={perfilNav.onOpen}
              icon={<CgProfile />}
            />

            {/* Link to promociones */}
            <Link href={"/promociones"}>
              <IconButton
                aria-label="Go to promociones"
                fontSize="25px"
                color="#F2EFE1"
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
                color="#F2EFE1"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<FiShoppingCart />}
              />
            </Link>
            {/* open menu when you click */}

            <IconButton
              aria-label="Open menu"
              fontSize="20px"
              color="#F2EFE1"
              _dark={{
                color: "inherit",
              }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={onOpen}
              // onClick={mobileNav.onOpen}
            />
          </HStack>
        </Flex>

       
      </chakra.header>
    </>
  );
};

export default Navbar;
