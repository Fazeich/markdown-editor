import React from "react";
import { ThemeProvider } from "@emotion/react";
import { useUnit } from "effector-react";
import { $main } from "./store/main.store";
import { DARK_THEME, LIGHT_THEME } from "./lib/theme";
import Layout from "./components/Layout";

export const App = () => {
  const { theme } = useUnit($main);

  return (
    <ThemeProvider theme={theme === "light" ? LIGHT_THEME : DARK_THEME}>
      <Layout />
    </ThemeProvider>
  );
};
