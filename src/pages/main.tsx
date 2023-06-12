import React from "react";
import Navbar from "@/components/Navbar";
import ContenidoInicio from "@/components/ContenidoInicio";
import { useAuth } from "@/context/AuthContext";
import { Box, IconButton, Link } from "@chakra-ui/react";

function main() {
  const { user } = useAuth();
  console.log(user);
  
  return (
    <React.Fragment>
   
        <Navbar />

        <Box paddingTop={"165px"}>
          <ContenidoInicio />
        </Box>
   
    </React.Fragment>
  );
}

export default main;
