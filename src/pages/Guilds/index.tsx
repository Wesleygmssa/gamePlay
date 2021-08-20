import React from "react";

import { View, FlatList } from "react-native";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

/**
 *  Guilds - Será utilizado para criar um componente de modal
 *  @param {*} data -
 */

export function Guilds() {
  //dados fake
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Guild data={item} />}
        showsVerticalScrollIndicator={false} // tirando barrinha da lateral
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  );
}
