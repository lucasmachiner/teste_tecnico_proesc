import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Animated, Linking, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import AppleStyleSwipeableRow from "@/components/AppleStyleSwipeableRow";
import GmailStyleSwipeableRow from "@/components/GmailStyleSwipeableRow";
import BasicSwipeableRow from "@/components/BasicSwipeableRow";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";
import { useNavigation } from "expo-router";

type Data = {
  title: string;
  content: string;
};

type RowProps = {
  item: Data;
};

type SwipeableRowProps = {
  item: Data;
  index: number;
};

export default function SwipeToDelete() {
  const { t: translation } = useTranslation();
  const { theme } = useTheme();
  const navigation = useNavigation();


  const DATA: Data[] = [
    {
      title: translation('examples.swipeToDelete.data.swipeLeft.title'),
      content: translation('examples.swipeToDelete.data.swipeLeft.content'),
    },
    {
      title: translation('examples.swipeToDelete.data.swipeLeftOrRight_1.title'),
      content: translation('examples.swipeToDelete.data.swipeLeftOrRight_1.content'),
    },
    {
      title: translation('examples.swipeToDelete.data.swipeLeftOrRight_2.title'),
      content: translation('examples.swipeToDelete.data.swipeLeftOrRight_2.content'),
    },
  ];


  const Row = ({ item }: RowProps) => (
    <RectButton style={styles(theme).rectButton} onPress={() => Alert.alert(item.title)}>
      <Text style={styles(theme).titleText}>{item.title}</Text>
      <Text style={styles(theme).contentText} numberOfLines={3}>
        {item.content}
      </Text>
    </RectButton>
  );

  const SwipeableRow = ({ item, index }: SwipeableRowProps) => {
    if (index == 0) {
      return (
        <BasicSwipeableRow
          translations={{ something: translation("examples.swipeToDelete.data.swipeLeft.something") }}
          theme={theme}
        >
          <Row item={item} />
        </BasicSwipeableRow>
      );
    } else if (index % 2 === 0) {
      return (
        <AppleStyleSwipeableRow
          theme={theme}
          translations={{
            archive: translation("examples.swipeToDelete.data.swipeLeftOrRight_2.archive"),
            flag: translation("examples.swipeToDelete.data.swipeLeftOrRight_2.flag"),
            more: translation("examples.swipeToDelete.data.swipeLeftOrRight_2.more")
          }}
        >
          <Row item={item} />
        </AppleStyleSwipeableRow>
      );
    } else {
      return (
        <GmailStyleSwipeableRow
          theme={theme}
          translations={{
            something: translation('examples.swipeToDelete.data.swipeLeftOrRight_1.something'),
            delete: translation('examples.swipeToDelete.data.swipeLeftOrRight_1.delete')
          }}
        >
          <Row item={item} />
        </GmailStyleSwipeableRow>
      );
    }
  };

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>Swipe To Delete</Text>
      <Text style={styles(theme).description}>
        {translation('examples.swipeToDelete.description')}
      </Text>
      <Text style={{ paddingBottom: 10 }}>
        {translation('examples.swipeToDelete.swipItems')}
      </Text>
      <View style={styles(theme).data_container}>
        <FlatList
          data={DATA}
          ItemSeparatorComponent={() => <View style={styles(theme).separator} />}
          renderItem={({ item, index }) => (
            <SwipeableRow item={item} index={index} />
          )}
          keyExtractor={(item, index) => `content ${index}`}
        />
      </View>

      <Text style={{ textAlign: "center", color: ThemeColors(theme).text }}>
        {translation('examples.swipeToDelete.example')}
        <Text
          onPress={() => Linking.openURL("https://snack.expo.dev/@adamgrzybowski/react-native-gesture-handler-demo?platform=ios")}
          style={{
            textDecorationLine: "underline",
            color: ThemeColors(theme).textDecorationLine
          }}
        >
          {" https://snack.expo.dev/@adamgrzybowski/react-native-gesture-handler-demo?platform=ios"}
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
  data_container: {
    flex: 1,
    width: "100%",
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
    width: "auto",
    height: 100,
    //TODO -> aqui
    // backgroundColor: "pink",
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  leftAction: {
    flex: 1,
    backgroundColor: ThemeColors(theme).leftActionGreen,
    justifyContent: "center",
  },
  actionText: {
    //TODO -> aqui - primary
    color: ThemeColors(theme).text,
    fontWeight: "600",
    padding: 20,
  },
  rectButton: {
    flex: 1,
    height: 100,
    width: "auto",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    flexDirection: "column",
    //TODO -> aqui - primary
    backgroundColor: ThemeColors(theme).item,
  },
  separator: {
    //TODO -> aqui - separator
    backgroundColor: ThemeColors(theme).separator,
    height: StyleSheet.hairlineWidth,
  },
  titleText: {
    fontWeight: "bold",
    backgroundColor: "transparent",
    color: ThemeColors(theme).text
  },
  contentText: {
    color: ThemeColors(theme).message,
    backgroundColor: "transparent",
  },
  dateText: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 20,
    top: 10,
    color: ThemeColors(theme).message,
    fontWeight: "bold",
  },
});
