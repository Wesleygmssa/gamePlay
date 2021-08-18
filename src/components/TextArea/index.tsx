import React from "react";
import { TextInputProps, View, TextInput } from "react-native";

import { styles } from "./styles";

export function TextArea({ ...rest }: TextInputProps) {
  return <TextInput style={styles.conatiner} {...rest} />;
}
