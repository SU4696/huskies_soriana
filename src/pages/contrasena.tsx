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
        Cambiar Contraseña
      </Heading>
      <Stack width={"100%"} spacing={30}>
        <Text marginTop={"3rem"} fontWeight={"bold"} fontSize="xl">
          Correo
        </Text>
        <VisuallyHidden>Email Address</VisuallyHidden>
        <Input type="email" variant="flushed" fontSize="2xl" />
        <Box
          gap={8}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
        >
          <Button
            fontSize="l"
            className={styles.greenbutton}
            backgroundColor={"#208220"}
          >
            Cambiar Contraseña
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default contrasena;
