
import { Box, chakra, Flex } from "@chakra-ui/react";

import { Promociones } from "@/types/Promociones";
import { useContext } from "react";
import { ShopContext } from "@/context/ShopContext";

interface PromosCardProps {
  promo: Promociones;
}

const PromosCard: React.FC<PromosCardProps> = ({ promo }) => {
  const { nombre, image, precio, descuento, idProductos } = promo;

  const {  addToCart } = useContext(ShopContext);
 

 
  return (
    <>
      <Flex
        _dark={{
          bg: "#3e3e3e",
        }}
        px={50}
        
        py={2}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          w="sm"
          mx="auto"
        >
          <Box
            bg="gray.300"
            h={64}
            w="full"
            rounded="lg"
            shadow="md"
            bgSize="cover"
            bgPos="center"
            style={{
              backgroundImage: `url(${image})`
              ,
            }}
          ></Box>

          <Box
            w={{
              base: 56,
              md: 64,
            }}
            bg="white"
            _dark={{
              bg: "gray.800",
            }}
            mt={-10}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
          >
            <chakra.h3
              py={2}
              textAlign="center"
              fontWeight="bold"
              textTransform="uppercase"
              color="gray.800"
              _dark={{
                color: "white",
              }}
              letterSpacing={1}
            >
              {nombre}
            </chakra.h3>

            <Flex
              alignItems="center"
              justifyContent="space-between"
              py={2}
              px={3}
              bg="#208220"
              _dark={{
                bg: "#208220",
              }}
            >
              <chakra.span
                fontWeight="bold"
                color="white"
                _dark={{
                  color: "white",
                }}
              >
                ${precio}
              </chakra.span>
              <chakra.span
                color="white"
                _dark={{
                  color: "white",
                }}
              >
                 precio con -
                ${descuento}
              </chakra.span>

              <chakra.button
                bg="red"
                onClick={() => addToCart(idProductos)}
                fontSize="xs"
                fontWeight="bold"
                color="white"
                px={2}
                py={1}
                rounded="lg"
                textTransform="uppercase"
                _hover={{
                  bg: "red.400",
                  _dark: {
                    bg: "red.300",
                  },
                }}
                _focus={{
                  bg: "red.400",
                  _dark: {
                    bg: "red.300",
                  },
                  outline: "none",
                }}
              >
                +
              </chakra.button>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      ;
    </>
  );
};

export default PromosCard;
