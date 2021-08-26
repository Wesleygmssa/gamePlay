import React, { createContext, useContext, useState, ReactNode } from "react";
import * as AuthSession from "expo-auth-session";
import {
  CDN_IMAGE,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
} from "../configs";
import { api } from "../services/api";

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
  signIn: () => Promise<void>;
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

  // Necessário criar um try catch como estamos lidando com contexto externo
  // função tem que ser async pós esta fazendo uma consulta externa e aguardando uma responsta.
  async function signIn() {
    try {
      setLoading(true);
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}F&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      console.log(authUrl);

      AuthSession.startAsync({ authUrl });
    } catch (error) {}
  }
  return (
    /* Estado atual do contexto */
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
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
