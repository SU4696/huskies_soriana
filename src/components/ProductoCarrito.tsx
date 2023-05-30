import { ViewIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Image,
  CardFooter,
  Button,
  IconButton,
} from "@chakra-ui/react";

import { Producto } from "@/types/Producto";
import { BsFillTrashFill } from "react-icons/bs";

interface ProductoCarritoProps {
  prod: Producto;
}

const ProductoCarrito: React.FC<ProductoCarritoProps> = ({ prod }) => {
  const { nombre, image, precio } = prod;

  return (
    <>
      <div className="bg-white">
        <button
          type="button"
          className="py-1 px-1 md:py-2 md:px-5 text-sm text-white md:font-medium rounded-lg hover:bg-gray-100"
        >
          <Image src={image} alt={nombre} />
          <p className="lg:text-lg text-black mb-50 text-center font-bold ">
            {nombre}
          </p>
          <p className="text-black mb-5 text-center">{precio}</p>
          <IconButton
            aria-label="Go to cart"
            fontSize="25px"
            color="#red"
            variant="ghost"
            icon={<BsFillTrashFill />}
          />
        </button>
      </div>
    </>
  );
};

export default ProductoCarrito;
