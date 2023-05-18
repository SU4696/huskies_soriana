import { useEffect, useState } from 'react';
import Topbar from '@/components/TopbarCateg';
import { DocumentData, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Image } from '@chakra-ui/react';
// Import Image
import Mapa1 from "src/img/mapas/mapa_abarrotes.png";

function Main() {

  return (
    <>
      <Topbar  titulo={"Mapa"} />
      <Image src={Mapa1.src} alt='Mapa producto'></Image>
    </>
  )
}

export default Main