import CamComponents from "@/components/CamComponents";
import ListaCarrito from "@/components/ListaCarrito";
import { Box, Link, Button, Divider, Text } from "@chakra-ui/react";
import React, { useContext, useState, useEffect } from "react";
import { Producto } from "@/types/Producto";
import { getProductos } from "@/service/ServicioProductos";
import { ShopContext } from "@/context/ShopContext";

import { BsFillTrashFill } from "react-icons/bs";
import { Promociones } from "@/types/Promociones";
import { getPromociones } from "@/service/ServicioPromociones";

function Carrito() {
  const { cartItems } = useContext(ShopContext);

  const { removeAllFromCart } = useContext(ShopContext);

  const [products, setProducts] = useState<Producto[]>([]);
  const [promociones, setPromociones] = useState<Promociones[]>([]);

  const [total, setTotal] = useState(0);
  const [descuento, setDes] = useState(0);
  const [subtotal, setSub] = useState(0);

  useEffect(() => {
    const fetchProductos = async () => {
      const fetchProducts = await getProductos();
      setProducts(fetchProducts);
    };
    const fetchPromociones = async () => {
      const fetchPromos = await getPromociones();
      setPromociones(fetchPromos);
    };

    fetchPromociones();
    fetchProductos();
  }, []);

  useEffect(() => {
    let newTotal = 0;
    let newDes = 0;
    products.forEach((prod) => {
      if (cartItems[prod.idProductos] > 0) {
        newTotal += prod.precio * cartItems[prod.idProductos];
        localStorage.setItem("total", newTotal.toFixed(2));
      }
    });
    promociones.forEach((prom) => {
      if (cartItems[prom.idProductos] > 0) {
        newTotal += prom.precio * cartItems[prom.idProductos];
        newDes += prom.descuento *cartItems[prom.idProductos];
        localStorage.setItem("total2", newTotal.toFixed(2));
        localStorage.setItem("descuent", newDes.toFixed(2));
      }
    });
    
    setTotal(newTotal);
    setDes(newDes);
    setSub(newDes+newTotal);
  }, [cartItems, products, promociones]);

  return (
    <>
      <CamComponents />
      <Box display={"flex"} justifyContent={"center"} marginLeft={'24'}>
        <div className="flex  flex-col max-w-3xl p-6 space-y-4 sm:p-10 ">
          <ul className="flex flex-col divide-y divide-gray-700">
            {products.map((prod) => {
              if (cartItems[prod.idProductos] > 0) {
                return <ListaCarrito key={prod.idProduct} prod={prod} />;
              }
            })}
            {promociones.map((prod) => {
              // Render the PromosCard component for each promo
              if (cartItems[prod.idProductos] > 0) {
              return <ListaCarrito key={prod.idProductos} prod={prod} />;
              }
            })}
          </ul>
          <div className="space-y-1 text-right" >
            <Button onClick={removeAllFromCart} size="sm" gap={2} marginY={3} textColor="white" backgroundColor={"#E23535"}>
              Vaciar Carrito
              <BsFillTrashFill
                display={"flex"}
                aria-label="erase"
                fontSize="20px"
                color="white"
              />
            </Button>
            <Text>
              Subtotal:
              <span className="font-semibold"> ${subtotal.toFixed(2)} </span>
            </Text>
            <Text>
              Descuento:
              <span className="font-semibold"> ${descuento.toFixed(2)} </span>
            </Text>
            <Divider></Divider>
            <Text paddingBottom={"5"}>
              Total de compra:
              <span className="font-semibold"> ${total.toFixed(2)} </span>
            </Text>
          </div>

          <Box display={"flex"} justifyContent={"center"} gap={"10"}>
            <Link href="/promociones">
              <button
                type="button"
                className="px-6 py-2 border rounded-md bg-naranja text-white text-m md:text-base hover:bg-green-800"
              >
                Ver más promociones
              </button>
            </Link>
            <Link href={"/barcodePagar"}>
              <button
                type="submit"
                className="px-6 py-2 border rounded-md  bg-secondary text-white text-m md:text-base hover:bg-green-800"
              >
                Guardar
              </button>
            </Link>
          </Box>
        </div>
      </Box>
    </>
  );
}

export default Carrito;
