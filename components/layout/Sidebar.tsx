// components/layout/Sidebar.tsx
'use client';

import { useEffect } from 'react';
import { Home, ImagePlus, Plus } from 'lucide-react';
import { useUIStore } from '@/store/uiStore';
import { NavigationItem } from './NavigationItem';

export function Sidebar() {
  const sidebarOpen = useUIStore((state) => state.sidebarOpen);
  const closeSidebar = useUIStore((state) => state.closeSidebar);

  // Close sidebar on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeSidebar();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeSidebar]);

  return (
    <>
      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-72
          transform border-r border-zinc-200 bg-white transition-transform duration-300
          dark:border-zinc-800 dark:bg-black
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <nav className="flex flex-col gap-2 p-4">
          <NavigationItem icon={Home} label="Home" route="/" />
          <NavigationItem icon={ImagePlus} label="Thumbnail Creator" route="/thumbnail-creator" />
          <NavigationItem icon={Plus} label="More Tools" route="#" enabled={false} />
        </nav>
      </aside>
    </>
  );
}
