import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import { AuthContextProvider } from "@/context/AuthContext";
import  ProtectedRoute  from "@/components/ProtectedRoute";
import { ShopContextProvider } from "@/context/ShopContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    //Connection with login accoutn data
    //Default Footer
    
    <AuthContextProvider>
      <ChakraProvider>
        <ShopContextProvider>
          
            <Component {...pageProps} />
            
          
          <Footer />
        </ShopContextProvider> 
      </ChakraProvider>  
    </AuthContextProvider>

  );
}
