import { Link, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons"
import { useTranslation } from "react-i18next";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "/",
};

export default function RootLayout() {
  const { t: translation } = useTranslation();


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: translation("home.headerTitle"),
            headerRight(props) {
              return (
                <Link
                  href={"settings"}>
                  <Ionicons name="settings" size={24} color="grey" />
                </Link>
              )
            },
          }}
        />
        <Stack.Screen
          name="settings"
          options={{ title: translation("settings.headerTitle") }}
        />
        {/*MODALS */}
        <Stack.Screen
          name="modals/languages"
          options={{
            presentation: "transparentModal",
            animation: "slide_from_bottom",
            headerShown: false,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
