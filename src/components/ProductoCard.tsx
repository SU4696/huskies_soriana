
import {
    Image,
    Link
} from "@chakra-ui/react"


  import React from "react";

import { Producto } from "@/types/Producto";

interface ProductoCardProps {
    prod: Producto;
}

const ProductoCard:React.FC<ProductoCardProps> = ({prod}) => {

    const { nombre, image, precio } = prod;

    return(
        
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <Image className="p-8 rounded-t-lg" src={image} alt={nombre} />
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-md md:text-xl font-semibold tracking-tight text-gray-900 ">{nombre}</h5>
                </a>
                <div className="flex items-end justify-between">
                    <span className="text-sm md:text-md font-medium">${precio}</span>
                </div>
            </div>
        </div>
        
    )
}

export default ProductoCard;