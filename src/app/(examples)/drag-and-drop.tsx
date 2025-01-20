import { useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";
import React, { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
} from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { useNavigation } from "expo-router";

type Item = {
  key: string;
  label: string;
};

function DragAndDrop() {
  const { t: translation } = useTranslation();
  const { theme } = useTheme();
  const navigation = useNavigation();

  const DATA = [
    {
      key: "item-1",
      label: translation('examples.dragAndDrop.data.product_1'),
    },
    {
      key: "item-2",
      label: translation('examples.dragAndDrop.data.product_2'),
    },
  ];

  const [data, setData] = useState(DATA);

  const renderItem = useCallback(
    ({ item, drag, isActive }: RenderItemParams<Item>) => {
      return (
        <TouchableOpacity
          style={isActive ? styles(theme).active_button : styles(theme).button}
          onLongPress={drag}
        >
          <Text style={styles(theme).label}>{item.label} 🖐️</Text>
          {/* reorder icon */}
        </TouchableOpacity>
      );
    },
    []
  );

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
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>Drag and drop to reorder</Text>
      <Text style={styles(theme).description}>
        {translation('examples.dragAndDrop.description')}
      </Text>
      <Text style={{ paddingBottom: 10, color: ThemeColors(theme).text }}>
        {translation("examples.dragAndDrop.reorder")}
      </Text>
      <Text style={{ paddingBottom: 8, textAlign: "center", color: ThemeColors(theme).text }}>
        {translation("examples.dragAndDrop.example")}
        <Text
          onPress={() => Linking.openURL("https://github.com/computerjazz/react-native-draggable-flatlist")}
          style={{
            textDecorationLine: "underline",
            color: ThemeColors(theme).textDecorationLine,
          }}
        >
          {" https://github.com/computerjazz/react-native-draggable-flatlist"}
        </Text>
      </Text>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        ItemSeparatorComponent={() => <View style={styles(theme).separator} />}
        onDragEnd={({ data }) => setData(data)}
      />
    </View>
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
  button: {
    flex: 1,
    height: 100,
    width: 300,
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
  active_button: {
    flex: 1,
    height: 100,
    width: "auto",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: ThemeColors(theme).item,
  },
  label: {
    fontWeight: "bold",
    color: ThemeColors(theme).text
  },
});

export default DragAndDrop;
