import type { AppProps } from "next/app";
import NextHead from "next/head";
import {
  getInstalledInjectedConnectors,
  StarknetProvider,
} from "@starknet-react/core";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  const connectors = getInstalledInjectedConnectors();

  return (
    <StarknetProvider connectors={connectors} autoConnect>
      <ChakraProvider theme={theme}>
        <NextHead>
          <title>SNS</title>
        </NextHead>
        <Box
          bg='url("./bg.png")'
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          minH="100vh"
        >
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </StarknetProvider>
  );
}

export default MyApp;
