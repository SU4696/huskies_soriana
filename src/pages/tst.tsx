import { Box, GridItem, SimpleGrid, chakra, Center, Flex, VisuallyHidden, Input, Button, Image } from '@chakra-ui/react';
import React from 'react'

function tst() {
  return (
    <Box px={8} py={24} mx="auto">
  <SimpleGrid
    alignItems="center"
    w={{
      base: "full",
      xl: 11 / 12,
    }}
    columns={{
      base: 1,
      lg: 11,
    }}
    gap={{
      base: 0,
      lg: 24,
    }}
    mx="auto"
  >
    <GridItem
      colSpan={{
        base: "auto",
        lg: 7,
      }}
      
    >
      <Center>
       <Image
            src={"/assets/sorianaLogo.png"}
            alt="sorianaLogo"
            width={"70%"}
            height={"70%"}
          />
          </Center>
    </GridItem>
    <GridItem
      colSpan={{
        base: "auto",
        md: 4,
      }}
      bottom={"0px"}
    >
      <Box as="form" mb={6} borderRadius={"3rem"}  backgroundColor={"#208220"}>
        <Center
          
        >
          <chakra.p pt={2}>Inicio de sesión</chakra.p>
        </Center>
        <SimpleGrid
          columns={1}
          px={6}
          py={4}
          spacing={4}
          borderBottom="solid 1px"
          
        >
          <Flex>
            <VisuallyHidden>Email Address</VisuallyHidden>
            <Input mt={0} type="email" placeholder="Email Address" />
          </Flex>
          <Flex>
            <VisuallyHidden>Password</VisuallyHidden>
            <Input mt={0} type="password" placeholder="Password" />
          </Flex>
          <Button backgroundColor={"white"} color={"#208220"} w="full" py={2} type="submit">
            Sign up for free
          </Button>
        </SimpleGrid>
        
      </Box>
     
    </GridItem>
  </SimpleGrid>
</Box>

  );
}

export default tst