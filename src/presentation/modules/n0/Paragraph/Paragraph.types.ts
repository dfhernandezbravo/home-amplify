export type ParagraphContainer = {
  subtile: string;
  link: string;
  subtituleFontsize: string;
  position: string;
  colorSubtitle: string;
  text: string;
  textFontsize: string;
  colorText: string;
};

export type ParagraphStruct = {
  title: string;
  isActive: boolean;
  startDate: string;
  endDate: string;
  titleTag: string;
  paragraph: ParagraphContainer[];
};
