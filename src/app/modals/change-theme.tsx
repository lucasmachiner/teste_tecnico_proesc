import ContainerModal from "@/components/ContainerModal";
import CustomSwitch from "@/components/Switch";
import { useTheme } from "@/theme";
import { View, Text } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ThemeColors } from "@/theme/colors";
import { useTranslation } from "react-i18next";

export default function ChangeTheme() {
  const { t: translation } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <ContainerModal title={translation("settings.modalChangeTheme.headerTitle")}>
      <View style={{
        width: "100%",
        marginVertical: 16,
        gap: 8,
      }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <Text style={{
            fontSize: 18,
            color: ThemeColors(theme).text
          }}>
            {translation("settings.modalChangeTheme.label",
              {
                enabled:
                  translation(`settings.modalChangeTheme.${theme == "light" ? "enable" : "disable"}`)
              }
            )
            }
          </Text>
          <CustomSwitch
            trackColor={{ false: ThemeColors(theme).item, true: ThemeColors(theme).background }}
            thumbColor={theme == "light" ? ThemeColors(theme).yellow : ThemeColors(theme).text}
            onValueChange={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
            value={theme != "light"}
            icon={
              <MaterialIcons
                name={theme == "light" ? "light-mode" : "dark-mode"}
                size={16} color={ThemeColors(theme).item}
              />
            }
          />
        </View>
      </View>
    </ContainerModal>
  )
}