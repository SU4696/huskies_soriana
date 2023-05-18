import { useEffect, useState } from 'react';
import TopbarPromo from '@/components/TopbarPromo';
import PromosCard from '@/components/PromosCard';
import { DocumentData, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { getPromociones } from '@/service/ServicioPromociones';
import { Promociones } from '@/types/Promociones';
import { Box } from '@chakra-ui/react';

function Main() {
  const [promociones, setPromociones] = useState<Promociones[]>([]);


  useEffect(() => {
    const fetchPromos = async () => {
      const promos = await getPromociones();
      setPromociones(promos);
    }

    fetchPromos();

  }, [])

  return (
    <>
      <TopbarPromo  titulo={"Promociones"} />
      <Box paddingTop={"62px"}>
      {promociones.map((promo) => (
        <PromosCard key={promo.idPromo} promo={promo} />
      ))}
      </Box>
    </>
  )
}

export default Main