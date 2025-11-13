// store/thumbnailStore.ts
'use client';

import { create } from 'zustand';

interface ThumbnailState {
  // Background
  backgroundImage: string | null;
  backgroundColor: string;

  // Text content
  title: string;
  subtitle: string;

  // Dimensions
  width: number;
  height: number;

  // Styling
  titleFontSize: number;
  titleColor: string;
  subtitleFontSize: number;
  subtitleColor: string;
  textPosition: 'center' | 'top' | 'bottom';

  // Actions
  setBackgroundImage: (image: string | null) => void;
  setBackgroundColor: (color: string) => void;
  setTitle: (title: string) => void;
  setSubtitle: (subtitle: string) => void;
  setDimensions: (width: number, height: number) => void;
  setTitleStyle: (fontSize: number, color: string) => void;
  setSubtitleStyle: (fontSize: number, color: string) => void;
  setTextPosition: (position: 'center' | 'top' | 'bottom') => void;
  resetThumbnail: () => void;
}

const defaultState = {
  backgroundImage: null,
  backgroundColor: '#1a1a1a',
  title: '',
  subtitle: '',
  width: 1280,
  height: 720,
  titleFontSize: 48,
  titleColor: '#ffffff',
  subtitleFontSize: 24,
  subtitleColor: '#ffffff',
  textPosition: 'center' as const,
};

export const useThumbnailStore = create<ThumbnailState>((set) => ({
  ...defaultState,

  setBackgroundImage: (image) => set({ backgroundImage: image }),
  setBackgroundColor: (color) => set({ backgroundColor: color }),
  setTitle: (title) => set({ title }),
  setSubtitle: (subtitle) => set({ subtitle }),
  setDimensions: (width, height) => set({ width, height }),
  setTitleStyle: (fontSize, color) => set({ titleFontSize: fontSize, titleColor: color }),
  setSubtitleStyle: (fontSize, color) => set({ subtitleFontSize: fontSize, subtitleColor: color }),
  setTextPosition: (position) => set({ textPosition: position }),
  resetThumbnail: () => set(defaultState),
}));
