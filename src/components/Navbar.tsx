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
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillShop,
} from "react-icons/ai";

import {
  FaBaby,
  FaIceCream,
  FaAppleAlt,
  FaWineGlassAlt,
  FaChair,
  FaEdit
} from "react-icons/fa";

import{
  MdCleaningServices,
  MdOutlineSmartToy,
  MdElectricBolt
} from "react-icons/md";

import {
  FiShoppingCart,
  FiGift,
  FiLogOut
} from "react-icons/fi";

import {
  BsFillGridFill,
  BsBagCheckFill
} from "react-icons/bs";

import {
  GiMedicines
} from "react-icons/gi";

import {
  CgProfile
} from "react-icons/cg";

import { BsFillCameraVideoFill } from "react-icons/bs";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";


const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const perfilNav = useDisclosure();
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
      zIndex={"9999"}
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
            <Box
              display={{
                base: "inline-flex",
                
              }}
              color="# F2EFE1"
            >
              
              <VStack
                 position={"fixed"}
                 top={"0px"}
                 right={"0px"}
                 height={"100%"}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                alignItems={"left"}
                width={"338px"}
                zIndex={"100000"}
                p={6}
                pb={9}
                m={0}
                bg={bg}
                spacing={6}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
               
               <Link href={"/categTodos"}>
                  
                  <IconButton
                    aria-label="Go to cart"
                    fontSize="25px"
                    color="#208220 "
                    _dark={{
                      color: "inherit",
                    }}
                    variant="ghost"
                    icon={<BsFillGridFill />}
                  /> Todos
                </Link>

                <Link href={"/"}>
                  
                  <IconButton
                    aria-label="Go to cart"
                    fontSize="25px"
                    color="#208220 "
                    _dark={{
                      color: "inherit",
                    }}
                    variant="ghost"
                    icon={<AiFillShop />}
                  /> Abarrotes
                </Link>
                
                <Link href={"/categTodos"}>
                  <IconButton
                    aria-label="Go to cart"
                    fontSize="25px"
                    color="#208220 "
                    _dark={{
                      color: "inherit",
                    }}
                    variant="ghost"
                    icon={<FaBaby />}
                  /> Bebés
                </Link>

                <Link href={"/"}>
                  <IconButton
                    aria-label="Go to cart"
                    fontSize="25px"
                    color="#208220 "
                    _dark={{
                      color: "inherit",
                    }}
                    variant="ghost"
                    icon={<FaIceCream />}
                  /> Congelados
                </Link>

                <Link href={"/"}>
                  <IconButton
                    aria-label="Go to cart"
                    fontSize="25px"
                    color="#208220 "
                    _dark={{
                      color: "inherit",
                    }}
                    variant="ghost"
                    icon={<GiMedicines />}
                  /> Farmacia
                </Link>

                <Link href={"/"}>
                  <IconButton
                    aria-label="Go to cart"
                    fontSize="25px"
                    color="#208220 "
                    _dark={{
                      color: "inherit",
                    }}
                    variant="ghost"
                    icon={<FaAppleAlt />}
                  /> Frutas y verduras
                </Link>

                <Link href={"/"}>
                  <IconButton
                    aria-label="Go to cart"
                    fontSize="25px"
                    color="#208220 "
                    _dark={{
                      color: "inherit",
                    }}
                    variant="ghost"
                    icon={<MdCleaningServices />}
                  /> Limpieza
                </Link>

                <Link href={"/"}>
                  <IconButton
                    aria-label="Go to cart"
                    fontSize="25px"
                    color="#208220 "
                    _dark={{
                      color: "inherit",
                    }}
                    variant="ghost"
                    icon={<MdOutlineSmartToy />}
                  /> Juguetería
                </Link>

                <Link href={"/"}>
                  <IconButton
                    aria-label="Go to cart"
                    fontSize="25px"
                    color="#208220 "
                    _dark={{
                      color: "inherit",
                    }}
                    variant="ghost"
                    icon={<FaWineGlassAlt />}
                  /> VinosLicores
                </Link>

                <Link href={"/"}>
                  <IconButton
                    aria-label="Go to cart"
                    fontSize="25px"
                    color="#208220 "
                    _dark={{
                      color: "inherit",
                    }}
                    variant="ghost"
                    icon={<MdElectricBolt />}
                  /> Electrodomésticos
                </Link>


                <Link href={"/"}>
                  <IconButton
                    aria-label="Go to cart"
                    fontSize="25px"
                    color="#208220 "
                    _dark={{
                      color: "inherit",
                    }}
                    variant="ghost"
                    icon={<FaChair />}
                  /> Muebles
                </Link>

                

              </VStack>
           
           


           
            </Box>
            <Box
              display={{
                base: "inline-flex",
                
              }}
              color="# F2EFE1"
            >
              
              <VStack
                 position={"fixed"}
                 top={"0px"}
                 right={"0px"}
                 height={"100%"}
                display={perfilNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                alignItems={"left"}
                width={"338px"}
                zIndex={"100000"}
                p={6}
                pb={9}
                m={0}
                bg={bg}
                spacing={6}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={perfilNav.onClose}
                />
               
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
                  /> Editar Perfil
                </Link>
                
                <Link href={"/categTodos"}>
                  <IconButton
                    aria-label="Go to cart"
                    fontSize="25px"
                    color="#208220 "
                    _dark={{
                      color: "inherit",
                    }}
                    variant="ghost"
                    icon={<BsBagCheckFill />}
                  /> Historia de compra
                </Link>

              {/* Link to logout */}
              <Link>
              <IconButton
                aria-label="Log out"
                fontSize="25px"
                color="#208220"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                onClick={handleLogout}
                icon={<FiLogOut />}
              /> Cerrar sesión
              </Link>

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
            alignItems="center"
          >
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
              borderColor={"#F2EFE1"}
              backgroundColor={"white"}
              type="tel"
              placeholder="Buscar..."
            />
          </InputGroup>

          
        </HStack>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;
