// types/thumbnail.ts

export interface ThumbnailConfig {
  backgroundImage: string | null;
  backgroundColor: string;
  title: string;
  subtitle: string;
  width: number;
  height: number;
  titleFontSize: number;
  titleColor: string;
  subtitleFontSize: number;
  subtitleColor: string;
  textPosition: TextPosition;
}

export type TextPosition = 'center' | 'top' | 'bottom';

export interface AspectRatio {
  name: string;
  ratio: number;
  width: number;
  height: number;
}

export const ASPECT_RATIOS: AspectRatio[] = [
  { name: '16:9', ratio: 16/9, width: 1280, height: 720 },
  { name: '4:3', ratio: 4/3, width: 1024, height: 768 },
  { name: '1:1', ratio: 1, width: 1080, height: 1080 },
];
