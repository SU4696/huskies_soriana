import React from "react";
import Navbar from "@/components/Navbar";
import CamComponents from "@/components/CamComponents";
import PopUpCarrito from "@/components/PopUpCarrito";
import { Box } from "@chakra-ui/react";

function camera() {
  return (
    <React.Fragment>
        <Navbar  />
        
        <CamComponents  />
        <Box paddingTop={"160px"}>
        
        </Box>
    </React.Fragment>

    
  )
}

export default camera