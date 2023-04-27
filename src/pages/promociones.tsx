import { useEffect, useState } from 'react';
import Topbar from '@/components/Topbar';
import PromosCard from '@/components/PromosCard';
import { DocumentData, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { getPromociones } from '@/service/ServicioPromociones';
import { Promociones } from '@/types/Promociones';

function main() {
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
      <Topbar  titulo={"Promos"} />
      {promociones.map((promo) => (
        <PromosCard key={promo.idPromo} promo={promo} />
      ))}
    </>
  )
}

export default main