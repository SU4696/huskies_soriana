import React from "react";
import BarcodeGenerator from "@/components/BarcodeGenerator";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Heading,
  Link,
  IconButton,
  Stack,
  Text
} from "@chakra-ui/react";
import {
  BiArrowBack
} from "react-icons/bi";


function barcode() {
  
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
        Código para pagar!
      </Heading>
    <Stack width={"100%"} spacing={5}
     alignItems={"center"}
     marginTop={"250px"}
    >
      <Text textColor={"#C80606"} fontSize="2xl" fontWeight={"bold"}>
        Total: 
      </Text>
    <BarcodeGenerator />
    </Stack>
  
    </Box>
  );
}

export default barcode;