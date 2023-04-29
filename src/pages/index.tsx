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
import Link from "next/link";

import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

interface LoginType {
  email: string;
  password: string;
}

function Index() {
  const methods = useForm<LoginType>({ mode: "onBlur" });
  const { logIn } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: LoginType) => {
    try {
      await logIn(data.email, data.password);
      router.push("/main");
    } catch (error: any) {
      console.log(error.message);
      alert("Correo y/o contrseña es invalido");
    }
  };
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
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>

        <Stack spacing={5}>
              <VisuallyHidden>Email Address</VisuallyHidden>
              <Input
                type="email"
                {...register("email", { required: "Correo es requerido" })}
                variant="Correo"
                placeholder="Correo"
                // className={styles.login}
                borderRadius={"3rem"}
              />
              {errors.email && (
                <Text color={"white"}>{errors.email.message}</Text>
              )}

              <VisuallyHidden>Password</VisuallyHidden>
              <Input
                type="password"
                {...register("password", { required: "Contraseña es requerido" })}
                variant="password"
                placeholder="Contraseña"
                borderRadius={"3rem"}
                // className={styles.login}
              />
              {errors.password && (
                <Text color={"white"}>{errors.password.message}</Text>
              )}

              <Box
                gap={8}
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
              >
                <Link href={"/reestablecercontrasena"}>
                  <Text color={"white"}>¿Olvidaste tu contraseña?</Text>
                </Link>

                <Button
                  type="submit"
                  paddingX={20}
                  marginY={3}
                  color={"#208220"}
                >
                  Iniciar sesión
                </Button>

                <Link href={"/crearcuenta"}>
                  <Text color={"white"} textAlign={"center"}>
                    ¿No tienes una cuenta? Crea una cuenta
                  </Text>
                </Link>
              </Box>
        </Stack>
            </form>
          </FormProvider>
      </Box>
    </Box>
  );
}

export default Index;
