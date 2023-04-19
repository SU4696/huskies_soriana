import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '@/styles/Home.module.css'
function contrasena() {
  return (
    <Box margin={"3rem"}>
      <Heading className={styles.greentext} fontSize={"2rem"}>Cambiar Contraseña</Heading>
      <Text>Correo</Text>
      <Input variant='flushed'  />
      <Button className={styles.greenbutton}>Cambiar Contraseña</Button>
    </Box>
  )
}

export default contrasena