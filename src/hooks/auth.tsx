import React, { createContext, useContext, useState, ReactNode } from "react";

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
  const [user, setUser] = useState<User>({
    id: "1",
    username: "1",
    firstName: "Wesley",
    avatar: "guerra",
    email: "guerra_ssa@hotmail.com",
    token: "sdfsdfgsdf",
  });
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
