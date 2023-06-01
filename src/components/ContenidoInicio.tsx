import Carrusel from "./Carrusel";
import { useEffect, useState } from "react";
import ProductoCard from "@/components/ProductoCard";
import { getProductos } from "@/service/ServicioProductos";
import { Producto } from "@/types/Producto";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const ContenidoInicio = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const prod = await getProductos();
      setProductos(prod);
    };

    fetchProductos();
  }, []);

  return (
    <>
      <Box justifyContent={"center"} alignItems={"center"} >
        <Box padding={"15px"} alignItems={"center"} paddingBottom={"7"}>
          <Carrusel />
        </Box>
        <Box backgroundColor={"#F8F7F1"} borderRadius={"2rem"}  >
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Heading paddingTop={"20px"} size={"lg"}>
              Recomendados
            </Heading>
          </Flex>

          <Box margin={"15px"}>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4 content-start ">
              {productos.map((prod) => (
                <ProductoCard key={prod.idProduct} prod={prod} />
              ))}
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContenidoInicio;
