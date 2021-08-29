import React from "react";
import { Background } from "../components/Background";
import { useAuth } from "../hooks/auth";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { Signin } from "../pages/Signin";

export function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      <Background>{user.id ? <AuthRoutes /> : <Signin />}</Background>
    </NavigationContainer>
  );
}
