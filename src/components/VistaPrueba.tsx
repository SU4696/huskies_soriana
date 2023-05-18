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
    AiOutlineShop,
  } from "react-icons/ai";
  import { HiOutlineUserCircle } from "react-icons/hi";
  import { BsFillCameraVideoFill } from "react-icons/bs";
  import { useContext } from "react";
  
  const VistaPrueba = () => {
    const bg = useColorModeValue("transparent", "gray.800");
    const mobileNav = useDisclosure();
  
    return (
      <React.Fragment>
        <Box
            borderTopRadius={"3rem"}
            position="fixed"
            bottom="0"
            left="0"
            right="0"
            flexDirection="column"
            alignItems="flex-end" 
            backgroundColor={"white"}
           >
            <Box
                flexWrap="wrap"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}  
                marginTop={"7px"}    
                
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto" style={{ marginBottom: "37px" }}>
                    <Image
                        objectFit="cover"
                        maxW={{ base: '40%', sm: '200px' }}
                        src={"https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwce34da90/images/product/7501055304745_A.jpg?sw=1000&sh=1000&sm=fit"}
                        alt='Promo image'
                    />
                    <div style={{ textAlign: "left" }}>
                        Coca-cola
                    </div> 
                    <div style={{ textAlign: "right" }}>
                        1
                    </div>
                    
                </Flex>
                
  
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <HStack display="flex" spacing={3} alignItems="center">
                        <Link href={"/mapa"}>
                            <Button
                                color={"#ffffff"}
                                backgroundColor={"#208220"}
                                bottom="7"
                            >
                                Ver ruta
                            </Button>
                        </Link>
                        
                        <Link href={"/promociones"}>
                            <Button
                                color={"#ffffff"}
                                backgroundColor={"#fc8e51"}
                                bottom="7"
                            >
                                Ver más promociones
                            </Button>

                        </Link>
                    </HStack>
                </Flex>
            </Box>
        </Box>
      </React.Fragment>
    );
  };
  
  export default VistaPrueba;
  