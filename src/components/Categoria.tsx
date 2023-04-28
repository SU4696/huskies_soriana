import styled from "@emotion/styled"
import {
    HStack,
  } from "@chakra-ui/react";

import { useEffect, useState } from 'react';
import ProductoCard from '@/components/ProductoCard';

import { DocumentData, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { getProductos } from '@/service/ServicioProductos';
import { Producto } from '@/types/Producto';


const Categoria = () => {
    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {
        const fetchProductos = async () => {
        const promos = await getProductos();
        setProductos(promos);
        }

    fetchProductos();
  }, [])


  {/* Display of products taken from the database in 2 columns */}
  return (
    <HStack>
        <div className="product-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px' }}>
            {productos.map((prod) => (
                <ProductoCard key={prod.idProduct} prod={prod} />
            ))}
        </div> 
    </HStack>
  )
}

export default Categoria