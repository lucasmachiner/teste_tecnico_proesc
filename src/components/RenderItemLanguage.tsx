import { IDataItemLang } from "@/types"
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"

interface RenderItemLanguageProps {
  data: IDataItemLang,
  onPress: () => void,
  selected: boolean,
}

export const RenderItemLanguage = ({ data, onPress, selected }: RenderItemLanguageProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles(selected).container}>
      {data.flag}
      <View style={styles(selected).content}>
        <Text style={{
          fontSize: 18
        }}>
          {data.label}
        </Text>
        <Text style={{
          fontSize: 18,
          color: "grey"
        }}>
          {data.origin}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = (selected: boolean) => StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    borderWidth: selected ? 0.6 : 0,
    borderColor: selected ? "blue" : "none",
    borderRadius: selected ? 8 : 0,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});