import { Box, Button, Heading, Input, Stack, Text, VisuallyHidden } from '@chakra-ui/react'
import React from 'react'
import styles from '@/styles/Home.module.css'
function contrasena() {
  return (
    <Box 
    margin={"3rem"}
    padding={"calc(8px + 1.5625vw)"}
    display={"flex"}
    
    alignItems={"center"}
    flexWrap={"wrap"} >
      <Heading className={styles.greentext} fontSize="4xl">Crear cuenta</Heading>
      <Stack width={"100%"} spacing={30} >
      <Text marginTop={"3rem"} fontWeight={"bold"}fontSize="2xl" >Nombre completo</Text>
      <VisuallyHidden>Name</VisuallyHidden>
      <Input variant='flushed' fontSize="2xl" />
      <Text marginTop={"3rem"} fontWeight={"bold"}fontSize="2xl" >Correo</Text>
      <VisuallyHidden>Email Address</VisuallyHidden>
      <Input  type="email"variant='flushed' fontSize="2xl" />
      <Text marginTop={"3rem"} fontWeight={"bold"}fontSize="2xl" >Contraseña</Text>
      <VisuallyHidden>Password</VisuallyHidden>
      <Input type="password" variant='flushed' fontSize="2xl" />
      <Button fontSize="xl"className={styles.greenbutton} backgroundColor={"#208220"} >Registrarse</Button>
      </Stack>
    </Box>
  )
}

export default contrasena