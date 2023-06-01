import {
  Box,
  Text,
  Grid,
  GridItem,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
  Divider,
  defineStyleConfig
} from "@chakra-ui/react";
import React from "react";

import {
  BsBagCheckFill
} from "react-icons/bs";

import { Historia } from "@/types/Historias";

interface HistoriaCardProps {
  hist: Historia;
}

export var historia : Historia;

const HistoriaCard: React.FC<HistoriaCardProps> = ({ hist }) => {
  const { idHistoria, correo, discount, subtotal, total } = hist;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const puntos = hist.total ? parseFloat(hist.total) : 0;
  
  return (
    <>
        <Box>        
            <Grid
                templateRows="1fr"
                templateColumns="repeat(2, 4fr 1fr)" 
                gap={1}
                marginTop={"30px"}
                backgroundColor="#f2efe1"
                borderRadius="15px"
                marginRight="20px"
                marginLeft="20px"
                alignItems="center"
                height="80px">
                
                <GridItem
                    display={"flex"}
                    justifyContent={"left"}
                    alignItems={"left"}
                    colSpan={2} // Modificado a colSpan={2} para ocupar las 2 columnas
                    marginLeft={10}
                    fontSize={"18px"}
                    fontWeight={"bold"}
                    whiteSpace="nowrap" // Agregado para mostrar en una sola línea
                    >
                        Compra
                </GridItem> 

                <GridItem
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                    height="100%">  
                    
                    <div className="counter">

                    <Button onClick={onOpen} size="sm" gap={2} marginY={3} textColor="white" backgroundColor={"#208220"}>
                      Ver
                      <BsBagCheckFill
                      display={"flex"}
                      aria-label="erase"
                      fontSize="20px"
                      color="white"
                      />
                  </Button>
                      <Drawer placement='bottom' onClose={onClose} isOpen={isOpen} >
                          <DrawerOverlay />
                          <DrawerContent padding={"62px"} borderTopRadius={"2rem"} margin={0} paddingX={"40px"} alignItems={"center"}> 
                          <DrawerBody>

                          <Text marginBottom={"15px"} textColor={"black"} fontSize="l" fontWeight={"bold"}>Subtotal: ${hist.subtotal} </Text>  
                          <Text marginBottom={"15px"} textColor={"black"} fontSize="l" fontWeight={"bold"}>Descuento: -${hist.discount}</Text>
                                  
                          <Divider marginBottom={"15px"} borderColor="#208220"/>
                          <Text marginBottom={"15px"} textColor={"#E23535"} fontSize="l" fontWeight={"bold"}>Total: ${hist.total}</Text>  
                          <Text textColor={"black"} fontSize="l" fontWeight={"bold"}>Puntos: {(puntos*.10).toFixed(0)}</Text>

                          </DrawerBody>
                      </DrawerContent>
                      </Drawer>
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
                                    font-size: 18px;
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
            </Grid>
        </Box>
     </> 
  );
};

export default HistoriaCard;
