import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import Badge from "@/components/Badge";
import { RenderItemParams } from "@/types";


export default function RenderItem({ item, index }: RenderItemParams) {
  return (
    <Link
      key={index}
      asChild
      style={styles.item}
      href={{ pathname: item.route, params: { name: item.title } }}
    >
      <TouchableOpacity disabled={item.isComingSoon}>
        <View style={styles.container}>
          <View
            style={styles.content_item_title}
          >
            <Text style={styles.item_title}>{item.title}</Text>
          </View>

          <Text style={styles.item_description}>{item.description}</Text>
          <View
            style={styles.content_badges}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  item: {
    height: "auto",
    backgroundColor: "#FFFE",
    borderColor: "gray",
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
  },
  item_description: {
    fontSize: 18,
    color: "gray",
  },
  content_badges: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  }
});