import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { PortfolioProvider } from "@/context/context";
import { prefix } from "@/config/config";

import "tailwindcss/tailwind.css";
import { Poppins } from "next/font/google";

import { Providers } from "@/context/redux/StoreProvider";

import "react-notion-x/src/styles.css";
import {
  PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";
// import theme from "@/customTheme";
import { createContext, useMemo, useEffect } from "react";
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from "next-themes";
import { useAppDispatch } from "@/context/redux/hooks";
import { changeDarkMode } from "@/context/redux/feature/pageSize/pageSlice";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});

const ColorModeContext = createContext({ toggleColorMode: () => {} });

// ThemeWrapper to sync next-themes with MUI and Redux
function ThemeWrapper({ Component, pageProps }: { Component: any, pageProps: any }) {
  const { resolvedTheme, setTheme } = useNextTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (resolvedTheme) {
      dispatch(changeDarkMode(resolvedTheme === "dark"));
    }
  }, [resolvedTheme, dispatch]);

  const mode = (resolvedTheme === "dark" ? "dark" : "light") as PaletteMode;

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary:
            mode === "light"
              ? {
                  main: "#000",
                  dark: "#fff",
                }
              : { main: "#fff", dark: "#000" },
        },
      }),
    [mode]
  );

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const colorMode = useMemo(
    () => ({
      toggleColorMode: toggleDarkMode,
    }),
    [resolvedTheme, setTheme]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} toggleDarkMode={toggleDarkMode} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <PortfolioProvider value={{ prefix }}>
        <div className={poppins.className}>
          <NextThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
            <ThemeWrapper Component={Component} pageProps={pageProps} />
          </NextThemeProvider>
        </div>
      </PortfolioProvider>
    </Providers>
  );
}
