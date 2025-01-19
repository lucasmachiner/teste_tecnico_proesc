import React, { useState, useCallback } from "react";
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


type Item = {
  key: string;
  label: string;
};

function DragAndDrop() {
  const { t: translation } = useTranslation();

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
          style={isActive ? styles.active_button : styles.button}
          onLongPress={drag}
        >
          <Text style={styles.label}>{item.label} 🖐️</Text>
          {/* reorder icon */}
        </TouchableOpacity>
      );
    },
    []
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drag and drop to reorder</Text>
      <Text style={styles.description}>
        {translation('examples.dragAndDrop.description')}
      </Text>
      <Text style={{ paddingBottom: 10 }}>
        {translation("examples.dragAndDrop.reorder")}
      </Text>
      <Text style={{ paddingBottom: 8, textAlign: "center" }}>
        {translation("examples.dragAndDrop.example")}
        <Text
          onPress={() => Linking.openURL("https://github.com/computerjazz/react-native-draggable-flatlist")}
          style={{
            textDecorationLine: "underline",
            color: "blue"
          }}
        >
          {" https://github.com/computerjazz/react-native-draggable-flatlist"}
        </Text>
      </Text>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        onDragEnd={({ data }) => setData(data)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
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
  button: {
    flex: 1,
    height: 100,
    width: 300,
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
  active_button: {
    flex: 1,
    height: 100,
    width: "auto",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "lightgray",
  },
  label: {
    fontWeight: "bold",
  },
});

export default DragAndDrop;
