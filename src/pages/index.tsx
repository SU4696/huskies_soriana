import { Box, Button, Center, Heading, Image, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import styles from '@/styles/Home.module.css'


function index() {
  return (
    <Box>
      <Box padding={"1rem"}  >
        <Center>
          <Image
            src={"/assets/sorianaLogo.png"}
            alt="sorianaLogo"
            width={"70%"}
            height={"70%"}
          />
        </Center>
      </Box>
      <Box  backgroundColor={"#208220"} width={"100%"} left={"0px"}bottom={"0px"}position={"fixed"} borderTopRadius={"3rem"} >
        <Center><Heading className={styles.garet} fontSize={"2rem"} color={"white"}>Inicio de sesión</Heading>
        </Center>
   
        <Input  variant='Correo' placeholder='Correo' className={styles.login} />
        
        <Input  variant='Correo' placeholder='Correo' className={styles.login} />
        <Text color={"white"}>¿Olvidaste tu contraseña?</Text>
        <Button className={styles.whitebutton} >Log in</Button>
        <Text color={"white"}>¿No tienes una cuenta? Crea una cuenta nueva</Text>
      </Box>
    </Box>
    
  );
}

export default index