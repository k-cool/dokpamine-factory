// components/thumbnail/ThumbnailCreator.tsx
'use client';

import { InputSection } from './InputSection';
import { PreviewSection } from './PreviewSection';

export function ThumbnailCreator() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <InputSection />
      <PreviewSection />
    </div>
  );
}
