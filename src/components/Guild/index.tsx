import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from "react-native";
import { styles } from "./styles";
import { GuildIcon } from "../GuildIcon";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

/**
 *  Criando typagem para indentifcar os dados
 * @type {*} GuildsPorps - Dados que vamos receber Dentro do DATA
 * @type {*} Porps -Recebe @TouchableOpacityProps que identifica elementos do TouchableOpacity..
 *  e criamos essa typagem para poder passar para componente
 * @param {*} TouchableOpacityProps - Aqui são as propriedades dos elemento TouchableOpacity;
 */

export type GuildsPorps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Porps = TouchableOpacityProps & {
  data: GuildsPorps;
};

/**
 *  Componente de associação a algum servidor
 * @param {*} data -
 */

export function Guild({ data, ...rest }: Porps) {
  // console.log(data);
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.type}>
            {data.owner ? "Administrador" : "Convidado"}
          </Text>
        </View>
      </View>
      <Feather name="chevron-right" color={theme.colors.heading} size={24} />
    </TouchableOpacity>
  );
}
