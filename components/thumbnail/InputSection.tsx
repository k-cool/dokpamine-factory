// components/thumbnail/InputSection.tsx
'use client';

import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { useThumbnailStore } from '@/store/thumbnailStore';
import { ImageUpload } from './ImageUpload';
import { DownloadButton } from './DownloadButton';
import { ASPECT_RATIOS } from '@/types/thumbnail';
import { Button } from '@/components/ui/Button';

export function InputSection() {
  const {
    title,
    setTitle,
    subtitle,
    setSubtitle,
    width,
    height,
    setDimensions,
  } = useThumbnailStore();

  const handleAspectRatioClick = (aspectWidth: number, aspectHeight: number) => {
    setDimensions(aspectWidth, aspectHeight);
  };

  return (
    <div className="w-full space-y-6 overflow-y-auto bg-zinc-50 p-6 dark:bg-zinc-950 md:w-2/5">
      <div>
        <h2 className="mb-4 text-2xl font-bold">Thumbnail Settings</h2>
      </div>

      <ImageUpload />

      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={100}
          placeholder="Enter title..."
        />
      </div>

      <div>
        <Label htmlFor="subtitle">Subtitle</Label>
        <Input
          id="subtitle"
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          maxLength={200}
          placeholder="Enter subtitle..."
        />
      </div>

      <div>
        <Label>Aspect Ratio Presets</Label>
        <div className="flex gap-2">
          {ASPECT_RATIOS.map((ratio) => (
            <Button
              key={ratio.name}
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleAspectRatioClick(ratio.width, ratio.height)}
            >
              {ratio.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="width">Width (px)</Label>
          <Input
            id="width"
            type="number"
            value={width}
            onChange={(e) => setDimensions(Number(e.target.value), height)}
            min={400}
            max={2400}
            step={10}
          />
        </div>

        <div>
          <Label htmlFor="height">Height (px)</Label>
          <Input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setDimensions(width, Number(e.target.value))}
            min={300}
            max={1800}
            step={10}
          />
        </div>
      </div>

      <DownloadButton />
    </div>
  );
}
