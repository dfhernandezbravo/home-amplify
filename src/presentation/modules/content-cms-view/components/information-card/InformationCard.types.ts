export type TextItems = {
  text: string;
  formatText: string;
};
export type CardItems = {
  textItems: TextItems[];
  color: string;
  link: string;
  icon: string;
};

export interface InformationCardStruct {
  items: CardItems[];
}
export enum TextTypesStruct {
  Bolder = 'title',
  Normal = 'normalText',
  higlight = 'highlightedText',
}
