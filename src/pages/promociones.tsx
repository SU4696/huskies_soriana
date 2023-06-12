import { useEffect, useState } from "react";
import PromosCard from "@/components/PromosCard";
import { getPromociones } from "@/service/ServicioPromociones";
import { Promociones } from "@/types/Promociones";
import { Box } from "@chakra-ui/react";
import TopbarCateg from "@/components/TopbarCateg";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";

function Main() {
  const { user } = useAuth();
  console.log(user);
  const [promociones, setPromociones] = useState<Promociones[]>([]);

  // useEffect(() => {
  //   const fetchPromos = async () => {
  //     // const promos = await getPromociones();

  //     setPromociones(promos);
  //   }

  //   fetchPromos();

  // }, [])

  useEffect(() => {
    fetch("https://huskies.suyeoncho.repl.co/huskies/promociones")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPromociones(data);
      });
  });

  return (
    <>
      <ProtectedRoute>
        <TopbarCateg titulo={"Promociones"} />
        <Box paddingTop={"62px"}>
          {promociones.map((promo) => (
            <PromosCard key={promo.idProductos} promo={promo} />
          ))}
        </Box>
      </ProtectedRoute>
    </>
  );
}

export default Main;
