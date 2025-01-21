import { ThemeColors } from "@/theme/colors"
import { StyleSheet } from "react-native"


export const styles = (theme: string) => StyleSheet.create({
  button: {
    height: 48,
    width: "100%",
    backgroundColor: ThemeColors(theme).secondary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  text: {
    color: ThemeColors(theme).text,
    fontSize: 16
  },
})
