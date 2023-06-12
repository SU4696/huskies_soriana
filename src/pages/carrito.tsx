import Carrito from "@/components/Carrito";
import { Box, Heading, IconButton, Link } from "@chakra-ui/react";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

import styles from "@/styles/Home.module.css";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";

const carrito = () => {
  const { user } = useAuth();
  return (
    <React.Fragment>
      <ProtectedRoute>
        <Box
          marginX={"2rem"}
          marginTop={"2rem"}
          paddingX={"calc(8px + 1.5625vw)"}
          paddingTop={"calc(8px + 1.5625vw)"}
          display={"flex"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
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
          <Heading className={styles.greentext} fontSize="4xl">
            Carrito
          </Heading>
        </Box>

        <Carrito />
      </ProtectedRoute>
    </React.Fragment>
  );
};

export default carrito;
