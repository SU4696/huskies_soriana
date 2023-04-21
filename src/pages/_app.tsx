import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import { AuthContextProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </AuthContextProvider>
  );
}
