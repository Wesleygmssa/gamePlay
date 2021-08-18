import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    width: "100%",
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: "center",
    fontFamily: theme.fonts.text500,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: theme.colors.line,
  },
  icon: {
    width: 24,
    height: 18,
  },
});
