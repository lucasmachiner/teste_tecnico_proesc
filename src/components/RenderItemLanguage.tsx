import { useTheme } from "@/theme"
import { ThemeColors } from "@/theme/colors";
import { IDataItemLang } from "@/types"
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"

interface RenderItemLanguageProps {
  data: IDataItemLang,
  onPress: () => void,
  selected: boolean,
}

export const RenderItemLanguage = ({ data, onPress, selected }: RenderItemLanguageProps) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles(selected, theme).container}>
      {data.flag}
      <View style={styles(selected, theme).content}>
        <Text style={{
          fontSize: 18,
          color: ThemeColors(theme).text
        }}>
          {data.label}
        </Text>
        <Text style={{
          fontSize: 18,
          color: ThemeColors(theme).description
        }}>
          {data.origin}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = (selected: boolean, theme: string) => StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    borderWidth: selected ? 0.6 : 0,
    borderColor: selected ? ThemeColors(theme).secondary : "none",
    borderRadius: selected ? 8 : 0,
    gap: 8,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});