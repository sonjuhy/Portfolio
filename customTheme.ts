"use client";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";

const useTheme = (prefersDarkMode: boolean) => {
  return useMemo(() => {
    return createTheme({
      palette: {
        mode: prefersDarkMode ? "dark" : "light",
      },
    });
  }, [prefersDarkMode]);
};

export default useTheme;
