import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Animated, Linking } from "react-native";
import ExpandableContainer from "@/components/ExpandableContainer";
import Separator from "@/components/Separator";
import { useTranslation } from "react-i18next";

type DataType = {
  title: string;
  content: string;
};


export default function SwipeToDelete() {
  const { t: translation } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expandable list</Text>
      <Text style={styles.description}>
        {translation("examples.expandableList.description")}
      </Text>
      <FlatList
        style={styles.data_container}
        data={Array<DataType>(10)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View key={index}>
            <ExpandableContainer title={translation("examples.expandableList.step.title", { value: index + 1 })}>
              <Text style={{ padding: 10 }}>
                {translation("examples.expandableList.step.content", { value: index + 1 })}
              </Text>
            </ExpandableContainer>
            {index !== Array<DataType>(10).length - 1 && <Separator />}
          </View>
        )}
      />
      <Text style={{ textAlign: "center", paddingTop: 8, }}>
        {translation("examples.expandableList.example")}
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
  fromText: {
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
  messageText: {
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

  FaqContainerStyle: {
    // width: '100%',
    backgroundColor: "white",
    flexDirection: "column",
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    shadowRadius: 10,
    shadowColor: "grey",
    shadowOpacity: 0.23,
    shadowOffset: { width: -2, height: 4 },
    borderRadius: 10,
  },
});
