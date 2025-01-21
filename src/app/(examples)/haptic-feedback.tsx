import { useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";
import { useTranslation } from "react-i18next";
import { View, Text, Linking, StyleSheet } from "react-native";
import * as Haptics from 'expo-haptics';
import { Button } from "@/components/Button";

export default function HapticFeedback() {
  const { t: translation } = useTranslation();
  const { theme } = useTheme();

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>Haptics</Text>
      <Text style={styles(theme).description}>
        {translation("examples.hapticFeedback.description")}
      </Text>
      <Text style={{ paddingBottom: 6, color: ThemeColors(theme).text }}>
        {translation("examples.hapticFeedback.orientation")}
      </Text>
      <Text style={styles(theme).subtitle}>
        {translation("examples.hapticFeedback.hapticSelect")}
      </Text>
      <View style={styles(theme).buttonContainer}>
        <Button
          title={translation("examples.hapticFeedback.selection")}
          onPress={() => Haptics.selectionAsync()}
        />
      </View>
      <Text style={styles(theme).subtitle}>
        {translation("examples.hapticFeedback.hapticNotification")}
      </Text>
      <View style={styles(theme).buttonContainer}>
        <Button
          style={styles(theme).button}
          title={translation("examples.hapticFeedback.buttonSuccess")}
          onPress={
            () =>
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              )
          }
        />
        <Button
          style={styles(theme).button}
          title={translation("examples.hapticFeedback.buttonError")}
          onPress={
            () =>
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Error
              )
          }
        />
        <Button
          style={styles(theme).button}
          title={translation("examples.hapticFeedback.buttonWarning")}
          onPress={
            () =>
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Warning
              )
          }
        />
      </View>
      <Text style={styles(theme).subtitle}>
        {translation("examples.hapticFeedback.hapticImpact")}
      </Text>
      <View style={styles(theme).buttonContainer}>
        <Button
          style={styles(theme).button}
          title={translation("examples.hapticFeedback.light")}
          onPress={
            () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
          }
        />
        <Button
          style={styles(theme).button}
          title={translation("examples.hapticFeedback.medium")}
          onPress={
            () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
          }
        />
        <Button
          style={styles(theme).button}
          title={translation("examples.hapticFeedback.heavy")}
          onPress={
            () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
          }
        />
      </View>

      <Text style={{ textAlign: "center", paddingTop: 8, color: ThemeColors(theme).text }}>
        {translation("examples.hapticFeedback.example")}
        <Text
          onPress={() => Linking.openURL("https://docs.expo.dev/versions/latest/sdk/haptics/")}
          style={{
            textDecorationLine: "underline",
            color: ThemeColors(theme).textDecorationLine,
          }}
        >
          {" https://docs.expo.dev/versions/latest/sdk/haptics/"}
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
    color: ThemeColors(theme).text,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: ThemeColors(theme).text,
  },
  description: {
    fontSize: 18,
    color: ThemeColors(theme).description,
    textAlign: "center",
    marginVertical: 20,
  },
  buttonContainer: {
    width: "100%",
    gap: 8,
    marginTop: 10,
    marginBottom: 30,
    justifyContent: 'space-between',
    flexDirection: "row",
    flex: 1
  },
  button: {
    width: "auto",
    backgroundColor: ThemeColors(theme).secondary,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8, height: 48,
  }
});