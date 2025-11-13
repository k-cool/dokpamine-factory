// components/thumbnail/ThumbnailCanvas.tsx
'use client';

import { useThumbnailStore } from '@/store/thumbnailStore';

export function ThumbnailCanvas() {
  const {
    backgroundImage,
    backgroundColor,
    title,
    subtitle,
    width,
    height,
    titleFontSize,
    titleColor,
    subtitleFontSize,
    subtitleColor,
    textPosition,
  } = useThumbnailStore();

  const justifyMap = {
    top: 'justify-start',
    center: 'justify-center',
    bottom: 'justify-end',
  };

  return (
    <div
      id="thumbnail-canvas"
      className="relative overflow-hidden"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className={`flex h-full flex-col items-center ${justifyMap[textPosition]} p-8 text-center`}
      >
        {title && (
          <h1
            style={{
              fontSize: `${titleFontSize}px`,
              color: titleColor,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
            className="font-bold"
          >
            {title}
          </h1>
        )}
        {subtitle && (
          <p
            style={{
              fontSize: `${subtitleFontSize}px`,
              color: subtitleColor,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
            className="mt-4"
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
