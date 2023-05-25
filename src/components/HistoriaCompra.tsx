import {
    Box,
    chakra,
    Flex,
    VStack,
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
    BiArrowBack
  } from "react-icons/bi";
    import { useContext } from 'react';
    import { ShopContext } from "@/context/ShopContext";
  
  const HistoriaCompra = () => {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
    const { cartTotal } = useContext(ShopContext);
  
    return (
      <React.Fragment>
            <Flex  justifyContent="center" mx="auto">
                <Link href={"/main"}> {/*Back arrow button*/}
                    <IconButton
                        aria-label="goBack"
                        padding={"2px"}
                        icon={<BiArrowBack color="#208220" size={30} />}
                        paddingRight={"20px"}
                        position={"fixed"}
                        left={"25px"}
                        marginTop={"15px"}
                        variant="ghost" />
                </Link>          
            </Flex>
            <Text
                textAlign={"center"}
                fontWeight={"semibold"}
                marginTop={"25px"}
                fontSize={"25px"}> Historia de compra
            </Text>
            <Box
                alignItems="center"
                display="flex"
                justifyContent={"center"}>
                <VStack
                    justifyContent={"center"}
                    display= "flex"
                    alignItems="left"
                    marginTop={"125px"}
                    justifyItems={"center"}
                    >
                        <Text
                            textAlign={"left"}
                            fontSize={"18px"} // despues de subtotal poner atributo con las cantidades
                            fontWeight={"600"}
                        > Subtotal: ${cartTotal}</Text>
                        
                        <Text
                            textAlign={"left"}
                            fontSize={"18px"} // despues de descuento poner atributo con las cantidades
                            fontWeight={"600"}
                        > Descuento: -$</Text> <br></br>
                        <hr
                            style={{
                                background: 'black',
                                color: 'black',
                                height: '1px',
                                width: '130%',
                                marginLeft: '-20px',
                            }}
                        /> <br></br>
                        <Text
                            textAlign={"left"}
                            fontSize={"18px"} // despues de subtotal poner atributo con las cantidades
                            color={"red"}
                            fontWeight={"600"}
                        > Total:        $</Text> 
                        <Text
                            textAlign={"left"}
                            fontSize={"18px"} // despues de descuento poner atributo con las cantidades
                            fontWeight={"600"}
                        > Puntos:        1</Text>  
                </VStack>
            </Box>
            <Box
                marginTop={"200px"}
                alignItems="center"
                display="flex"
                justifyContent={"center"}>
                <Text>PONER CODIGO QR AQUI</Text>
            </Box>               
      </React.Fragment>
    );
  };
  
  export default HistoriaCompra;
  