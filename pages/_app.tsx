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
  PaletteOptions,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import theme from "@/customTheme";
import { createContext, useMemo, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  );

  const toggleDarkMode = () => {
    setMode(theme.palette.mode === "dark" ? "light" : "dark");
  };
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

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
  return (
    <Providers>
      <PortfolioProvider value={{ prefix }}>
        <ColorModeContext.Provider value={colorMode}>
          <div className={poppins.className}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} toggleDarkMode={toggleDarkMode} />
            </ThemeProvider>
          </div>
        </ColorModeContext.Provider>
      </PortfolioProvider>
    </Providers>
  );
}
