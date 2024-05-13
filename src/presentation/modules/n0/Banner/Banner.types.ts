export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export type TextStruct = {
  title: string;
  titleTag: TitleTag;
  text: string;
};

export type BannerStruct = {
  title: string;
  image: string;
  mobileImage: string;
  alt: string;
  link: string;
  fullWidth: boolean;
  textAbove: TextStruct[];
};
