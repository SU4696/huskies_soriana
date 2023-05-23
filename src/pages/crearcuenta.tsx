import {
  Box,
  Button,
  Heading,
  Input,
  Link,
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
}

function Contrasena() {
  const methods = useForm<SignupType>({ mode: "onBlur" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const { signUp } = useAuth();
  const router = useRouter();

  {
    /* Create account and direct to main page after submit */
  }
  const onSubmit = async (data: SignupType) => {
    try {
      await signUp(data.email, data.password);
      const datas = {
        correo: data.email,
        puntoTotal: 0,
      };

      router.push("/crearcuentaInfo");
      const { user } = useAuth();
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
          {/* Form function works after doing a submit */}
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Text marginTop={"3rem"} fontWeight={"bold"} fontSize="xl">
              Correo
            </Text>
            <VisuallyHidden>Email Address</VisuallyHidden>
            {/* Email form required */}
            <Input
              type="email"
              {...register("email", { required: "Email es requerido" })}
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
            {/* Password form required */}
            <Input
              type="password"
              {...register("password", {
                required: "Contraseña es requerido",
                minLength: {
                  value: 7,
                  message: "La contraseña debe tener al menos 7 caracteres",
                },
              })}
              variant="flushed"
              fontSize="xl"
            />
            {errors.password && (
              <p className="text-red-400">{errors.password.message}</p>
            )}
            <Text>Mínimo 7 caracteres</Text>
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
        <Link href={"/"}>
          <Text color={"#208220"} textAlign={"center"}>
            ¿Ya tienes una cuenta? Inicia sesión
          </Text>
        </Link>
      </Stack>
    </Box>
  );
}

export default Contrasena;
