import React, { useContext } from 'react'
import NumberCounter from './NumberCounter'
import { Image, chakra, Flex, Box, Link, Text, Button } from "@chakra-ui/react";
import { Producto } from "@/types/Producto";
import { ShopContext } from '@/context/ShopContext';

interface ListaCarritoProps {
  prod: Producto;
}

const ListaCarrito: React.FC<ListaCarritoProps> = ({prod}) => {
    const {idProductos, nombre, image, precio } = prod;
    const { cartItems } = useContext(ShopContext); 
  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
        <div className="flex w-full space-x-2 sm:space-x-4">
            <Image className="p-1" src={image} alt={nombre} />
            <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">{nombre}</h3>
                    </div>
                    <div className="text-right">
                        <NumberCounter />
                        <p className="text-lg font-semibold">{precio}</p>
                    </div>
                </div>
                <div className="flex text-sm divide-x">
                    <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                            <rect width="32" height="200" x="168" y="216"></rect>
                            <rect width="32" height="200" x="240" y="216"></rect>
                            <rect width="32" height="200" x="312" y="216"></rect>
                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Eliminar</span>
                    </button>
                </div>
            </div>
        </div>
    </li>
  )
}

export default ListaCarrito