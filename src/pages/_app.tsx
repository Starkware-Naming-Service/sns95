import type { AppProps } from "next/app";
import NextHead from "next/head";
import {
  getInstalledInjectedConnectors,
  StarknetProvider,
} from "@starknet-react/core";

function MyApp({ Component, pageProps }: AppProps) {
  const connectors = getInstalledInjectedConnectors();

  return (
    <StarknetProvider connectors={connectors} autoConnect>
      {/* <div style={{ backgroundColor: "#018281" }}> */}
        <NextHead>
          <title>StarkNet ❤️ React</title>
        </NextHead>
        <Component {...pageProps} />
      {/* </div> */}
    </StarknetProvider>
  );
}

export default MyApp;
