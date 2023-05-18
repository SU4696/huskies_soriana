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
    Image,
    Link,
  } from "@chakra-ui/react";
  import React from "react";
  import { useContext } from 'react';
  
import { Producto } from "@/types/Producto";

interface ProductoVistaCard {
    prodV: Producto;
}  

function prueba(){
    console.log("PRUEBA PASAD")
    VistaProducto
}

const VistaProducto:React.FC<ProductoVistaCard> = ({prodV}) => {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();

    const { nombre, image, precio } = prodV;
    
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
            <div className="bg-white">
                <button
                    type="button"
                    className="py-1 px-1 md:py-2 md:px-5 text-sm text-white md:font-medium rounded-lg hover:bg-gray-100"
                    onClick={prueba}>
                    <Image src={image} alt={nombre} />
                    <p className="lg:text-lg text-black mb-50 text-center font-bold ">{nombre}</p>
                    <p className="text-black mb-5 text-center">{precio}</p>
                </button>
            </div>

            
        </chakra.header>
      </React.Fragment>
    );
  };
  
  export default VistaProducto;
  