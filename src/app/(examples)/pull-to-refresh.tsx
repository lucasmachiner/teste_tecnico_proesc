import { useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Linking, RefreshControl, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "expo-router";


export default function PullToRefresh() {
  const { t: translation } = useTranslation();
  const { theme } = useTheme();
  const navigation = useNavigation();


  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    //Add you actual logic to refresh the data here
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const dummyData = [
    {
      title: "First Item",
    },
    {
      title: "Second Item",
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
  }, [theme])


  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>Pull to Refresh</Text>
      <Text style={styles(theme).description}>
        {translation("examples.pullToRefresh.description")}
      </Text>
      <Text style={{ paddingBottom: 6, color: ThemeColors(theme).text }}>
        {translation("examples.pullToRefresh.pullDown")}
      </Text>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <View style={styles(theme).item}>
            <Text>{item.title}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles(theme).separator} />}
        keyExtractor={(item) => item.title}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <Text style={{ textAlign: "center", color: ThemeColors(theme).text }}>
        {translation("examples.pullToRefresh.example")}
        <Text
          style={{
            textDecorationLine: "underline",
            color: ThemeColors(theme).textDecorationLine
          }}
          onPress={() => Linking.openURL("https://reactnative.dev/docs/refreshcontrol")}
        >
          {" https://reactnative.dev/docs/refreshcontrol"}

        </Text>

      </Text>
    </View>
  );
}

const styles = (theme: string) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    width: 300,
    height: 100,
    flex: 1,
    alignItems: "center",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: ThemeColors(theme).item,
  },
  separator: {
    backgroundColor: ThemeColors(theme).separator,
    height: StyleSheet.hairlineWidth,
  },
});
