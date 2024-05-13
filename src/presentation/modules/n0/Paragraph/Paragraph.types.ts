export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

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
  titleTag: TitleTag;
  paragraph: ParagraphContainer[];
};
