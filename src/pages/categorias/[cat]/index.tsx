import React, { useEffect, useState } from "react";
import TopbarCateg from "@/components/TopbarCateg";
import Categoria from "@/components/Categoria";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

function main() {
  const router = useRouter();

  const cat = router.query.cat as string
//   const cat = "Abarrotes"

  return (
    <>
      <TopbarCateg titulo={cat} />
      <Box paddingTop={"62px"} margin={"16px"}>
        <Categoria categoria={cat}/>
      </Box>
    </>
  );
}

export default main;
