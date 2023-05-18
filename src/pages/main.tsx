import React from 'react'
import Navbar from "@/components/Navbar";
import ContenidoInicio from '@/components/ContenidoInicio';
import CamComponents from "@/components/CamComponents";


function main() {
  return (
    <React.Fragment>
        <Navbar  />
        <CamComponents  />
        <ContenidoInicio/>
    </React.Fragment>
  )
}

export default main