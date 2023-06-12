import React from "react";
import TopbarCateg from "@/components/TopbarCateg";
import Categoria from "@/components/Categoria";
import { Box } from "@chakra-ui/react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";

function main() {
  // const router = useRouter();
  const { user } = useAuth();
  // const cat = router.query.slug
  const cat = "Abarrotes"

  return (
    <>
    <ProtectedRoute>
      <TopbarCateg titulo={cat} />
      <Box paddingTop={"62px"} margin={"16px"}>
        <Categoria categoria={cat}/>
      </Box>
    </ProtectedRoute>
    </>
  );
}

export default main;
