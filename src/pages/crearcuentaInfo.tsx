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
import addData from "@/firebase/addData";

interface userINFO {
  name: string;
}

function Contrasena() {
  const methods = useForm<userINFO>({ mode: "onBlur" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const router = useRouter();
  const { user } = useAuth();
  const email = user.email;
  const uid = user.uid;

  const onSubmit = async (data: userINFO) => {
    try {
      const datas = {
        correo: email,
        nombre: data.name,
        puntoTotal: 0,
      };

      router.push("/main");

      const { result, error } = await addData("Usuario", uid, datas);
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
        Información Personal
      </Heading>
      <Stack width={"100%"} spacing={5}>
        <FormProvider {...methods}>
          {/* Form function works after doing a submit */}
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Text marginTop={"3rem"} fontWeight={"bold"} fontSize="xl">
              Nombre completo
            </Text>
            <VisuallyHidden>Name</VisuallyHidden>
            <Input
              variant="flushed"
              fontSize="xl"
              type="text"
              {...register("name", {
                required: "Nombre es requerido",
                maxLength: {
                  value: 30,
                  message: "El nombre debe tener como máximo 30 caracteres",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "El nombre solo puede contener letras",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-400">{errors.name.message}</p>
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

export default Contrasena;
