import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/routes/app.routes";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
