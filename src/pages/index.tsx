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

import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

interface LoginType {
  email: string;
  password: string;
}

function index() {
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
                {...register("email", { required: "Email is required" })}
                variant="Correo"
                placeholder="Correo"
                // className={styles.login}
                borderRadius={"3rem"}
              />
              {errors.email && (
                <p className="text-red-400">{errors.email.message}</p>
              )}

              <VisuallyHidden>Password</VisuallyHidden>
              <Input
                type="password"
                {...register("password", { required: "Password is required" })}
                variant="password"
                placeholder="Contraseña"
                borderRadius={"3rem"}
                // className={styles.login}
              />
              {errors.password && (
                <p className="text-red-400">{errors.password.message}</p>
              )}

              <Box
                gap={8}
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
              >
                <Link href={"/contrasena"}>
                  <Text color={"white"}>¿Olvidaste tu contraseña?</Text>
                </Link>

                <Button
                  type="submit"
                  paddingX={20}
                  marginY={3}
                  color={"#208220"}
                >
                  Log in
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

export default index;
