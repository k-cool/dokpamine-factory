// types/navigation.ts

import { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  id: string;
  label: string;
  icon: LucideIcon;
  route: string;
  enabled: boolean;
}

export interface SidebarState {
  open: boolean;
  activeRoute: string;
}
