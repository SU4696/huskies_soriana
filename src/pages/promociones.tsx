import { useEffect, useState } from 'react';
import TopbarPromo from '@/components/TopbarPromo';
import PromosCard from '@/components/PromosCard';
import { DocumentData, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { getPromociones } from '@/service/ServicioPromociones';
import { Promociones } from '@/types/Promociones';

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
      {promociones.map((promo) => (
        <PromosCard key={promo.idPromo} promo={promo} />
      ))}
    </>
  )
}

export default Main