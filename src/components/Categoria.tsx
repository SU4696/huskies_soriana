
import {
    HStack,
  } from "@chakra-ui/react";

import { useEffect, useState } from 'react';
import ProductoCard from '@/components/ProductoCard';

import { getCategoria } from '@/service/ServicioCategorias';
import { Producto } from '@/types/Producto';


const Categoria = ({categoria} : {categoria : string}) => {
    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {
        const fetchProductos = async () => {
        const produc = await getCategoria(categoria);
        setProductos(produc);
        }

    fetchProductos();
  }, [])


  {/* Display of products taken from the database in 2 columns */}
  return (
    <HStack>
        <div className="product-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {productos.map((prod) => (
                <ProductoCard key={prod.idProduct} prod={prod} />
            ))}
        </div> 
    </HStack>
  )
}

export default Categoria