import React from "react";
import HistorialCompra from "@/components/HistorialCompra";
import {
  Flex,
  Text, 
  Link,
  IconButton,
} from "@chakra-ui/react";
import {
  BiArrowBack
} from "react-icons/bi";

function historiaCompra() {
  return (
    <React.Fragment>
      <Flex  justifyContent="center" mx="auto">
          <Link href={"/main"}> {/*Back arrow button*/}
              <IconButton
                  aria-label="goBack"
                  padding={"2px"}
                  icon={<BiArrowBack color="#208220" size={30} />}
                  paddingRight={"20px"}
                  position={"fixed"}
                  left={"25px"}
                  marginTop={"15px"}
                  variant="ghost" />
          </Link>          
      </Flex>
      <Text
          textAlign={"center"}
          fontWeight={"semibold"}
          marginTop={"25px"}
          fontSize={"25px"}> Historia de compra
      </Text> 
      <HistorialCompra email={"raon.park@gmail.com"} />
      
    </React.Fragment>    
  )
}

export default historiaCompra