// components/layout/Header.tsx
'use client';

import { Menu } from 'lucide-react';
import { useUIStore } from '@/store/uiStore';

export function Header() {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="flex h-16 items-center px-4">
        <button
          onClick={toggleSidebar}
          aria-label="Toggle menu"
          className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900"
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="ml-4 text-xl font-bold">Dokpamine Factory</h1>
      </div>
    </header>
  );
}
