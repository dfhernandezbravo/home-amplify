// export type ContainerStruct = {
//   text: string;
//   link: string;
//   bgColor: string;
//   fontColor: string;
//   fontSize: string;
//   variant: string;
//   title: string;
//   icon: string;
//   btnColor: string;
// };

import { ContainerStruct } from '../Calugas/Calugas.types';

export type IconCardStruct = {
  isActive: boolean;
  startDate: string;
  endDate: string;
  title: string;
  subtitle: string;
  itemsPerRow: number;
  container: ContainerStruct[];
};
