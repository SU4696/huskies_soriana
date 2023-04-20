import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";

import styles from "@/styles/Home.module.css";
import Link from "next/link";

function index() {
  return (
    <Box h={"calc(100vh - 20px)"}>
      <Box
        height={"30%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Center>
          <Image
            src={"/assets/sorianaLogo.png"}
            alt="sorianaLogo"
            width={"70%"}
          />
        </Center>
      </Box>
      <Box
        backgroundColor={"#208220"}
        width={"100%"}
        height={"70%"}
        left={"0px"}
        bottom={"0px"}
        borderTopRadius={"3rem"}
        padding={"calc(24px + 1.5625vw)"}
        justifyItems={"center"}
      >
        <Center>
          <Heading as="h1" size="xl" color={"white"} marginY={2}>
            Inicio de sesión
          </Heading>
        </Center>
        <Stack spacing={5}>
          <VisuallyHidden>Email Address</VisuallyHidden>
          <Input
            type="email"
            variant="Correo"
            placeholder="Correo"
            // className={styles.login}
            borderRadius={"3rem"}
          />
          <VisuallyHidden>Password</VisuallyHidden>
          <Input
            type="password"
            variant="password"
            placeholder="Contraseña"
            borderRadius={"3rem"}
            // className={styles.login}
          />
          <Box
            gap={8}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Link href={"/contrasena"}>
              <Text color={"white"}>¿Olvidaste tu contraseña?</Text>
            </Link>

            <Button paddingX={20} marginY={3} color={"#208220"}>
              Log in
            </Button>
            <Link href={"/crearcuenta"}>
            <Text color={"white"} textAlign={"center"}>
              ¿No tienes una cuenta? Crea una cuenta
            </Text>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default index;
