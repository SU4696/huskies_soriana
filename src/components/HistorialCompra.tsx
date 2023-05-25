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
  import Navbar from "./Navbar";

const HistorialCompra = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const historiaC = useDisclosure();

    return (
        <React.Fragment> 
            <Box
            backgroundColor={"black"}
            borderWidth={"medium"}
            borderColor={"#D6D8B1"}
            padding={3}
          >
            

            <Box height={"45px"} paddingX={"3"} paddingBottom={"4"}>
              <a href="#">
                <Text textAlign={"left"} fontWeight={"semibold"}>
                  prueba
                </Text>
              </a>
            </Box>
            </Box>
        </React.Fragment>
    );
};

export default HistorialCompra;