import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import Badge from "@/components/Badge";
import { RenderItemParams } from "@/types";
import { useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";


export default function RenderItem({ item, index }: RenderItemParams) {
  const { theme } = useTheme();

  return (
    <Link
      key={index}
      asChild
      style={styles(theme).item}
      href={{ pathname: item.route, params: { name: item.title } }}
    >
      <TouchableOpacity disabled={item.isComingSoon}>
        <View style={styles(theme).container}>
          <View
            style={styles(theme).content_item_title}
          >
            <Text style={styles(theme).item_title}>{item.title}</Text>
          </View>

          <Text style={styles(theme).item_description}>{item.description}</Text>
          <View
            style={styles(theme).content_badges}
          >
            {item.badges &&
              item.badges.map((badge, index) => {
                return (
                  <Badge
                    key={index}
                    label={badge.label}
                    variant={badge.variant}
                  />
                );
              })}
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  )
};

const styles = (theme: string) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  item: {
    height: "auto",
    backgroundColor: ThemeColors(theme).item,
    borderColor: ThemeColors(theme).border,
    borderWidth: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
  },
  content_item_title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  item_title: {
    fontSize: 18,
    fontWeight: "bold",
    color: ThemeColors(theme).text,
  },
  item_description: {
    fontSize: 18,
    color: ThemeColors(theme).description,
  },
  content_badges: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  }
});