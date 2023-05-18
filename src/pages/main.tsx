import React from 'react'
import Navbar from "@/components/Navbar";
import ContenidoInicio from '@/components/ContenidoInicio';
import CamComponents from "@/components/CamComponents";
import { useAuth } from '@/context/AuthContext';


function main() {

  const { user } = useAuth();
  console.log(user);
  return (
    <React.Fragment>
        <Navbar  />
        <CamComponents  />
        <ContenidoInicio/>
    </React.Fragment>
  )
}

export default main