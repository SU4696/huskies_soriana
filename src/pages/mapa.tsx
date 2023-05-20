import { useEffect, useState } from 'react';
import Topbar from '@/components/TopbarPromo';
import { DocumentData, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Image } from '@chakra-ui/react';
import Mapita from '@/components/Mapas';

function Main() {


  return (
    <>
      <Topbar titulo={"Mapa"} />
      <Mapita categoria='Bebés' />
    </>
  )
}

export default Main