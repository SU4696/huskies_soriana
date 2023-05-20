import { Image, chakra, Flex, Box, Link, Text, Button } from "@chakra-ui/react";
import { ShopContext } from "../context/ShopContext"
import { SearchIcon, AddIcon } from "@chakra-ui/icons";
import React, { useContext } from "react";
import Main from "@/pages/mapa";

import { Producto } from "@/types/Producto";

interface ProductoCardProps {
  prod: Producto;
}

const ProductoCard: React.FC<ProductoCardProps> = ({prod}) => {
  const {idProductos, nombre, image, precio, categoria } = prod;
  
  const { addToCart, cartItems } = useContext(ShopContext); 

  const cartItemAmount = cartItems[idProductos];
  return (
    <Box >
       <Box backgroundColor={"white"} borderWidth={"medium"} borderColor={"#D6D8B1"} padding={3}>
      <Image className="p-1" src={image} alt={nombre} />
      
      <Box height={"45px"} paddingX={"3"} paddingBottom={"4"}  >
        <a href="#">
          <Text textAlign={"left"}fontWeight={"semibold"}  >
            {nombre}
            </Text>
        </a>
      </Box>
      <Text paddingX={"3"}paddingBottom={"4"} fontWeight={"bold"} textAlign={"left"}  position={"relative"} bottom={"0"}>${precio}</Text>
      {/* <Button leftIcon={<SearchIcon/>} onClick={<Main Categoria={categoria}></Main>}></Button> */}
      <Button leftIcon={<AddIcon/>} onClick={() => addToCart(idProductos, (precio * cartItemAmount))}>Agregar a carrito {cartItemAmount > 0 && <>({cartItemAmount})</>}</Button>
      </Box>
    </Box>
    
  );
};

export default ProductoCard;
