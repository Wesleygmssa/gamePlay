import React from "react";

import { View, FlatList } from "react-native";
import { GuildsPorps } from "../../components/Guild";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

/**
 *  Guilds - Será utilizado para criar um componente de modal
 *  @param {*} data -
 */

type Props = {
  handleGuildSelect: (guild: GuildsPorps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  //dados fake
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    {
      id: "2",
      name: "Galera do Game",
      icon: null,
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        showsVerticalScrollIndicator={false} // tirando barrinha da lateral
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 69, paddingTop: 103 }} //
        ListHeaderComponent={() => <ListDivider isCentered />} // inserindo uma linha no top: ;
        style={styles.guilds}
      />
    </View>
  );
}
