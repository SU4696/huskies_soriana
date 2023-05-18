import React from 'react'
import Navbar from "@/components/Navbar";
import ContenidoInicio from '@/components/ContenidoInicio';
import CamComponents from "@/components/CamComponents";
import { useAuth } from '@/context/AuthContext';
import { Box, IconButton, Link } from '@chakra-ui/react';
import { AiFillCamera} from "react-icons/ai";

function main() {

  const { user } = useAuth();
  console.log(user);
  return (
    <React.Fragment>
        <Navbar  />
        <Link href={"/camera"} >
        <IconButton
         zIndex={"999"}
         aria-label="Camera"
         variant="outline"
         size={"lg"}
         borderColor={"lightgray"}
         borderWidth={"medium"}
         borderRadius={"3rem"}
         backgroundColor={"#208220"}
         position={"fixed"}
         bottom={"50px"}
         right={"25px"}
         icon={<AiFillCamera color="white" size={30} />}
         
         /> 
        </Link>
        <Box paddingTop={"165px"}>
        <ContenidoInicio/>
        </Box>
    </React.Fragment>
  )
}

export default main