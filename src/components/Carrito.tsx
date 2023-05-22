import CamComponents from '@/components/CamComponents'
import ListaCarrito from '@/components/ListaCarrito'
import { Box } from '@chakra-ui/react'
import React, { useContext, useState, useEffect } from 'react'
import { Producto } from "@/types/Producto";
import { getProductos } from '@/service/ServicioProductos'
import { ShopContext } from '@/context/ShopContext'

function Carrito() {
    const { cartItems, totalItems } = useContext(ShopContext);
    
    const [products, setProducts] = useState<Producto[]>([]);

    var total = 0;

    useEffect(() => {
        const fetchProductos = async () => {
            const fetchProducts = await getProductos();
            setProducts(fetchProducts);
        }

        fetchProductos();
    }, [])

    return (
    <>
        
        <CamComponents  /> 
        <Box >
        <div className="flex  flex-col max-w-3xl p-6 space-y-4 sm:p-10 ">
            <ul className="flex flex-col divide-y divide-gray-700">
                {products.map((prod) => {
                    console.log("revisar carrito");
                    if (cartItems[prod.idProductos] > 0){
                        console.log("carrtio no vacio");
                        total += prod.precio*cartItems[prod.idProductos]
                        return <ListaCarrito  key={prod.idProduct} prod={prod}/>
                    }
                })}
            </ul>
            <div className="space-y-1 text-right">
                <p>Total de compra:
                    <span className="font-semibold"> ${total.toFixed(2)} </span>
                </p>
            </div>
            {/* <div className="flex justify-end space-x-4">
                <button type="button" className="px-6 py-2 border rounded-md bg-naranja text-white text-sm md:text-base hover:bg-green-800">Ver más promociones
                </button>
                <button type="button" className="px-6 py-2 border rounded-md  bg-secondary text-white text-sm md:text-base hover:bg-green-800">
                    Guardar
                </button>
            </div> */}
        </div>
        </Box>
    </>
  )
}

export default Carrito