import { ReactNode, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Animated, { SlideInLeft } from "react-native-reanimated";
import { useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";

interface ExpandableContainerProps {
  title: string;
  children: ReactNode;
}

interface DescriptionProps {
  children: ReactNode;
}

const ExpandableContainer: React.FC<ExpandableContainerProps> & {
  Description: React.FC<DescriptionProps>;
} = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();


  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  return (
    <TouchableOpacity style={styles(theme).container} onPress={handlePress}>
      <View style={styles(theme).header}>
        <View style={styles(theme).titleContainer}>
          <Text style={styles(theme).title}>{title}</Text>
        </View>
        <AntDesign name={isOpen ? "up" : "down"} size={24} color={ThemeColors(theme).text} />
      </View>
      {isOpen && (
        <Animated.View
          entering={SlideInLeft.duration(500)}
        >
          {children}
        </Animated.View>
      )}
    </TouchableOpacity>
  );
};

ExpandableContainer.Description = ({ children }: DescriptionProps) => (
  <Text>{children}</Text>
);

const styles = (theme: string) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors(theme).item,
  },
  title: {
    fontSize: 16,
    fontWeight: "normal",
    color: ThemeColors(theme).text
  },
  description: {
    fontSize: 14,
    color: ThemeColors(theme).description,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  titleContainer: {
    flex: 1,
    marginRight: 10,

  },
});

export default ExpandableContainer;
