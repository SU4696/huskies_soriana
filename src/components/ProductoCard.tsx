import { ViewIcon } from "@chakra-ui/icons";
import {
    Card, 
    CardBody,
    Image,
    CardFooter,
    Button
} from "@chakra-ui/react"

import {
    Box,
    chakra,
    CloseButton,
    Flex,
    HStack,
    IconButton,
    useColorModeValue,
    useDisclosure,
    VStack,
    VisuallyHidden,
    InputGroup,
    InputLeftElement,
    Avatar,
    Input,
    Link,
  } from "@chakra-ui/react";
  import React from "react";
  import {
    AiFillHome,
    AiOutlineMenu,
    AiOutlineInbox,
    AiFillBell,
    AiOutlineGift,
    AiOutlineShoppingCart,
    AiOutlineArrowLeft,
    AiFillCamera,
  } from "react-icons/ai";
  import { HiOutlineUserCircle } from "react-icons/hi";
  import { BsFillCameraVideoFill } from "react-icons/bs";

import { Producto } from "@/types/Producto";

interface ProductoCardProps {
    prod: Producto;
}

const ProductoCard:React.FC<ProductoCardProps> = ({prod}) => {

    const { nombre, image, precio } = prod;

    return(
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image className="p-8 rounded-t-lg" src={image} alt={nombre} />
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-md md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{nombre}</h5>
                </a>
                <div className="flex items-end justify-between">
                    <span className="text-sm md:text-md font-medium">${precio}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductoCard;