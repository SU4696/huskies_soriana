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
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

interface SignupType {
  email: string;
  password: string;
  password_confirm: string;
}

function contrasena() {
  const methods = useForm<SignupType>({ mode: "onBlur" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const { signUp } = useAuth();
  const router = useRouter();

  const onSubmit = async (data: SignupType) => {
    try {
      await signUp(data.email, data.password);
      router.push("/main");
    } catch (error: any) {
      console.log(error.message);
    }
  };

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
        <FormProvider {...methods}>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Text marginTop={"3rem"} fontWeight={"bold"} fontSize="xl">
              Nombre completo
            </Text>
            <VisuallyHidden>Name</VisuallyHidden>
            <Input variant="flushed" fontSize="xl" />
            <Text marginTop={"3rem"} fontWeight={"bold"} fontSize="xl">
              Correo
            </Text>
            <VisuallyHidden>Email Address</VisuallyHidden>
            <Input
              type="email"
              {...register("email", { required: "Email is required" })}
              variant="flushed"
              fontSize="xl"
            />
            {errors.email && (
              <p className="text-red-400">{errors.email.message}</p>
            )}
            <Text marginTop={"3rem"} fontWeight={"bold"} fontSize="xl">
              Contraseña
            </Text>
            <VisuallyHidden>Password</VisuallyHidden>
            <Input
              type="password"
              {...register("password", { required: "Password is required" })}
              variant="flushed"
              fontSize="xl"
            />
            {errors.password && (
              <p className="text-red-400">{errors.password.message}</p>
            )}
            <Box
              gap={8}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button
                type="submit"
                fontSize="xl"
                className={styles.greenbutton}
                backgroundColor={"#208220"}
              >
                Registrarse
              </Button>
            </Box>{" "}
          </form>
        </FormProvider>
      </Stack>
    </Box>
  );
}

export default contrasena;
