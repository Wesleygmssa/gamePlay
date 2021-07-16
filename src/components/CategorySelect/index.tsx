import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

//Passing the type directly
type Props = RectButtonProps;

export function CategorySelect({ ...rest }: Props) {
  return (
    <Text>Teste</Text>
    // <ScrollView
    //   horizontal
    //   style={styles.container}
    //   showsHorizontalScrollIndicator={false}
    //   contentContainerStyle={{ paddingRight: 40 }}
    // >
    //   {}
    // </ScrollView>
  );
}
