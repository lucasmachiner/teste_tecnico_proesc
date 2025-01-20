import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";

interface CustomSwitchProps {
  onValueChange: () => void,
  value: boolean,
  icon?: React.ReactNode,
  thumbColor?: string,
  trackColor?: {
    false?: string,
    true?: string
  }
}

const CustomSwitch = ({ onValueChange, value, icon, thumbColor, trackColor }: CustomSwitchProps) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles(theme).switch,
        {
          backgroundColor: value ?
            (trackColor?.true ?? ThemeColors(theme).leftActionGreen) :
            (trackColor?.false ?? ThemeColors(theme).grey)
        },
      ]}
      onPress={onValueChange}
      activeOpacity={0.8}
    >
      <Animated.View
        style={[
          styles(theme).thumb,
          {
            backgroundColor: thumbColor ?? ThemeColors(theme).background,
            alignSelf: value ? "flex-end" : "flex-start"
          },
        ]}
      >
        {icon ?? (
          <Ionicons
            name={value ? "checkmark" : "close"}
            size={16}
            color={ThemeColors(theme).icon}
          />
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = (theme: string) => StyleSheet.create({
  switch: {
    width: 50,
    height: 26,
    borderRadius: 15,
    padding: 4,
    justifyContent: "center",
    borderWidth: 0.3,
    borderColor: ThemeColors(theme).border,
    elevation: 3
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomSwitch;