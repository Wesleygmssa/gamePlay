import React, { createContext, useContext, useState, ReactNode } from "react";
import * as AuthSession from "expo-auth-session";

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

type AuthContextData = {
  user: User;
};

type AuthProviderProps = {
  children: ReactNode;
};
//Criando contexto, estado inicial do contexto
// Passando a tipagem com as informações AuthContextData
const AuthContext = createContext({} as AuthContextData);

// Criando função para pegar elementos que ficam por dento do componente
// Para poder compartilhar a informações
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  //Necessário criar um try catch como estamos lidando com contexto externo
  function SignIn() {
    try {
      setLoading(true);
      const authUrl =
        "https://discord.com/api/oauth2/authorize?client_id=880439018783924264&redirect_uri=https%3A%2F%2Fauth.expo.io%2Fgameplay%2F&response_type=code&scope=identify%20connections%20email%20guilds";
      AuthSession.startAsync({ authUrl });
    } catch (error) {}
  }
  return (
    /* Estado atual do contexto */
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

// Criando nosso proprio Hook
// Padrão  de hook sempre começa com USE
// Refatorando codigo para deixar tudo centralizado
// Pegando useContext e AuthContexto para criação do hook
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
// Exportando  AuthProvider que ficar responsável para passar a informções
// global no aplicação
// O useAuth para receber as informações desse hook

/* Observação: o hook só deve ser importando dentro do compente para funcionar */
