import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import styles from "@/styles/Home.module.css";
function contrasena() {
  return (
    <Box
      margin={"2rem"}
      padding={"calc(8px + 1.5625vw)"}
      display={"flex"}
      alignItems={"center"}
      flexWrap={"wrap"}
    >
      <Heading className={styles.greentext} fontSize="3xl">
        Crear cuenta
      </Heading>
      <Stack width={"100%"} spacing={5}>
        <Text marginTop={"3rem"} fontWeight={"bold"} fontSize="xl">
          Nombre completo
        </Text>
        <VisuallyHidden>Name</VisuallyHidden>
        <Input variant="flushed" fontSize="xl" />
        <Text marginTop={"3rem"} fontWeight={"bold"} fontSize="xl">
          Correo
        </Text>
        <VisuallyHidden>Email Address</VisuallyHidden>
        <Input type="email" variant="flushed" fontSize="xl" />
        <Text marginTop={"3rem"} fontWeight={"bold"} fontSize="xl">
          Contraseña
        </Text>
        <VisuallyHidden>Password</VisuallyHidden>
        <Input type="password" variant="flushed" fontSize="xl" />
        <Box
          gap={8}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            fontSize="xl"
            className={styles.greenbutton}
            backgroundColor={"#208220"}
          >
            Registrarse
          </Button>
        </Box>{" "}
      </Stack>
    </Box>
  );
}

export default contrasena;
