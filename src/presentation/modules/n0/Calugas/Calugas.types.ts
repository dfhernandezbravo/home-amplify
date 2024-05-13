export type ImageStruct = {
  variant: string;
  alt: string;
  link: string;
  description: string;
  labelText: string;
  buttonText: string;
  image: string;
  imageMobile: string;
  isCircle: boolean;
};

export type TextStruct = {
  content: string;
  textColor: string;
  fontSize: string;
  bolder: boolean;
};

export type OnHover = {
  borderColor: string;
  textColor: string;
  bgColor: string;
  opacity: string;
  scale: number;
  shadow: boolean;
};

export type ButtonStruct = {
  icon: string;
  label: string;
  link: string;
  borderColor: string;
  textColor: string;
  fontSize: string;
  fontBolder: boolean;
  onHover: OnHover[];
  bgColor: string;
};

export type ContainerStruct = {
  onHover: OnHover[];
  width: number;
  columns: number;
  borderColor: string;
  bgColor: string;
  underLine: boolean;
  leftLine: boolean;
  rightLine: boolean;
  lineColor: string;
  link: string;
  image: ImageStruct[];
  text: TextStruct[];
  button: ButtonStruct[];
  fontColor: string;
  fontSize: string;
  variant: string;
  title: string;
  icon: string;
  btnColor: string;
  content: string;
};

export type CalugaStruct = {
  isActive: boolean;
  startDate: string;
  endDate: string;
  title: string;
  subtitle: string;
  itemsPerRow: number;
  container: ContainerStruct[];
};
