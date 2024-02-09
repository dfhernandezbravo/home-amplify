import { Sidebar } from '@/domain/interfaces/sidebar';

export type SidebarState = {
  sideBarOptions: null | Sidebar[];
  loading: boolean;
  error: string;
};
