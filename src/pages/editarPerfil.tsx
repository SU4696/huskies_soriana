import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Text,
  VisuallyHidden,
  Link,
  IconButton
} from "@chakra-ui/react";
import {
  BiArrowBack
} from "react-icons/bi";

import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";

import { useRouter } from "next/router";
import ProtectedRoute from "@/components/ProtectedRoute";
import {db} from "@/firebase/config";
import { updateDoc, doc, getDoc  } from "firebase/firestore";


interface ProfileUpdate {
  name: string;
  password: string;
}

function Perfil() {
  const [errorMessage, setErrorMessage] = useState("");
  const methods = useForm<ProfileUpdate>({ mode: "onBlur" });

  const { user ,auth, updatePassword} = useAuth();
  console.log(user);
  const email =user.email;
  const uid =user.uid;
  
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const router = useRouter();

  // Update profile name and password
  const onSubmit = async (data: ProfileUpdate) => {
    try {
      if (data.name) {
        if (data.name.length <= 30 && /^[A-Za-z\s]+$/.test(data.name)) {
          const docRef = doc(db, "Usuario", uid);
          await updateDoc(docRef, {
            nombre: data.name,
          });
        } else {
          setErrorMessage("Máximo 30 letras. Solo texto.");
          return;
        }
      }

      else if (data.password && data.password.length >= 7) {
        await updatePassword(data.password);
      } else {
        setErrorMessage("Debe tener al menos 7 caracteres."); 
        return; 
      }
      router.push("/main");

    } catch (error: any) {
      console.log(error.message);
      setErrorMessage("Error"); 
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
      <Link href={"/main"}>
            <IconButton 
            aria-label="goBack"
            size={"xs"}
            padding={"2px"}
            icon={<BiArrowBack color="black" size={30} />}
            paddingRight={"20px"}
            variant="ghost"
            />
            </Link>
        Editar Perfil
      </Heading>
      <Stack width={"100%"} spacing={5}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Text marginTop={"3rem"} fontWeight={"bold"} fontSize="xl">
              Nombre completo
            </Text>
            <VisuallyHidden>Name</VisuallyHidden>
            <Input
            
              variant="flushed"
              fontSize="xl"
              type="text"
              {...register("name")}
              autoComplete="off"
            />
            {errors.name && (
              <p className="text-red-400">{errors.name.message}</p>
            )}
<Text marginTop={"3rem"} fontWeight={"bold"} fontSize="xl">
              Correo
            </Text>
            <Text marginTop={"1rem"}  fontSize="xl">
              {email}
            </Text>
            <Text marginTop={"3rem"} fontWeight={"bold"} fontSize="xl">
              Contraseña
            </Text>
            <VisuallyHidden>Password</VisuallyHidden>
            <Input
              type="password"
              {...register("password")}
              variant="flushed"
              fontSize="xl"
              autoComplete="off"
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
              {errorMessage && <p className="text-red-400">{errorMessage}</p>}
              <Button
                type="submit"
                fontSize="xl"
                className={styles.greenbutton}
                backgroundColor={"#208220"}
              >
                Guardar
              </Button>
            </Box>
          </form>
        </FormProvider>
      </Stack>
    </Box>
  );
}

export default Perfil;