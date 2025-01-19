export interface Item {
  title: string;
  description: string;
  route: string;
  badges?: { label: string; variant: "primary" | "secondary" }[];
  isComingSoon?: boolean;
}

export type RenderItemParams = {
  item: Item;
  index: number;
};

export type LanguageType = {
  ptBr: "pt-BR",
  enEua: "en-US",
}

export interface IDataItemLang {
  flag: React.ReactNode,
  label: string,
  origin: string,
  lang: LanguageType[keyof LanguageType],
}

