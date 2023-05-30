import { useEffect, useState } from 'react';
import PromosCard from '@/components/PromosCard';
import { getPromociones } from '@/service/ServicioPromociones';
import { Promociones } from '@/types/Promociones';
import { Box } from '@chakra-ui/react';
import TopbarCateg from '@/components/TopbarCateg';

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
      <TopbarCateg  titulo={"Promociones"} />
      <Box paddingTop={"67px"}>
      {promociones.map((promo) => (
        <PromosCard key={promo.idProductos} promo={promo} />
      ))}
      </Box>
    </>
  )
}

export default Main