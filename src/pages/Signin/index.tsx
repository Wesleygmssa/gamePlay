import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Signin() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} />
    </View>
  );
}
