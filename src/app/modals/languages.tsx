import { useEffect, useState } from "react";
import { View } from "react-native"
import ContainerModal from '@/components/ContainerModal';
import { BrazilFlag, UnitedStatesFlag } from "@/assets/svgs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import { IDataItemLang } from "@/types";
import { RenderItemLanguage } from "@/components/RenderItemLanguage";


export default function LanguageModal() {
  const { t: translation, i18n } = useTranslation();
  const [lang, setLang] = useState('');

  const dataItem: Array<IDataItemLang> = [
    { flag: <BrazilFlag height={32} width={32} />, label: translation("settings.modalLanguages.portuguese"), origin: "(BR)", lang: "pt-BR" },
    { flag: <UnitedStatesFlag height={32} width={32} />, label: translation("settings.modalLanguages.english"), origin: "(EUA)", lang: "en-US" },
  ];

  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
    setLang(lang);
  };

  useEffect(() => {
    AsyncStorage.getItem("language")
      .then((resp) => {
        setLang(resp ?? i18n.language);
      })
      .catch((e) => console.log(e));
  }, [])

  return (
    <ContainerModal title={translation("settings.modalLanguages.headerTitle")}>
      <View style={{
        width: "100%",
        marginVertical: 16,
        gap: 8,
      }}>
        {
          dataItem.map((item, index) => {
            return <RenderItemLanguage
              key={index}
              data={item}
              onPress={() => changeLanguage(item.lang)}
              selected={lang === item.lang}
            />
          })
        }
      </View>
    </ContainerModal>
  );
}
