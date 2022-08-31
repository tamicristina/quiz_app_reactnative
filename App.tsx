import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppRoutes from "./src/routes/app.routes";

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
