import { Box, Button, Center, Heading, Image, Input, Text, VisuallyHidden } from '@chakra-ui/react'
import React from 'react'

import styles from '@/styles/Home.module.css'


function index() {
  return (
    <Box>
      <Box   >
        <Center>
          <Image
            src={"/assets/sorianaLogo.png"}
            alt="sorianaLogo"
            width={"70%"}
            height={"70%"}
          />
        </Center>
      </Box>
      <Box  backgroundColor={"#208220"} width={"100%"} left={"0px"}bottom={"0px"} borderTopRadius={"3rem"}  padding={"calc(8px + 1.5625vw)"}
        justifyItems={"center"}>
         
        <Center><Heading as="h1" size="2xl" color={"white"}>Inicio de sesión</Heading>
        </Center>
        <VisuallyHidden>Email Address</VisuallyHidden>
        <Input type="email" variant='Correo' placeholder='Correo' className={styles.login} />
        <VisuallyHidden>Password</VisuallyHidden>
        <Input  type="password" variant='Correo' placeholder='Correo' className={styles.login} />
        <Text color={"white"} fontSize='2xl'>¿Olvidaste tu contraseña?</Text>
        <Button className={styles.whitebutton} >Log in</Button>
        <Text fontSize='2xl' color={"white"}>¿No tienes una cuenta? Crea una cuenta nueva</Text>
  
      </Box>
    </Box>
    
  );
}

export default index