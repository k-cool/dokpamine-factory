// components/thumbnail/ImageUpload.tsx
'use client';

import { ChangeEvent, useRef } from 'react';
import { Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { useThumbnailStore } from '@/store/thumbnailStore';

export function ImageUpload() {
  const { backgroundImage, setBackgroundImage } = useThumbnailStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload PNG, JPG, or WebP image');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    // Read file as data URL
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target?.result as string;
      setBackgroundImage(imageUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setBackgroundImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <Label htmlFor="background-image">Background Image</Label>
      <div className="space-y-2">
        <input
          ref={fileInputRef}
          type="file"
          id="background-image"
          accept="image/png,image/jpeg,image/jpg,image/webp"
          onChange={handleFileUpload}
          className="hidden"
        />
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="mr-2 h-4 w-4" />
          Upload Image
        </Button>
        {backgroundImage && (
          <div className="relative">
            <img
              src={backgroundImage}
              alt="Background preview"
              className="h-24 w-full rounded-lg object-cover"
            />
            <button
              onClick={handleRemoveImage}
              className="absolute right-2 top-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70"
              aria-label="Remove image"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
