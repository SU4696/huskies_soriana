import React from "react";
import TopbarCateg from "@/components/TopbarCateg";
import Categoria from "@/components/Categoria";
import ProductoCard from "@/components/ProductoCard";
import { Box } from "@chakra-ui/react";

function main() {
  return (
    <React.Fragment>
      <TopbarCateg titulo={"Todos"} />
      <Box paddingTop={"62px"}>
        <Categoria />
      </Box>
    </React.Fragment>
  );
}

export default main;
