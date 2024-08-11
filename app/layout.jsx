"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./styles/theme";
import { useState } from "react";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  const [mode, setMode] = useState("light");

  const theme = mode === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <html lang="en">
      <body sx={{ backgroundColor: theme.palette.background.paper }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header toggleTheme={toggleTheme} mode={mode} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
