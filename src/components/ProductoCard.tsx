import {
  Image,
  Box,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  CloseButton,
  GridItem,
  Grid,
  PopoverCloseButton,
  useDisclosure,
  IconButton,
  PopoverArrow,
  SimpleGrid,
} from "@chakra-ui/react";
import { ShopContext } from "../context/ShopContext";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import Main from "@/pages/mapa";

import { Producto } from "@/types/Producto";

interface ProductoCardProps {
  prod: Producto;
}

const ProductoCard: React.FC<ProductoCardProps> = ({ prod }) => {
  const { idProductos, nombre, image, precio } = prod;
  const { removeFromCart, addToCartQ,addToCart, cartItems } = useContext(ShopContext);
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (!isOpen) {
      setCounter(1);
    }
  }, [isOpen]);

   //increase counter
   const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 


  const cartItemAmount = cartItems[idProductos];
  return (
    <Popover
    returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={true}>
        

      <PopoverTrigger>
          <Box   height={"0px"} width={"0px"} position={"fixed"} left={"0px"} bottom={"0px"} aria-label={""} >

          </Box>
          </PopoverTrigger>
        <Box onClick={onToggle} >
        
          <Box
            backgroundColor={"white"}
            borderWidth={"medium"}
            borderColor={"#D6D8B1"}
            padding={3}
          >
            <Image className="p-1" src={image} alt={nombre} />

            <Box height={"45px"} paddingX={"3"} paddingBottom={"4"}>
              <a href="#">
                <Text textAlign={"left"} fontWeight={"semibold"}>
                  {nombre}
                </Text>
              </a>
            </Box>
            <Text
              paddingX={"3"}
              paddingBottom={"4"}
              fontWeight={"bold"}
              textAlign={"left"}
              position={"relative"}
              bottom={"0"}
            >
              ${precio}
            </Text>
            {/* <Button leftIcon={<SearchIcon/>} onClick={<Main Categoria={categoria}></Main>}></Button> */}
            {/* <Button leftIcon={<AddIcon/>} onClick={() => addToCart(idProductos, (precio * cartItemAmount))}>Agregar a carrito {cartItemAmount > 0 && <>({cartItemAmount})</>}</Button> */}
          </Box>
        </Box>
      
      <PopoverContent
      zIndex={"1000"}
      bottom={"0px"}
      height={"40vh"}
      width={"97vw"}
      // backgroundColor={"#F8F7F1"}
      borderTopRadius={"2rem"}
      boxShadow="dark-lg"
      paddingX={"20px"}
      paddingY={"20px"}
      
    >
      <Box  >
      <PopoverArrow  />
      
    <PopoverCloseButton />
      </Box>
      <SimpleGrid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
      >
        <GridItem
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          rowSpan={4}
          colSpan={2}
        >
          <Image  boxSize='130px'
    objectFit='cover'
src={image} alt={nombre}></Image>
          
        </GridItem>
        <GridItem   marginTop={"15px"} colSpan={3} >
          <Text fontWeight={"bold"} >{nombre}</Text>
        </GridItem>
        <GridItem   colSpan={3} display={"flex"}
          justifyContent={"end"}
          alignItems={"end"} >
          <div className="counter">
            <button
              className="counter-button"
              onClick={decrease}
            >
              {" "}
              -{" "}
            </button>

            <input  
              type="number"
              className="counter-input"
              value={counter}
              readOnly
            />

            <button
              className="counter-button"
              onClick={increase}
            >
              +
            </button>
            <style jsx>{`
              .counter {
                display: flex;
                align-items: center;
              }

              .counter-button {
                background-color: #208220;
                color: #fff;
                border: none;
                padding: 5px 12px;
                font-size: 11px;
                cursor: pointer;
                transition: background-color 0.3s;
              }

              .counter-button:hover {
                background-color: #165c16;
              }

              .counter-input {
                width: 14px;
                text-align: center;
                margin: 0 16px;
                border: none;
                font-size: 12px;
              }
            `}</style>
          </div>
        </GridItem>
        <GridItem
          display={"flex"}
          justifyContent={"end"}
          alignItems={"end"}
          colSpan={3}
          fontWeight={"bold"} 
          
        >
          <Text>${precio}</Text>
        </GridItem>
        
      </SimpleGrid>

      <Box
        marginTop={"3vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"30"}
      >
        <Button  width={"190px"} backgroundColor={"#FC8E51"} color={"white"}>
          Ver ruta
        </Button>
        <Button
          width={"190px"}
          backgroundColor={"#208220"}
          color={"white"}
          onClick={() => addToCartQ(idProductos,counter)}
          
        >
          <Box onClick={onClose}>
          Agregar Carrito
          </Box>
            
        </Button>
      </Box>
    </PopoverContent>
    </Popover>
  );
};

export default ProductoCard;
