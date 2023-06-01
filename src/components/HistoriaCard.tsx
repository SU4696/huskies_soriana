import {
    Box,
    Text,
    Grid,
    GridItem,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody
  } from "@chakra-ui/react";
  import React, { useContext, useEffect, useState } from "react";
  
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
                      whiteSpace="nowrap" // Agregado para mostrar en una sola línea
                      >
                          Compra con ID:{hist.idHistoria}
                  </GridItem> 
  
                  <GridItem
                      display="flex"
                      justifyContent="flex-end"
                      alignItems="center"
                      height="100%">  
                      
                      <div className="counter">
                          <button
                              className="counter-button" onClick={onOpen}> Ver
                              <Drawer placement='bottom' onClose={onClose} isOpen={isOpen} >
                                  <DrawerOverlay />
                                  <DrawerContent padding={"100px"} borderTopRadius={"2rem"} margin={0} paddingX={"40px"} alignItems={"center"}> 
                                      <DrawerBody
                                          justifyContent={"center"}
                                          alignItems={"center"}
                                          fontWeight={"semibold"}>
                                              <Text>Subtotal: ${hist.subtotal} </Text>  
                                              <Text>Descuento: -${hist.discount}</Text>
                                              <hr
                                                  style={{
                                                      background: 'black',
                                                      color: 'black',
                                                      height: '1px',
                                                      width: '130%',
                                                      marginLeft: '-20px',
                                                  }}
                                              /> <br></br>
                                              <Text>Total: ${hist.total}</Text>  
                                              <Text>Puntos: {(puntos*.10).toFixed(0)}</Text>
                                      </DrawerBody>
                                  </DrawerContent>
                                  </Drawer>
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