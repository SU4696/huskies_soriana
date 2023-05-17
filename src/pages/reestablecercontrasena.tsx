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
import { useAuth } from "@/context/AuthContext";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface ResetType {
  email: string;
}
function contrasena() {
  const methods = useForm<ResetType>({ mode: "onBlur" });
  const { resetPassword } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = async (data: ResetType) => {
    try {
      await resetPassword(data.email);
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
      alert("No proceso bien");
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
        Reestablecer Contraseña
      </Heading>
          <Stack width={"100%"} spacing={30}>
      <FormProvider {...methods} >
        <form onSubmit={handleSubmit(onSubmit)}>
            <Text marginTop={"3rem"} fontWeight={"bold"} fontSize="xl">
              Correo
            </Text>
            {errors.email && (
              <Text color={"white"}>{errors.email.message}</Text>
            )}
            <VisuallyHidden>Email Address</VisuallyHidden>
           
            <Input
              {...register("email", { required: "Correo es requerido" })}
              type="email"
              variant="flushed"
              fontSize="2xl"
            />
            <Box
              gap={8}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button
                fontSize="l"
                type="submit"
                className={styles.greenbutton}
                backgroundColor={"#208220"}
              >
                Reestablecer Contraseña
              </Button>
            </Box>
        </form>
      </FormProvider>
          </Stack>
    </Box>
  );
}

export default contrasena;
