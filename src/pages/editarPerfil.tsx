import {
  Box,
  Button,
  Center,
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

import React from "react";
import styles from "@/styles/Home.module.css";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import {
  updatePassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import ProtectedRoute from "@/components/ProtectedRoute";
import {db} from "@/firebase/config";
import { updateDoc, doc, getDoc  } from "firebase/firestore";


interface ProfileUpdate {
  name: string;
  password: string;
}

function Perfil() {
  
  const methods = useForm<ProfileUpdate>({ mode: "onBlur" });

  const { user ,auth} = useAuth();
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
        const docRef = doc(db, 'Usuario', uid);
        await updateDoc(docRef, {
          nombre: data.name
        });
      }

      else if (data.password) {
        await updatePassword(user, data.password)
        
      }
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