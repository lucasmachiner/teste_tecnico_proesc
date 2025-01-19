import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Animated, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import AppleStyleSwipeableRow from "@/components/AppleStyleSwipeableRow";
import GmailStyleSwipeableRow from "@/components/GmailStyleSwipeableRow";
import BasicSwipeableRow from "@/components/BasicSwipeableRow";
import { useTranslation } from "react-i18next";

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
    <RectButton style={styles.rectButton} onPress={() => alert(item.title)}>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.contentText} numberOfLines={3}>
        {item.content}
      </Text>
    </RectButton>
  );

  const SwipeableRow = ({ item, index }: SwipeableRowProps) => {
    if (index == 0) {
      return (
        <BasicSwipeableRow
          translations={{ something: translation("examples.swipeToDelete.data.swipeLeft.something") }}
        >
          <Row item={item} />
        </BasicSwipeableRow>
      );
    } else if (index % 2 === 0) {
      return (
        <AppleStyleSwipeableRow
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
    <View style={styles.container}>
      <Text style={styles.title}>Swipe To Delete</Text>
      <Text style={styles.description}>
        {translation('examples.swipeToDelete.description')}
      </Text>
      <Text style={{ paddingBottom: 10 }}>
        {translation('examples.swipeToDelete.swipItems')}
      </Text>
      <View style={styles.data_container}>
        <FlatList
          data={DATA}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item, index }) => (
            <SwipeableRow item={item} index={index} />
          )}
          keyExtractor={(item, index) => `content ${index}`}
        />
      </View>

      <Text style={{ textAlign: "center" }}>
        {translation('examples.swipeToDelete.example')}
        <Text
          onPress={() => Linking.openURL("https://snack.expo.dev/@adamgrzybowski/react-native-gesture-handler-demo?platform=ios")}
          style={{
            textDecorationLine: "underline",
            color: "blue"
          }}
        >
          {" https://snack.expo.dev/@adamgrzybowski/react-native-gesture-handler-demo?platform=ios"}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  data_container: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    marginVertical: 20,
  },
  item: {
    width: "auto",
    height: 100,
    backgroundColor: "pink",
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  leftAction: {
    flex: 1,
    backgroundColor: "#388e3c",
    justifyContent: "center",
  },
  actionText: {
    color: "white",
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
    backgroundColor: "white",
  },
  separator: {
    backgroundColor: "rgb(200, 199, 204)",
    height: StyleSheet.hairlineWidth,
  },
  titleText: {
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
  contentText: {
    color: "#999",
    backgroundColor: "transparent",
  },
  dateText: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 20,
    top: 10,
    color: "#999",
    fontWeight: "bold",
  },
});
