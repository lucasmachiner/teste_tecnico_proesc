import { FlashList } from "@shopify/flash-list";
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter, useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";



export default function SettingsScreen() {
  const { t: translation } = useTranslation();
  const route = useRouter();
  const navigation = useNavigation();

  const { theme, toggleTheme } = useTheme();

  const dataSettings = [
    {
      icon: <FontAwesome name="language" size={16} color={ThemeColors(theme).primary} />,
      label: translation("settings.language"),
      route: "modals/languages"
    },
    {
      icon: <MaterialCommunityIcons name="theme-light-dark" size={16} color={ThemeColors(theme).primary} />,
      label: translation("settings.modalChangeTheme.headerTitle"),
      route: "modals/change-theme"
    }
  ];

  useEffect(() => {
    navigation.setOptions({
      title: translation("settings.headerTitle"),
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
    <SafeAreaView style={{ flex: 1, backgroundColor: ThemeColors(theme).background }}>
      <FlashList
        data={dataSettings}
        estimatedItemSize={dataSettings.length}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => route.push(item.route)}
              style={{
                borderBottomWidth: 0.5,
                borderColor: ThemeColors(theme).border
              }}>
              <View style={styles(theme).container}>
                <View style={styles(theme).content}>
                  <View style={styles(theme).icon}>
                    {item.icon}
                  </View>
                  <Text style={styles(theme).label}>
                    {item.label}
                  </Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color={ThemeColors(theme).text}
                />
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </SafeAreaView>
  );
}

const styles = (theme: string) => StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    margin: 12,
    alignItems: "center"
  },
  content: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  icon: {
    borderRadius: 8,
    padding: 8,
    // TODO -> aqui - description
    backgroundColor: ThemeColors(theme).description
  },
  label: {
    fontSize: 18,
    color: ThemeColors(theme).text,
  }
})
