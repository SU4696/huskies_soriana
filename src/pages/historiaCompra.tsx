import React from "react";
import HistorialCompra from "@/components/HistorialCompra";
import {
  Heading,
  Link,
  IconButton,
  Box
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import {
  BiArrowBack
} from "react-icons/bi";

function historiaCompra() {
  const emailR = localStorage.getItem("email") ?? "";

  return (
    <React.Fragment>
         <Box
      margin={"2rem"}
      padding={"calc(8px + 1.5625vw)"}
      display={"flex"}
      alignItems={"center"}
      flexWrap={"wrap"}
    >
     <Heading className={styles.greentext} fontSize={"27px"}>
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
       Historia de compra
      </Heading>
      </Box>
      <HistorialCompra email={emailR} />
     
    </React.Fragment>    
  )
}

export default historiaCompra
