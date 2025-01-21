import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { useTranslation } from "react-i18next";
import { Item } from "@/types";
import RenderItem from "@/components/RenderItem";
import { useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";
import { useEffect } from "react";
import { useNavigation } from "expo-router";

//Initialize translations
import "@/i18n";



export default function App() {
  const { t: translation } = useTranslation();
  const { theme } = useTheme();
  const navigation = useNavigation();

  const data: Item[] = [
    {
      title: translation('home.item_1.title'),
      description: translation('home.item_1.description'),
      route: "pull-to-refresh",
    },
    {
      title: translation('home.item_2.title'),
      description: translation('home.item_1.description'),
      route: "swipe-to-delete",
      badges: [
        {
          label: "react-native-gesture-handler",
          variant: "primary",
        },
        {
          label: "react-native-reanimated",
          variant: "secondary",
        },
      ],
    },
    {
      title: translation('home.item_3.title'),
      description: translation('home.item_3.description'),
      route: "drag-and-drop",
      badges: [
        {
          label: "react-native-gesture-handler",
          variant: "primary",
        },
        {
          label: "react-native-reanimated",
          variant: "secondary",
        },
        {
          label: "react-native-draggable-flatlist",
          variant: "primary",
        },
      ],
    },
    {
      title: translation('home.item_4.title'),
      description: translation('home.item_4.description'),
      route: "expandable-list",
      badges: [
        {
          label: "react-native-reanimated",
          variant: "secondary",
        },
      ],
    },
    {
      title: translation('home.item_5.title'),
      description: translation('home.item_5.description'),
      route: "toast-android",
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerTintColor: ThemeColors(theme).text,
      headerTitleStyle: {
        color: ThemeColors(theme).text,
      },
      headerStyle: {
        backgroundColor: ThemeColors(theme).primary,
      },
    })
  }, [translation, theme])


  return (
    <SafeAreaView style={{ backgroundColor: ThemeColors(theme).background }}>
      <ScrollView>
        <View style={styles(theme).container}>
          <Text style={styles(theme).title}>React Native Basics</Text>
          <Text style={styles(theme).description}>
            {translation('home.subtitle')}
          </Text>
        </View>
        {data.map((item, index) => {
          return <RenderItem key={index} index={index} item={item} />
        })}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = (theme: string) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: ThemeColors(theme).background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: ThemeColors(theme).text
  },
  description: {
    fontSize: 18,
    color: ThemeColors(theme).description,
    textAlign: "center",
    marginVertical: 20,
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
  item_title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  item_description: {
    fontSize: 18,
    color: ThemeColors(theme).description,
  },
});
