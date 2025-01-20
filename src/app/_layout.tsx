import { Link, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons"
import { useTranslation } from "react-i18next";
import ThemeProvider, { useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "/",
};

export default function RootLayout() {
  const { t: translation } = useTranslation();
  const { theme } = useTheme();


  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            statusBarStyle: theme == "light" ? "dark" : "light",
            statusBarColor: ThemeColors(theme).background,
            headerTintColor: ThemeColors(theme).text,
            headerTitleStyle: {
              color: ThemeColors(theme).text,
            },
            headerStyle: {
              backgroundColor: ThemeColors(theme).primary,
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: translation("home.headerTitle"),
              headerRight(props) {
                return (
                  <Link
                    href={"settings"}>
                    <Ionicons name="settings" size={24} color={ThemeColors(theme).icon} />
                  </Link>
                )
              },
            }}
          />
          <Stack.Screen
            name="settings"
            options={{
              title: translation("settings.headerTitle"),

            }}
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
          <Stack.Screen
            name="modals/change-theme"
            options={{
              presentation: "transparentModal",
              animation: "slide_from_bottom",
              headerShown: false,
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
