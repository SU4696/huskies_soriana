import React, { useContext, useEffect, useState } from "react";
import BarcodeGenerator from "@/components/BarcodeGenerator";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Heading,
  Link,
  IconButton,
  Stack,
  Text,
  Divider
} from "@chakra-ui/react";
import {
  FaMoneyCheckAlt,
} from "react-icons/fa";

import {
  BiArrowBack
} from "react-icons/bi";
import addData from "@/firebase/addData";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router"; 0

import { ShopContext } from "@/context/ShopContext";

import { Promociones } from "@/types/Promociones";
import { getPromociones } from "@/service/ServicioPromociones";
import { Producto } from "@/types/Producto";
import { getProductos } from "@/service/ServicioProductos";
import ProtectedRoute from "@/components/ProtectedRoute";


function barcode() {
  const { user } = useAuth();
  console.log(user);
  const { removeAllFromCart,cartItems } = useContext(ShopContext);
  const [products, setProducts] = useState<Producto[]>([]);
  const [promociones, setPromociones] = useState<Promociones[]>([]);

  const [total, setTotal] = useState(0);
  const [descuento, setDes] = useState(0);
  const [subtotal, setSub] = useState(0);
  

  useEffect(() => {
    const fetchProductos = async () => {
      const fetchProducts = await getProductos();
      setProducts(fetchProducts);
    };
    const fetchPromociones = async () => {
      const fetchPromos = await getPromociones();
      setPromociones(fetchPromos);
    };

    fetchPromociones();
    fetchProductos();
  }, []);

  useEffect(() => {
    let newTotal = 0;
    let newDes = 0;
    products.forEach((prod) => {
      if (cartItems[prod.idProductos] > 0) {
        newTotal += prod.precio * cartItems[prod.idProductos];
        localStorage.setItem("total", newTotal.toFixed(2));
      }
    });
    promociones.forEach((prom) => {
      if (cartItems[prom.idProductos] > 0) {
        newTotal += prom.precio * cartItems[prom.idProductos];
        newDes += prom.descuento * cartItems[prom.idProductos];
        localStorage.setItem("total2", newTotal.toFixed(2));
        localStorage.setItem("descuent", newDes.toFixed(2));
      }
    });

    setTotal(newTotal);
    setDes(newDes);
    setSub(newDes + newTotal);
  }, [cartItems, products, promociones]);



  const router = useRouter();

  const email = user.email;

  const onSubmit = async () => {
    try {
      const dataCompra = {
        subtotal: subtotal.toFixed(2),
        discount: descuento.toFixed(2),
        total: total.toFixed(2),
        correo: email,
      }
     
      const randomID = Math.floor(Math.random() * 1000000).toString();
      const { result, error } = await addData("Compra",randomID, dataCompra);

        // Reset the state values to their initial state
        if (!error) {
          removeAllFromCart(); // Call removeAllFromCart function here
    
          router.push("/main");
        } else {
          console.log(error);
        }
      } catch (error: any) {
        console.log(error.message);
      }
  };


  return (
    <ProtectedRoute>

    <Box
      margin={"2rem"}
      padding={"calc(8px + 1.5625vw)"}
      display={"flex"}
      alignItems={"center"}
      flexWrap={"wrap"}
    >
      <Heading className={styles.greentext} fontSize="2xl">
        <Link href={"/carrito"}>
          <IconButton
            aria-label="goBack"
            size={"xs"}
            padding={"2px"}
            icon={<BiArrowBack color="black" size={30} />}
            paddingRight={"20px"}
            variant="ghost"
          />
        </Link>
        Código para pagar!
      </Heading>
      <Stack width={"100%"} spacing={5}
        alignItems={"center"}
        marginTop={"200px"}
        marginBottom={"70px"}
      >
        <Text textColor={"black"} fontSize="l" fontWeight={"bold"}>
          Subtotal: ${subtotal.toFixed(2)}
        </Text>
        <Text textColor={"black"} fontSize="l" fontWeight={"bold"}>
          Descuento: - ${descuento.toFixed(2)}
        </Text>
        <Divider />
        <Text textColor={"#C80606"} fontSize="2xl" fontWeight={"bold"}>
          Total: ${total.toFixed(2)}
        </Text>
        <BarcodeGenerator />
      </Stack>

      <Stack width={"100%"} spacing={5}
        alignItems={"center"}
        marginTop={"80px"}
        marginBottom={"70px"}
      >

        <IconButton
          onClick={onSubmit}
          type="submit"
          aria-label="upload"
          padding={"2px"}
          icon={<FaMoneyCheckAlt color="#208220" size={70} />}
          variant="ghost"
        />


      </Stack>
    </Box>
    </ProtectedRoute>
  );
}

export default barcode;