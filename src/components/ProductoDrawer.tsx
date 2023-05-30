import React, { useEffect, useState, useContext } from "react";
import { Producto } from "@/types/Producto";
import { ShopContext } from "@/context/ShopContext";
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
 import Mapita from "./Mapas";
 import { ViewIcon } from "@chakra-ui/icons";

interface ProductoDrawerProps {
    prod: Producto;
}

const ProductoDrawer: React.FC<ProductoDrawerProps> = ({prod}, {dcto}) => {

    const { idProductos, nombre, image, precio, categoria, idProduct } = prod;
    const {  addToCartQ, cartItems } = useContext(ShopContext);

    const [counter, setCounter] = useState(1);
    const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [descuento, setDescuento] = useState(dcto);

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

    return(
        <>
            <Button onClick={onOpen} leftIcon={<ViewIcon/>}>
            </Button>
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
                <Text>${precio*(1-descuento)}</Text>
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
        </>
    )
}

export default ProductoDrawer;