import React, { useContext, useEffect } from "react";
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
  Spacer,
  CardFooter,
  useToast
} from "@chakra-ui/react";
import { Promociones } from "@/types/Promociones";
import { ShopContext } from "@/context/ShopContext";
import { BsFillTrashFill } from "react-icons/bs";

interface ListaCarritoProps {
  prod: Promociones;
}

const ListaCarrito: React.FC<ListaCarritoProps> = ({ prod }) => {
  const { idProductos, nombre, image, precio, descuento } = prod;
  const { removeFromCart, addToCart, setToCartQ, cartItems, removeAllItemFromCart } = useContext(ShopContext);

  const toast = useToast();
  var once = 0;

  useEffect(() => {
    console.log(`antes ${cartItems[idProductos]}`)
    if(descuento > 0 && once == 0){
      setToCartQ(idProductos, 1);
      once = 1;
      console.log(`once ${once}`)
    }
    console.log(`despues ${cartItems[idProductos]}`)
  }, [])

  function handlePlus() {
    if(!(descuento > 0)) { // si no es promo
      addToCart(idProductos)
    } else if (descuento > 0) { // si es promo
      toast({
        title: `Artículo de promoción`,
        description: "No se puede añadir otra promoción igual al carrito",
        status: 'warning',
        duration: 4500,
        isClosable: true,
        variant: 'subtle',
        position: 'top'
      })
    }
  }

  function handleDelete(){
    removeAllItemFromCart(idProductos)
    toast({
      title: `${nombre}`,
      description: "¡Oh no!, ya no se encuentra en tu carrito.",
      status: 'error',
      duration: 4500,
      isClosable: true,
      variant: 'subtle',
      position: 'top'
    })
  }

  function handleMenos(){
    if(cartItems[idProductos] > 1){
      removeFromCart(idProductos)
    }
  }

  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="elevated"
        margin={"10px"}
        border={"white"}
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
              <Box paddingRight={"50px"} margin={"10px"} w="64">
                <Heading size="sm" marginBottom={6}>
                  {nombre}
                </Heading>
                {!(descuento > 0) &&
                <div className="counter">
                  <button
                    className="counter-button"
                    onClick={() => handleMenos()}
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
                    onClick={() => handlePlus()}
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
                </div>}
                <br /> <br />
                <Text marginTop={6} as="b">
                  ${(precio * cartItems[idProductos]).toFixed(2)}
                </Text>
              </Box>

              <Box
                flex="1"
                display="flex"
                flexWrap="wrap"
                alignContent="flex-end"
              >
                <Spacer />
                <IconButton
                  flex="1"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"flex-end"}
                  aria-label="erase"
                  fontSize="25px"
                  color="red.500"
                  variant="ghost"
                  icon={<BsFillTrashFill />}
                  onClick={() => handleDelete()}
                />
              </Box>
            </Flex>
            <Box>
              {(descuento > 0) &&
              <Text color={"red"} marginLeft={15} marginTop={6} as="b">
                -${descuento*cartItems[idProductos]}
              </Text>}
            </Box>
          </CardBody>
        </Stack>
      </Card>
    </>
  );
};

export default ListaCarrito;
