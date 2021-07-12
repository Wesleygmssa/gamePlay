import React from "react";
import { Text, TextInput, View, Image, StatusBar } from "react-native";
import { styles } from "./styles";
import Illustration from "../../assets/illustration.png";

export function Signin() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image source={Illustration} style={styles.image} resizeMode="stretch" />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}suas jogatinhas{`\n`}facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
      </View>
    </View>
  );
}
