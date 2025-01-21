import { Button } from "@/components/Button";
import { useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";
import React from "react";
import { useTranslation } from "react-i18next";
import { View, ToastAndroid, Linking, Text, StyleSheet } from "react-native";

export default function ToastAndroidExample() {
  const { t: translation } = useTranslation();
  const { theme } = useTheme();

  const showToast = () => {
    ToastAndroid.show(
      translation("examples.toastAndroid.messages.toastDefault"),
      ToastAndroid.SHORT
    );

  };

  const showToastWithGravityCenter = () => {
    ToastAndroid.showWithGravity(
      translation("examples.toastAndroid.messages.toastGravityCenter"),
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  const showToastWithGravityTop = () => {
    ToastAndroid.showWithGravity(
      translation("examples.toastAndroid.messages.toastGravityTop"),
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      translation("examples.toastAndroid.messages.toastGravityOffset"),
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };


  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>Toast Android</Text>
      <Text style={styles(theme).description}>
        {translation("examples.toastAndroid.description")}
      </Text>
      <Text style={{ paddingBottom: 6, color: ThemeColors(theme).text }}>
        {translation("examples.toastAndroid.orientation")}
      </Text>
      <View style={{ flex: 1, width: "100%", gap: 16 }}>
        <Button
          title={translation("examples.toastAndroid.toastDefault")}
          onPress={() => showToast()}
        />
        <Button
          title={translation("examples.toastAndroid.toastGravityCenter")}
          onPress={() => showToastWithGravityCenter()}
        />
        <Button
          title={translation("examples.toastAndroid.toastGravityTop")}
          onPress={() => showToastWithGravityTop()}
        />
        <Button
          title={translation("examples.toastAndroid.toastGravityOffset")}
          onPress={() => showToastWithGravityAndOffset()}
        />

      </View>

      <Text style={{ textAlign: "center", color: ThemeColors(theme).text }}>
        {translation("examples.toastAndroid.example")}
        <Text
          style={{
            textDecorationLine: "underline",
            color: ThemeColors(theme).textDecorationLine
          }}
          onPress={() => Linking.openURL("https://reactnative.dev/docs/toastandroid")}
        >
          {" https://reactnative.dev/docs/toastandroid"}

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