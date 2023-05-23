import React, { useContext } from "react";
import {
  Image,
  Flex,
  Text,
  Card,
  CardBody,
  Heading,
  IconButton,
  Box,
  Stack,
} from "@chakra-ui/react";
import { Producto } from "@/types/Producto";
import { ShopContext } from "@/context/ShopContext";
import { BsFillTrashFill } from "react-icons/bs";

interface ListaCarritoProps {
  prod: Producto;
}

const ListaCarrito: React.FC<ListaCarritoProps> = ({ prod }) => {
  const { idProductos, nombre, image, precio } = prod;
  const { removeFromCart, addToCart, cartItems, removeAllFromCart } = useContext(ShopContext);

  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="elevated"
       margin={"10px"}
      >
        <Image
        padding={"2px"}
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={image}
          alt={nombre}
        />

        <Stack>
          <CardBody width={"100%"}>
            <Flex>
              <Box paddingRight={"50px"} margin={"10px"}>
                <Heading size="sm" marginBottom={6}>
                  {nombre}
                </Heading>
                <div className="counter">
                  <button
                    className="counter-button"
                    onClick={() => removeFromCart(idProductos)}
                  >
                    {" "}
                    -{" "}
                  </button>

                  <input
                    type="number"
                    className="counter-input"
                    value={cartItems[idProductos]}
                    readOnly
                  />

                  <button
                    className="counter-button"
                    onClick={() => addToCart(idProductos)}
                  >
                    +
                  </button>
                  <style jsx>{`
                    .counter {
                      display: flex;
                      align-items: center;
                    }

                    .counter-button {
                      background-color: #208220;
                      color: #fff;
                      border: none;
                      padding: 5px 12px;
                      font-size: 11px;
                      cursor: pointer;
                      transition: background-color 0.3s;
                    }

                    .counter-button:hover {
                      background-color: #165c16;
                    }

                    .counter-input {
                      width: 14px;
                      text-align: center;
                      margin: 0 16px;
                      border: none;
                      font-size: 12px;
                    }
                  `}</style>
                </div>
                <br /> <br />
                <Text marginTop={6} as="b">
                  ${(precio * cartItems[idProductos]).toFixed(2)}
                </Text>
              </Box>
              <Box   >
                <IconButton
                display={"flex"}
                justifyContent={"right"}
                  aria-label="erase"
                  fontSize="25px"
                  color="red.500"
                  variant="ghost"
                  icon={<BsFillTrashFill />}
                  onClick={() => removeAllFromCart(idProductos)}
                />
              </Box>
            </Flex>
          </CardBody>
        </Stack>
      </Card>
    </>
  );
};

export default ListaCarrito;
