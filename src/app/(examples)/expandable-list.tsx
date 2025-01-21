import React from "react";
import { FlatList, StyleSheet, Text, View, Linking } from "react-native";
import ExpandableContainer from "@/components/ExpandableContainer";
import Separator from "@/components/Separator";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";

type DataType = {
  title: string;
  content: string;
};


export default function SwipeToDelete() {
  const { t: translation } = useTranslation();
  const { theme } = useTheme();

  const data = Array<DataType>(10);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>Expandable list</Text>
      <Text style={styles(theme).description}>
        {translation("examples.expandableList.description")}
      </Text>
      <FlatList
        style={styles(theme).data_container}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View key={index}>
            <ExpandableContainer title={translation("examples.expandableList.step.title", { value: index + 1 })}>
              <Text style={{ padding: 10, color: ThemeColors(theme).text }}>
                {translation("examples.expandableList.step.content", { value: index + 1 })}
              </Text>
            </ExpandableContainer>
            {index !== data.length - 1 && <Separator />}
          </View>
        )}
      />
      <Text style={{ textAlign: "center", paddingTop: 8, color: ThemeColors(theme).text }}>
        {translation("examples.expandableList.example")}
        <Text
          onPress={() => Linking.openURL("https://snack.expo.dev/@adamgrzybowski/react-native-gesture-handler-demo?platform=ios")}
          style={{
            textDecorationLine: "underline",
            color: ThemeColors(theme).textDecorationLine,
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
    color: ThemeColors(theme).text,
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
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: ThemeColors(theme).item
  },
  leftAction: {
    flex: 1,
    backgroundColor: ThemeColors(theme).leftActionGreen,
    justifyContent: "center",
  },
  actionText: {
    color: ThemeColors(theme).primary,
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
    backgroundColor: ThemeColors(theme).primary,
  },
  separator: {
    backgroundColor: ThemeColors(theme).separator,
    height: StyleSheet.hairlineWidth,
  },
  fromText: {
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
  messageText: {
    //TODO -> aqui - transparent
    color: ThemeColors(theme).message,
    backgroundColor: "transparent",
  },
  dateText: {
    //TODO -> aqui - transparent
    backgroundColor: "transparent",
    position: "absolute",
    right: 20,
    top: 10,
    color: ThemeColors(theme).message,
    fontWeight: "bold",
  },

  FaqContainerStyle: {
    backgroundColor: ThemeColors(theme).primary,
    flexDirection: "column",
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    shadowRadius: 10,
    shadowColor: ThemeColors(theme).description,
    shadowOpacity: 0.23,
    shadowOffset: { width: -2, height: 4 },
    borderRadius: 10,
  },
});
