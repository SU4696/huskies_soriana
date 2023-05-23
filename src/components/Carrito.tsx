import CamComponents from "@/components/CamComponents";
import ListaCarrito from "@/components/ListaCarrito";
import { Box, Button } from "@chakra-ui/react";
import React, { useContext, useState, useEffect } from "react";
import { Producto } from "@/types/Producto";
import { getProductos } from "@/service/ServicioProductos";
import { ShopContext } from "@/context/ShopContext";

function Carrito() {
  const { cartItems, totalItems } = useContext(ShopContext);

  const [products, setProducts] = useState<Producto[]>([]);

  var total = 0;

  useEffect(() => {
    const fetchProductos = async () => {
      const fetchProducts = await getProductos();
      setProducts(fetchProducts);
    };

    fetchProductos();
  }, []);

  return (
    <>
      <CamComponents />
      <Box display={"flex"} justifyContent={"center"}>
        <div className="flex  flex-col max-w-3xl p-6 space-y-4 sm:p-10 ">
          <ul className="flex flex-col divide-y divide-gray-700">
            {products.map((prod) => {
              console.log("revisar carrito");
              if (cartItems[prod.idProductos] > 0) {
                console.log("carrtio no vacio");
                total += prod.precio * cartItems[prod.idProductos];
                return <ListaCarrito key={prod.idProduct} prod={prod} />;
              }
            })}
          </ul>
          <div className="space-y-1 text-right">
            <p>
              Total de compra:
              <span className="font-semibold"> ${total.toFixed(2)} </span>
            </p>
          </div>
          <Box display={"flex"} justifyContent={"center"} gap={"10"}>
            <Button width={"190px"} backgroundColor={"#FC8E51"} color={"white"}>
            Ver más promociones
            </Button>
            <Button
              width={"190px"}
              backgroundColor={"#208220"}
              color={"white"}
            >
              <Box >Guardar</Box>
            </Button>
            
          </Box>
        </div>
      </Box>
    </>
  );
}

export default Carrito;
