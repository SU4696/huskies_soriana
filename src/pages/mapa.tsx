import { useEffect, useState } from 'react';
import Topbar from '@/components/TopbarPromo';
import { DocumentData, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Image } from '@chakra-ui/react';
import Mapita from '@/components/Mapas';

function Main(Categoria : string) {

  const cat = Categoria;

  return (
    <>
      <Topbar titulo={"Mapa"} />
      <Mapita categoria={Categoria} />
    </>
  )
}

export default Main