export interface NavbarItem {
  id: number;
  name: string;
  url: string;
  submenu: Array<[string, string]>;
}