import React from "react";
import { Background } from "../components/Background";
import { useAuth } from "../hooks/auth";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { Signin } from "../pages/Signin";

export function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      <Background>{user.id ? <AppRoutes /> : <Signin />}</Background>
    </NavigationContainer>
  );
}
