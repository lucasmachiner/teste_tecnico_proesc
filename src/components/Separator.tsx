import { useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";
import { View } from "react-native";

export default function Separator() {
  const { theme } = useTheme();

  return (
    <View
      style={{ height: 1, backgroundColor: ThemeColors(theme).separator, marginHorizontal: 10 }}
    />
  );
}
