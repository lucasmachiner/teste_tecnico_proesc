import { StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native"

import { styles } from "./styles"
import { useTheme } from "@/theme"

type Props = TouchableOpacityProps & {
  title: string,
  styleText?: StyleProp<TextStyle>
};

export function Button({ title, styleText, ...rest }: Props) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles(theme).button]} {...rest}>
      <Text style={styleText ?? styles(theme).text}>{title}</Text>
    </TouchableOpacity>
  )
}
