import styled from "@emotion/styled"
import Carrusel from "./Carrusel"
import SorianaMain from "src/img/sorianamain.jpeg"

import { useEffect, useState } from 'react';
import ProductoCard from '@/components/ProductoCard';
import { getProductos } from '@/service/ServicioProductos';
import { Producto } from '@/types/Producto';


const Image = styled.img`
  max-width: 700px;
  max-height: 200px;
  width: 80%;
  margin: 0px auto;
  display:block;
`;

const ContenidoInicio = () => {
    const [productos, setProductos] = useState<Producto[]>([]);


  useEffect(() => {
    const fetchProductos = async () => {
      const promos = await getProductos();
      setProductos(promos);
    }

    fetchProductos();

  }, [])


  return (
    <div className="bg-white">
        {/* <picture className="justify-center flex md:max-w-md h-36 ">
            <img
                src={SorianaMain.src}
                alt="Soriana Logo"
            />
         </picture> */}
         <Image src={SorianaMain.src} alt="Soriana Logo"/>
        <div className="bg-primary rounded-t-3xl p-1">
            <div className="mt-5 md:px-50 content-center ">
                <Carrusel/>
            </div>

            <p className=" lg:text-lg mt-5 mb-5 text-center font-bold">Recomendados</p>

            <div className="justify-center flex space-x-2 md:space-x-10 px-5">
                <button
                    type="button"
                    className="py-1 px-1 md:py-2 md:px-5 text-sm bg-secondary text-white md:font-medium uppercase rounded-lg  hover:bg-green-800"
                >Todos</button>

                <button
                    type="button"
                    className="py-1 px-1 md:py-2 md:px-5 text-sm bg-grayB text-black md:font-medium uppercase rounded-lg  hover:bg-gray-400"
                >Más nuevos</button>

                <button
                    type="button"
                    className="py-1 px-1 md:py-2 md:px-5 text-sm bg-grayB text-black md:font-medium uppercase rounded-lg  hover:bg-gray-400"
                >Popular</button>

                <button
                    type="button"
                    className="py-1 px-1 md:py-2 md:px-5 text-sm bg-grayB text-black md:font-medium uppercase rounded-lg  hover:bg-gray-400"
                >En Tendencia</button>

            </div>

            <div className="m-10">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 content-start">
                    {productos.map((prod) => (
                        <ProductoCard key={prod.idProduct} prod={prod} />
                    ))}
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default ContenidoInicio