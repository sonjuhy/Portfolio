import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { PortfolioProvider } from "@/context/context";
import { prefix } from "@/config/config";

import "tailwindcss/tailwind.css";
import { Poppins } from "next/font/google";

import { Providers } from "@/context/redux/StoreProvider";

import "react-notion-x/src/styles.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <div className={poppins.className} style={{ height: "100vh" }}>
        <PortfolioProvider value={{ prefix }}>
          <Component {...pageProps} />
          {/* <Footer /> */}
        </PortfolioProvider>
      </div>
    </Providers>
  );
}
