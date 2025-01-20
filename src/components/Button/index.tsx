import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { styles } from "./styles"
import { useTheme } from "@/theme"

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles(theme).button]} {...rest}>
      <Text style={[styles(theme).text]}>{title}</Text>
    </TouchableOpacity>
  )
}
