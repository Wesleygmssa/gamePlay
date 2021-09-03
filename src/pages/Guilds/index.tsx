import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { View, FlatList } from "react-native";
import { GuildsPorps } from "../../components/Guild";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";
import { api } from "../../services/api";

import { styles } from "./styles";

/**
 *  Guilds - Será utilizado para criar um componente de modal
 *  @param {*} data -
 */

type Props = {
  handleGuildSelect: (guild: GuildsPorps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const [guilds, setGuilds] = useState<GuildsPorps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuild() {
    const response = await api.get("/users/@me/guilds");
    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuild();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
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
      )}
    </View>
  );
}
