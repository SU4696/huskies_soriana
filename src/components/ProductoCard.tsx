import { Image, chakra, Flex, Box, Link, Text, Button } from "@chakra-ui/react";
import { ShopContext } from "../context/ShopContext"

import React, { useContext } from "react";

import { Producto } from "@/types/Producto";

interface ProductoCardProps {
  prod: Producto;
}

const ProductoCard: React.FC<ProductoCardProps> = ({prod}) => {
  const {idProductos, nombre, image, precio } = prod;
  
  const { addToCart, cartItems } = useContext(ShopContext); 

  const cartItemAmount = cartItems[idProductos];
  return (
    <Box >
       <Box backgroundColor={"white"} borderWidth={"medium"} borderColor={"#D6D8B1"} >
      <Image className="p-1" src={image} alt={nombre} />
      
      <Box height={"45px"} paddingX={"3"} paddingBottom={"4"}  >
        <a href="#">
          <Text textAlign={"left"}fontWeight={"semibold"}  >
            {nombre}
            </Text>
        </a>
      </Box>
      <Text paddingX={"3"}paddingBottom={"4"} fontWeight={"bold"} textAlign={"left"}  position={"relative"} bottom={"0"}>${precio}</Text>
      <button>Ver ruta</button>
      <button onClick={() => addToCart(idProductos, (precio * cartItemAmount))}>Agregar a carrito {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
      </Box>
    </Box>
    
  );
};

export default ProductoCard;
