import React, { useContext } from 'react'
import NumberCounter from './NumberCounter'
import { Image, chakra, Flex, Box, Link, Text, Button, Card, CardBody, Heading, CardFooter } from "@chakra-ui/react";
import { Producto } from "@/types/Producto";
import { ShopContext } from '@/context/ShopContext';


interface ListaCarritoProps {
  prod: Producto;
}

const ListaCarrito: React.FC<ListaCarritoProps> = ({prod}) => {
    const {idProductos, nombre, image, precio } = prod;
    const { removeFromCart, addToCart, cartItems } = useContext(ShopContext); 

  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        mx={2}
        my={4}
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={image}
            alt={nombre}
        />

        <Flex>
            <CardBody>
            <Heading size='sm' marginBottom={6}>{nombre}</Heading>

              <div className="counter">
                <button className="counter-button" onClick={() => removeFromCart(idProductos)}> - </button>

                <input type="number" className="counter-input" value={cartItems[idProductos]} readOnly />

                <button className="counter-button" onClick={() => addToCart(idProductos)}> 
                  +
                </button>
                <style jsx>{`
                  .counter {
                    display: flex;
                    align-items: center;
                  }

                  .counter-button {
                    background-color: #208220;
                    color: #fff;
                    border: none;
                    padding: 5px 12px;
                    font-size: 11px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                  }

                  .counter-button:hover {
                      background-color:   #165c16 ;
                  }

                  .counter-input {
                    width: 14px;
                    text-align: center;
                    margin: 0 16px;
                    border: none;
                    font-size: 12px;
                  }
                `}</style>
              </div>
              <br/> <br/>
              <Text marginTop={6} as='b'>${(precio*cartItems[idProductos]).toFixed(2)}</Text>
            </CardBody>
        </Flex>
      </Card>
    </>
  )
}

export default ListaCarrito