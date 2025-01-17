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
