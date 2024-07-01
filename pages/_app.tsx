import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = extendTheme({
  fonts: {
    body: dmSans.style.fontFamily,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <style jsx global>{`
        html {
          font-family: ${dmSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
