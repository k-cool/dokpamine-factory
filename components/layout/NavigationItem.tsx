// components/layout/NavigationItem.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideIcon } from 'lucide-react';
import { useUIStore } from '@/store/uiStore';

interface NavigationItemProps {
  icon: LucideIcon;
  label: string;
  route: string;
  enabled?: boolean;
}

export function NavigationItem({ icon: Icon, label, route, enabled = true }: NavigationItemProps) {
  const pathname = usePathname();
  const closeSidebar = useUIStore((state) => state.closeSidebar);
  const isActive = pathname === route;

  const handleClick = () => {
    if (window.innerWidth < 1024) {
      closeSidebar();
    }
  };

  if (!enabled) {
    return (
      <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-zinc-400 dark:text-zinc-600">
        <Icon className="h-6 w-6" />
        <span className="text-base">{label}</span>
        <span className="ml-auto text-xs">(Coming Soon)</span>
      </div>
    );
  }

  return (
    <Link
      href={route}
      onClick={handleClick}
      className={`
        flex items-center gap-3 rounded-lg px-4 py-3 text-base transition-colors
        ${isActive
          ? 'bg-zinc-100 font-medium text-foreground dark:bg-zinc-900 border-l-4 border-foreground'
          : 'text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-900/50'
        }
      `}
    >
      <Icon className="h-6 w-6" />
      <span>{label}</span>
    </Link>
  );
}
