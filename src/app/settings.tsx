import { FlashList } from "@shopify/flash-list";
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter, useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";



export default function SettingsScreen() {
  const { t: translation, i18n } = useTranslation();
  const route = useRouter();
  const navigation = useNavigation();

  const dataSettings = [
    {
      icon: <FontAwesome name="language" size={16} color="#FAFAFA" />,
      label: translation("settings.language")
    }
  ];

  useEffect(() => {
    navigation.setOptions({
      title: translation("settings.headerTitle")
    })
  }, [translation])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlashList
        data={dataSettings}
        estimatedItemSize={dataSettings.length}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => route.push('modals/languages')}
              style={{
                borderBottomWidth: 0.5,
                borderColor: "grey"
              }}>
              <View style={styles.container}>
                <View style={styles.content}>
                  <View style={styles.icon}>
                    {item.icon}
                  </View>
                  <Text style={styles.label}>
                    {item.label}
                  </Text>
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={24} />
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "grey"
  },
  label: {
    fontSize: 18
  }
})
