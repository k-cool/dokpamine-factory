// components/thumbnail/DownloadButton.tsx
'use client';

import { useState } from 'react';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';
import { Button } from '@/components/ui/Button';
import { useThumbnailStore } from '@/store/thumbnailStore';

export function DownloadButton() {
  const [isGenerating, setIsGenerating] = useState(false);
  const { width, height } = useThumbnailStore();

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const element = document.getElementById('thumbnail-canvas');
      if (!element) throw new Error('Canvas not found');

      const dataUrl = await toPng(element, {
        quality: 0.95,
        width,
        height,
        pixelRatio: 2, // For higher quality
      });

      saveAs(dataUrl, `thumbnail-${Date.now()}.png`);
    } catch (error) {
      console.error('Failed to generate thumbnail:', error);
      alert('Failed to generate thumbnail. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isGenerating}
      loading={isGenerating}
      className="w-full"
    >
      {isGenerating ? 'Generating...' : 'Download PNG'}
    </Button>
  );
}
