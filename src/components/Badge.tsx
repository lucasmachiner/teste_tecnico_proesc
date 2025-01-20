import { useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";
import { StyleSheet, Text, View } from "react-native";

type BadgeProps = {
  label: string;
  variant?: "primary" | "secondary" | "disabled";
};

export default function Badge({ label, variant = "primary" }: BadgeProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles(theme).badge]}>
      <View style={[styles(theme).circle, styles(theme)[variant]]}></View>
      <Text style={styles(theme).badgeLabel}>{label}</Text>
    </View>
  );
}

const styles = (theme: string) => StyleSheet.create({
  badge: {
    borderColor: ThemeColors(theme).border,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    padding: 4,
  },
  badgeLabel: {
    color: ThemeColors(theme).text,
  },
  primary: {
    backgroundColor: ThemeColors(theme).third,
  },
  secondary: {
    backgroundColor: ThemeColors(theme).secondary,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  disabled: {
    backgroundColor: ThemeColors(theme).disabled,
  },
});
