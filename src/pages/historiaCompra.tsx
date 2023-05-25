import React from "react";
import HistorialCompra from "@/components/HistoriaCompra";
import TopBarHC from "@/components/TopBarHC";

function historiaCompra() {
  return (
    <React.Fragment>
      <TopBarHC />
        <HistorialCompra />  
      
    </React.Fragment>    
  )
}

export default historiaCompra