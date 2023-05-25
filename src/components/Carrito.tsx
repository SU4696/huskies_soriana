import CamComponents from '@/components/CamComponents'
import ListaCarrito from '@/components/ListaCarrito'
import { Box, Link, IconButton, Button } from '@chakra-ui/react'
import React, { useContext, useState, useEffect } from 'react'
import { Producto } from "@/types/Producto";
import { getProductos } from '@/service/ServicioProductos'
import { ShopContext } from '@/context/ShopContext'
import HistoriaCompra from '@/components/HistoriaCompra';

import { BsFillTrashFill } from "react-icons/bs";

function Carrito() {
  const { cartItems, totalItems} = useContext(ShopContext);
  const { updateTotal, removeAllFromCart } = useContext(ShopContext);

  const [products, setProducts] = useState<Producto[]>([]);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    const fetchProductos = async () => {
      const fetchProducts = await getProductos();
      setProducts(fetchProducts);
    }

    fetchProductos();
  }, [])

  useEffect(() => {
    let newTotal = 0;
    products.forEach(prod => {
      if (cartItems[prod.idProductos] > 0) {
        newTotal += prod.precio * cartItems[prod.idProductos];
        localStorage.setItem("total", newTotal.toFixed(2));
        console.log(newTotal);
      }
    });
    setTotal(newTotal);
  }, [cartItems, products]);

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
                return <ListaCarrito key={prod.idProduct} prod={prod} />
              }
            })}
          </ul>
          <div className="space-y-1 text-right">
            <Button onClick={removeAllFromCart} size='sm' gap={2}>
                Vaciar Carrito
                <BsFillTrashFill
                    display={"flex"}
                    aria-label="erase"
                    fontSize="20px"
                    color='red'
                />
            </Button>
            <p>
                Total de compra:
              <span className="font-semibold"> ${total.toFixed(2)} </span>
            </p>
          </div>
          
          <Box display={"flex"} justifyContent={"center"} gap={"10"}>
            <Link href='/promociones'>
              <button type="button" className="px-6 py-2 border rounded-md bg-naranja text-white text-sm md:text-base hover:bg-green-800">
                Ver más promociones
              </button>
            </Link>
            <Link href={"/barcodePagar"}>
              <button type="button" className="px-6 py-2 border rounded-md  bg-secondary text-white text-sm md:text-base hover:bg-green-800">
                Guardar
              </button>
            </Link>
          </Box>
        </div>
      </Box>
    </>
  )
}

export default Carrito;