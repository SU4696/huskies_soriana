import React, { useEffect, useState, FunctionComponent, useContext } from 'react';
import Topbar from '@/components/TopbarPromo';
import { DocumentData, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Image, Text, Box } from '@chakra-ui/react';
import Mapita from '@/components/Mapas';
import { producto } from '@/components/ProductoCard';
import { MapaContext } from '@/context/MapaContext';

// import { useLocation } from 'react-router-dom';

function Main () {

  // const location = useLocation();
  // const prod = location.state.prod;
  // const currentProd = useContext(MapaContext)

  const { idProductos, nombre, categoria } = useContext(MapaContext);
  // const cat = Categoria;
  // const cat = categoria;

  useEffect(() => {
    console.log(nombre)
    console.log(categoria)
    
  })

  useEffect(() => {
    console.log(nombre)
    console.log(categoria)
    
  }, [])

  return (
    <>
      <Topbar titulo={"Mapa"} />
      {/* <Mapita categoria={Categoria} /> */}
      {/* <Mapita cat={categoria} /> */}
      <Box marginTop={'16'} padding={'8'}>
        {/* <Mapita /> */}
        <Text fontSize={'3xl'}>
          {nombre} se encuentra dentro de la tienda en el departamento '{categoria}'', pasillo {idProductos}.
        </Text>
      </Box>
    </>
  )
}

export default Main