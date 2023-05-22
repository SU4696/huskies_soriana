import Carrito from '@/components/Carrito'
import TopbarPromo from '@/components/TopbarPromo'
import { Box } from '@chakra-ui/react'
import React from 'react'

const carrito = () => {
  return (
    <React.Fragment>
      <TopbarPromo  titulo={"Carrito"} />
      <Box paddingTop={"62px"}>
        <Carrito />
        </Box>
    </React.Fragment>
  )
}

export default carrito