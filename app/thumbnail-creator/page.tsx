// app/thumbnail-creator/page.tsx
import { ThumbnailCreator } from '@/components/thumbnail/ThumbnailCreator';

export const metadata = {
  title: 'Thumbnail Creator - Dokpamine Factory',
  description: 'Create beautiful thumbnails for your content',
};

export default function ThumbnailCreatorPage() {
  return <ThumbnailCreator />;
}
