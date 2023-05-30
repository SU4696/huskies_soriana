import {
  Image,
  Box,
  Text,
  Button,
  GridItem,
  useDisclosure,
  SimpleGrid,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter
} from "@chakra-ui/react";
import { ShopContext } from "../context/ShopContext";
import React, { useContext, useEffect, useState } from "react";

import { Producto } from "@/types/Producto";
import Mapita from "./Mapas";
interface ProductoCardProps {
  prod: Producto;
}

export var producto : Producto;

const ProductoCard: React.FC<ProductoCardProps> = ({ prod }) => {
  const { idProductos, nombre, image, precio, categoria } = prod;
  const {  addToCartQ } = useContext(ShopContext);

  const [counter, setCounter] = useState(1);
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure()
  const { isOpen, onOpen, onClose } = useDisclosure()
  // var modal = false;

  // const { isOpen, onOpenM, onCloseM } = useDisclosure()

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
    if(counter > 1) {
      setCounter(count => count - 1);
    }
  };

  // const history = useHistory();
 
  // function handleMap(){
  //   console.log("va");
  //   history.push({
  //     pathname: '/mapa',
  //     state: {prod}
  //   })
  //   console.log("?");
  // }

  // const handleClick = (isModal : boolean) => {
  //   modal = isModal
  //   onClose()
  //   onOpen()
  // }

  // const navigate = useNavigate();

  // const [currentProd, setCurrentProd] = useState<IMapaContext>({
  //   categoria: categoria, 
  //   nombre: nombre, 
  //   idProductos: idProductos
  // });

  // useEffect(() => {
  //   console.log(currentProd)
  //   console.log("curr")
  // });

  // const {categoria, nombre, idProductos} = useContext(MapaContext);

  return (
    <>
      {/* <MapaContext.Provider value={currentProd}> */}
      
        <Box onClick={onOpen} >
        
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
        <Drawer placement='bottom' onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent padding={"15px"} borderTopRadius={"2rem"} >
          
          <DrawerBody>
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
        {/* <Link href="/mapa"> */}
        <Button onClick={onModalOpen} width={"190px"} backgroundColor={"#FC8E51"} color={"white"}>
          Ver ruta
        </Button>
        {/* </Link> */}
        
        <Modal onClose={onModalClose} isOpen={isModalOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Ubicación {nombre}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Mapita categoria={categoria} />
              <Text fontSize={'2xl'} marginTop={'1.5'}>
                {nombre} se encuentra dentro de la tienda en el departamento {categoria}, pasillo {idProductos}.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onModalClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* </MapaContext.Provider> */}
      {/* </MapaContextProvider> */}
     </> 
  );
};

export default ProductoCard;
