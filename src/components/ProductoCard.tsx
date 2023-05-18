import { Image, chakra, Flex, Box, Link, Text } from "@chakra-ui/react";

import React from "react";

import { Producto } from "@/types/Producto";

interface ProductoCardProps {
  prod: Producto;
}

const ProductoCard: React.FC<ProductoCardProps> = ({ prod }) => {
  const { nombre, image, precio } = prod;

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
      </Box>
    </Box>
    
  );
};

export default ProductoCard;
