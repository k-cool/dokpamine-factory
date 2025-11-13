// components/thumbnail/PreviewSection.tsx
'use client';

import { useRef } from 'react';
import { useThumbnailStore } from '@/store/thumbnailStore';
import { ThumbnailCanvas } from './ThumbnailCanvas';

export function PreviewSection() {
  const previewRef = useRef<HTMLDivElement>(null);
  const { width, height } = useThumbnailStore();

  // Calculate scale to fit the preview
  const maxWidth = 800;
  const maxHeight = 600;
  const scale = Math.min(maxWidth / width, maxHeight / height, 1);

  return (
    <div className="flex w-full flex-col items-center justify-center bg-white p-6 dark:bg-black md:w-3/5">
      <div ref={previewRef} className="relative">
        <div
          className="overflow-hidden rounded-lg shadow-2xl"
          style={{
            width: `${width * scale}px`,
            height: `${height * scale}px`,
          }}
        >
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              width: `${width}px`,
              height: `${height}px`,
            }}
          >
            <ThumbnailCanvas />
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-zinc-500">
          Preview: {width} × {height}px (scaled to {Math.round(scale * 100)}%)
        </div>
      </div>
    </div>
  );
}
