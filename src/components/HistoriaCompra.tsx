import {
    Box,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Image,
    GridItem,
    SimpleGrid,
    Stack,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverCloseButton,
    useDisclosure,
    PopoverArrow,
  } from "@chakra-ui/react";
  import React from "react";

const HistoriaCompra = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const historiaC = useDisclosure();

    return (
        <Drawer
            placement='bottom' 
            isOpen={historiaC.isOpen} 
            onClose={historiaC.onClose}>
        <DrawerOverlay />
        <DrawerContent //padding={"15px"} borderTopRadius={"2rem"} >
          >
          <DrawerBody>
          <SimpleGrid
      >
        <GridItem
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          rowSpan={4}
          colSpan={2}
        >
          
          
        </GridItem>
        <GridItem   marginTop={"15px"} colSpan={3} >
          <Text fontWeight={"bold"} >prueba</Text>
        </GridItem>
        <GridItem   colSpan={3} display={"flex"}
          justifyContent={"end"}
          alignItems={"end"} >
          <div className="counter">
            <button
              className="counter-button"
            >
              {" "}
              -{" "}
            </button>

            <input  
              type="number"
              className="counter-input"
              readOnly
            />

            <button
              className="counter-button"
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
                color: #000000;
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
          <Text>texto</Text>
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
          
        >
          <Box onClick={onClose}>
          Agregar Carrito
          </Box>
            
        </Button>
      </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
};

export default HistoriaCompra;