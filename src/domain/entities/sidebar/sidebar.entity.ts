export enum To {
  Local = 'local',
  External = 'external',
}
export enum Target {
  Blank = '_blank',
  Parent = '_parent',
}
export interface Redirect {
  to: To;
  target: Target | null;
  url: string;
}
export interface Sidebar {
  id: string;
  label: string;
  isActive: boolean;
  isDefault: boolean;
  redirect: Redirect;
}
