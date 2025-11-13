# Dokpamine Factory - Technical Specification

## 1. Project Overview

**Project Name**: Dokpamine Factory
**Description**: A productivity-focused SaaS platform providing various tools to increase user efficiency. The initial release focuses on a thumbnail creator with plans for future tool expansion.

**Vision**: Create an extensible, user-friendly platform where users can access multiple productivity tools under one unified interface.

**Initial Features**:
- Home dashboard (landing page)
- Thumbnail creator tool
- Expandable navigation system for future tools

---

## 2. Technology Stack

### Core Framework
- **Next.js**: 16.0.1 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x (strict mode enabled)
- **Node.js**: 20.9+ (required for Next.js 16)

### State Management
- **Zustand**: ^5.0.0 (lightweight global state management)

### Styling
- **Tailwind CSS**: v4 (using `@tailwindcss/postcss`)
- **PostCSS**: For Tailwind processing

### Image Processing
- **html-to-image**: ^1.11.0 (PNG generation from DOM)
- **file-saver**: ^2.0.5 (download functionality)

### UI Components
- **lucide-react**: ^0.460.0 (icon library for menu and UI)
- Custom components built with Tailwind CSS

### Development Tools
- **ESLint**: v9 with Next.js config
- **Bun**: Package manager and runtime

---

## 3. Architecture Design

### 3.1 Application Structure

```
dokpamin-factory/
├── app/
│   ├── layout.tsx                    # Root layout with navigation
│   ├── page.tsx                      # Home dashboard
│   ├── thumbnail-creator/
│   │   └── page.tsx                  # Thumbnail creator page
│   ├── globals.css                   # Global styles
│   └── api/                          # Future API routes if needed
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                # Main header with hamburger menu
│   │   ├── Sidebar.tsx               # Expandable side navigation
│   │   └── NavigationItem.tsx        # Reusable nav item with icon
│   │
│   ├── thumbnail/
│   │   ├── ThumbnailCreator.tsx      # Main container component
│   │   ├── InputSection.tsx          # Left side: input controls
│   │   ├── PreviewSection.tsx        # Right side: live preview
│   │   ├── ImageUpload.tsx           # Background image upload
│   │   ├── TextInput.tsx             # Title/subtitle inputs
│   │   ├── DimensionControls.tsx     # Width/height inputs
│   │   ├── DownloadButton.tsx        # PNG download button
│   │   └── ThumbnailCanvas.tsx       # Rendered preview component
│   │
│   └── ui/
│       ├── Button.tsx                # Reusable button component
│       ├── Input.tsx                 # Reusable input component
│       └── Label.tsx                 # Reusable label component
│
├── store/
│   ├── thumbnailStore.ts             # Zustand store for thumbnail data
│   ├── uiStore.ts                    # UI state (sidebar open/closed)
│   └── types.ts                      # TypeScript types for stores
│
├── lib/
│   ├── thumbnailGenerator.ts         # PNG generation logic
│   └── utils.ts                      # Utility functions
│
├── hooks/
│   ├── useThumbnailPreview.ts        # Custom hook for preview
│   └── useMediaQuery.ts              # Responsive breakpoint hook
│
└── types/
    ├── thumbnail.ts                  # Thumbnail-related types
    └── navigation.ts                 # Navigation types
```

### 3.2 Routing Structure (App Router)

```
/ (Home Dashboard)
├── /thumbnail-creator (Thumbnail Creator Tool)
└── [Future tool routes will be added here]
```

---

## 4. Feature Specifications

### 4.1 Header & Navigation

#### Header Component
- **Position**: Fixed at top of viewport
- **Content**:
  - Left: Hamburger menu icon (☰)
  - Center: "Dokpamine Factory" logo/text
  - Right: (Reserved for future user menu)
- **Behavior**:
  - Clicking hamburger toggles sidebar
  - Header remains visible on scroll
  - Responsive: Full width on all devices

#### Sidebar Navigation
- **State**: Collapsible (open/closed)
- **Default**: Closed on mobile, open on desktop (≥1024px)
- **Width**:
  - Closed: 0px (hidden)
  - Open: 280px
- **Animation**: Smooth slide-in/out (300ms transition)
- **Backdrop**: Semi-transparent overlay on mobile when open
- **Content**:
  - Navigation items with icons and labels
  - Active state highlighting
  - Hover effects

#### Navigation Items
| Icon | Label | Route | Description |
|------|-------|-------|-------------|
| 🏠 Home | Home | `/` | Landing page/dashboard |
| 🎨 Thumbnail | Thumbnail Creator | `/thumbnail-creator` | Thumbnail creation tool |
| ➕ (Placeholder) | Coming Soon | N/A | Future tools (grayed out) |

**Navigation Item Specs**:
- Icon size: 24px
- Label: 16px font
- Padding: 12px vertical, 16px horizontal
- Active state: Background color change + left border accent
- Hover: Background color lightens
- Click: Navigate to route + close sidebar on mobile

### 4.2 Home Dashboard

**Purpose**: Landing page introducing Dokpamine Factory

**Content**:
- Hero section with project description
- Grid of available tools (cards)
- Quick access buttons to tools
- Future: Usage stats, recent projects

**Layout**:
- Centered content, max-width 1200px
- Responsive grid: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)

### 4.3 Thumbnail Creator Page

#### Layout Structure

**Desktop (≥768px)**:
```
┌─────────────────────────────────────────┐
│              Header                      │
├──────────────┬──────────────────────────┤
│              │                          │
│   Input      │      Preview             │
│   Section    │      Section             │
│   (Left)     │      (Right)             │
│              │                          │
│   40%        │      60%                 │
└──────────────┴──────────────────────────┘
```

**Mobile (<768px)**:
```
┌─────────────────────┐
│      Header         │
├─────────────────────┤
│                     │
│   Input Section     │
│   (Full Width)      │
│                     │
├─────────────────────┤
│                     │
│   Preview Section   │
│   (Full Width)      │
│                     │
└─────────────────────┘
```

#### Input Section (Left Side)

**Components**:

1. **Background Image Upload**
   - Component: File input with custom styling
   - Accepts: PNG, JPG, JPEG, WebP
   - Max size: 5MB
   - Preview: Small thumbnail of uploaded image
   - Default: Solid color background option

2. **Title Input**
   - Type: Text input
   - Max length: 100 characters
   - Placeholder: "Enter title..."
   - Real-time updates to preview

3. **Subtitle Input**
   - Type: Text input
   - Max length: 200 characters
   - Placeholder: "Enter subtitle..."
   - Real-time updates to preview

4. **Width Control**
   - Type: Number input
   - Range: 400px - 2400px
   - Default: 1280px
   - Step: 10px
   - Updates preview dimensions

5. **Height Control**
   - Type: Number input
   - Range: 300px - 1800px
   - Default: 720px
   - Step: 10px
   - Updates preview dimensions

6. **Aspect Ratio Presets** (Enhancement)
   - Quick buttons: 16:9, 4:3, 1:1, Custom
   - Auto-calculates dimensions

7. **Download Button**
   - Label: "Download PNG"
   - Style: Primary button, full width
   - Behavior: Generates and downloads PNG file
   - Filename format: `thumbnail-{timestamp}.png`
   - Loading state during generation

**Input Section Styling**:
- Background: Light gray/white
- Padding: 24px
- Gap between inputs: 16px
- Scrollable if content exceeds viewport height

#### Preview Section (Right Side)

**Content**:
- Real-time rendered thumbnail
- Scale-to-fit display (maintain aspect ratio)
- Centered in available space
- Background: Checkerboard pattern (to show transparency)

**Preview Canvas Specs**:
- Renders actual thumbnail at specified dimensions
- Contains:
  - Background image (if uploaded) or solid color
  - Title text (customizable font, size, color)
  - Subtitle text (customizable font, size, color)
  - Optional: Overlay gradient, filters

**Preview Behavior**:
- Updates in real-time (debounced 200ms)
- Shows loading state during updates
- Error handling for invalid inputs

**Styling Defaults**:
- Title: 48px, bold, white text with shadow
- Subtitle: 24px, regular, white text with shadow
- Text positioning: Center or customizable
- Background color: #1a1a1a (if no image)

---

## 5. State Management (Zustand)

### 5.1 Thumbnail Store

**File**: `store/thumbnailStore.ts`

```typescript
interface ThumbnailState {
  // Background
  backgroundImage: string | null;          // Base64 or URL
  backgroundColor: string;                  // Hex color

  // Text content
  title: string;
  subtitle: string;

  // Dimensions
  width: number;
  height: number;

  // Styling (future enhancements)
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
```

**Default Values**:
```typescript
{
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
  textPosition: 'center'
}
```

### 5.2 UI Store

**File**: `store/uiStore.ts`

```typescript
interface UIState {
  // Sidebar
  sidebarOpen: boolean;

  // Actions
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
}
```

**Usage Pattern**:
```typescript
// In components - use selectors for optimal performance
const title = useThumbnailStore((state) => state.title);
const setTitle = useThumbnailStore((state) => state.setTitle);

// Never do this (causes unnecessary re-renders)
const store = useThumbnailStore();
```

---

## 6. Component Specifications

### 6.1 Header Component

**File**: `components/layout/Header.tsx`

**Props**: None (uses UI store)

**Responsibilities**:
- Render hamburger menu button
- Display app logo/title
- Toggle sidebar on hamburger click

**Implementation Details**:
```tsx
'use client'

export function Header() {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white dark:bg-black">
      <div className="flex h-16 items-center px-4">
        <button onClick={toggleSidebar} aria-label="Toggle menu">
          {/* Hamburger icon */}
        </button>
        <h1 className="ml-4 text-xl font-bold">Dokpamine Factory</h1>
      </div>
    </header>
  );
}
```

### 6.2 Sidebar Component

**File**: `components/layout/Sidebar.tsx`

**Props**: None (uses UI store)

**State**:
- Subscribe to `sidebarOpen` from UI store
- Track current route for active state

**Features**:
- Smooth slide animation
- Backdrop overlay on mobile
- Click outside to close (mobile)
- Escape key to close
- Active route highlighting

**Implementation Details**:
```tsx
'use client'

export function Sidebar() {
  const sidebarOpen = useUIStore((state) => state.sidebarOpen);
  const closeSidebar = useUIStore((state) => state.closeSidebar);

  return (
    <>
      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-72
        transform border-r bg-white transition-transform dark:bg-black
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <nav className="flex flex-col gap-2 p-4">
          {/* Navigation items */}
        </nav>
      </aside>
    </>
  );
}
```

### 6.3 ThumbnailCreator Component

**File**: `components/thumbnail/ThumbnailCreator.tsx`

**Props**: None (main container)

**Layout**:
- Flex container with responsive direction
- Split view on desktop, stacked on mobile

**Implementation**:
```tsx
'use client'

export function ThumbnailCreator() {
  return (
    <div className="flex min-h-screen flex-col pt-16 md:flex-row">
      <InputSection />
      <PreviewSection />
    </div>
  );
}
```

### 6.4 InputSection Component

**File**: `components/thumbnail/InputSection.tsx`

**Responsibilities**:
- Render all input controls
- Update Zustand store on changes
- Validate inputs

**Implementation Pattern**:
```tsx
'use client'

export function InputSection() {
  const { title, setTitle, subtitle, setSubtitle } = useThumbnailStore();

  return (
    <div className="w-full space-y-4 overflow-y-auto p-6 md:w-2/5">
      <ImageUpload />

      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={100}
        />
      </div>

      {/* Other inputs */}

      <DownloadButton />
    </div>
  );
}
```

### 6.5 PreviewSection Component

**File**: `components/thumbnail/PreviewSection.tsx`

**Responsibilities**:
- Display real-time preview
- Scale to fit available space
- Handle loading states

**Implementation Pattern**:
```tsx
'use client'

export function PreviewSection() {
  const previewRef = useRef<HTMLDivElement>(null);
  const { width, height } = useThumbnailStore();

  return (
    <div className="flex w-full items-center justify-center bg-zinc-50 p-6 dark:bg-zinc-900 md:w-3/5">
      <div
        ref={previewRef}
        style={{
          maxWidth: '100%',
          aspectRatio: `${width} / ${height}`
        }}
      >
        <ThumbnailCanvas />
      </div>
    </div>
  );
}
```

### 6.6 ThumbnailCanvas Component

**File**: `components/thumbnail/ThumbnailCanvas.tsx`

**Props**: None (reads from store)

**Responsibilities**:
- Render thumbnail with all styling
- This is the component converted to PNG

**Implementation**:
```tsx
'use client'

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
    textPosition
  } = useThumbnailStore();

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className={`
        flex h-full flex-col items-center justify-${textPosition}
        p-8 text-center
      `}>
        {title && (
          <h1
            style={{
              fontSize: `${titleFontSize}px`,
              color: titleColor,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
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
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
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
```

### 6.7 DownloadButton Component

**File**: `components/thumbnail/DownloadButton.tsx`

**Responsibilities**:
- Generate PNG from ThumbnailCanvas
- Trigger download
- Show loading state

**Implementation**:
```tsx
'use client'

import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

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
        pixelRatio: 2 // For higher quality
      });

      saveAs(dataUrl, `thumbnail-${Date.now()}.png`);
    } catch (error) {
      console.error('Failed to generate thumbnail:', error);
      // Show error toast/notification
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isGenerating}
      className="w-full"
    >
      {isGenerating ? 'Generating...' : 'Download PNG'}
    </Button>
  );
}
```

---

## 7. Responsive Design Specifications

### 7.1 Breakpoints (Tailwind)

```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (desktops) */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### 7.2 Layout Behavior

| Screen Size | Sidebar | Thumbnail Layout | Preview Visibility |
|-------------|---------|------------------|-------------------|
| < 768px | Overlay | Stacked (vertical) | Always visible |
| 768px - 1024px | Overlay | Side-by-side 50/50 | Always visible |
| ≥ 1024px | Persistent (optional) | Side-by-side 40/60 | Always visible |

### 7.3 Component Responsive Classes

**Header**:
```tsx
className="h-12 md:h-16"  // Smaller on mobile
```

**Sidebar**:
```tsx
className="w-64 md:w-72 lg:w-80"  // Width varies by screen
```

**ThumbnailCreator**:
```tsx
className="flex-col md:flex-row"  // Stacked mobile, row desktop
```

**InputSection**:
```tsx
className="w-full md:w-2/5 lg:w-1/3"  // Width adjusts
```

**PreviewSection**:
```tsx
className="w-full md:w-3/5 lg:w-2/3"  // Complement to input
```

---

## 8. File Upload Specification

### 8.1 Client-Side Upload

**Approach**: File reader API (no server upload initially)

**Implementation**:
```tsx
const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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
```

### 8.2 Future Server Upload

For persistent storage, implement Server Action:

**File**: `app/actions/uploadImage.ts`
```typescript
'use server'

export async function uploadImage(formData: FormData) {
  const file = formData.get('image') as File;

  // Validate
  // Save to storage (S3, Cloudinary, etc.)
  // Return URL

  return { success: true, url: 'https://...' };
}
```

---

## 9. Performance Optimization

### 9.1 Target Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.0s
- **Preview Update Latency**: < 300ms

### 9.2 Optimization Strategies

**Code Splitting**:
```tsx
// Lazy load thumbnail creator
const ThumbnailCreator = dynamic(
  () => import('@/components/thumbnail/ThumbnailCreator'),
  { ssr: false }
);
```

**Debounced Updates**:
```tsx
const debouncedUpdate = useMemo(
  () => debounce((value: string) => setTitle(value), 200),
  []
);
```

**Memoization**:
```tsx
const ThumbnailCanvas = memo(function ThumbnailCanvas() {
  // Component implementation
});
```

**Image Optimization**:
- Use Next.js `Image` component where applicable
- Compress uploaded backgrounds before display
- Lazy load non-critical images

---

## 10. Security Considerations

### 10.1 File Upload Security

- **Client-side validation**: File type, size
- **Content Security Policy**: Restrict inline scripts
- **CORS**: Configure for image sources
- **Sanitization**: Sanitize user text inputs to prevent XSS

### 10.2 Future Considerations

- **Authentication**: User login system
- **Rate limiting**: Prevent abuse of download feature
- **Content moderation**: Filter inappropriate content
- **Data privacy**: GDPR compliance for user data

---

## 11. Future Extensibility

### 11.1 Adding New Tools

**Steps to add a new tool**:

1. **Create route**: `app/[tool-name]/page.tsx`
2. **Add navigation item**: Update sidebar with icon and route
3. **Create components**: `components/[tool-name]/`
4. **Create store** (if needed): `store/[tool-name]Store.ts`
5. **Update types**: Add types in `types/[tool-name].ts`

### 11.2 Planned Tools

- **Color Palette Generator**
- **Logo Maker**
- **QR Code Generator**
- **Image Compressor**
- **Screenshot Annotator**

### 11.3 Extensibility Patterns

**Plugin Architecture** (future):
```typescript
interface Tool {
  id: string;
  name: string;
  icon: LucideIcon;
  route: string;
  component: React.ComponentType;
}

const tools: Tool[] = [
  {
    id: 'thumbnail',
    name: 'Thumbnail Creator',
    icon: ImageIcon,
    route: '/thumbnail-creator',
    component: ThumbnailCreator
  },
  // Add more tools here
];
```

---

## 12. Development Workflow

### 12.1 Setup

```bash
# Install dependencies
bun install

# Add required packages
bun add zustand html-to-image file-saver lucide-react
bun add -d @types/file-saver
```

### 12.2 Development Commands

```bash
# Start dev server
bun dev

# Run linter
bun run lint

# Build for production
bun run build

# Start production server
bun start
```

### 12.3 Development Phases

**Phase 1**: Core Infrastructure
- ✅ Header component with hamburger menu
- ✅ Sidebar navigation with routing
- ✅ Home dashboard page
- ✅ Zustand stores setup

**Phase 2**: Thumbnail Creator (MVP)
- ✅ Input section with all controls
- ✅ Real-time preview
- ✅ PNG download functionality
- ✅ Responsive layout

**Phase 3**: Enhancements
- Advanced styling options (fonts, colors, gradients)
- Template system
- Preset dimensions
- Undo/redo functionality

**Phase 4**: Platform Features
- User authentication
- Save/load projects
- Cloud storage
- Sharing capabilities

---

## 13. Testing Strategy

### 13.1 Unit Tests (Future)

- Test Zustand stores
- Test utility functions
- Test component logic

### 13.2 Integration Tests (Future)

- Test thumbnail generation flow
- Test navigation system
- Test file upload handling

### 13.3 E2E Tests (Future)

- Test complete user journey
- Test cross-browser compatibility
- Test responsive behavior

---

## 14. Deployment Considerations

### 14.1 Environment Variables

```env
# Future variables
NEXT_PUBLIC_APP_URL=https://dokpamine-factory.com
NEXT_PUBLIC_STORAGE_URL=https://...
DATABASE_URL=...
```

### 14.2 Build Optimization

- Enable React Compiler in `next.config.ts`
- Use Turbopack for production builds
- Optimize images with Next.js Image
- Implement proper caching headers

### 14.3 Hosting Recommendations

- **Vercel**: Optimal for Next.js (automatic optimizations)
- **Netlify**: Alternative with good DX
- **AWS/GCP**: For custom infrastructure needs

---

## 15. Documentation

### 15.1 Code Documentation

- JSDoc comments for all public functions
- TypeScript interfaces for all data structures
- README updates for each new feature

### 15.2 User Documentation (Future)

- User guide for each tool
- Video tutorials
- FAQ section
- API documentation (if public API)

---

## 16. Success Metrics

### 16.1 Technical Metrics

- **Bundle size**: < 300KB (gzipped)
- **Lighthouse score**: > 90 across all categories
- **Load time**: < 3s on 3G
- **Error rate**: < 0.1%

### 16.2 User Metrics (Future)

- **Thumbnail generation time**: < 1s average
- **User retention**: Track weekly active users
- **Feature adoption**: Percentage using each tool
- **Download success rate**: > 99%

---

## Appendix A: TypeScript Interfaces

### Thumbnail Types

```typescript
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
```

### Navigation Types

```typescript
// types/navigation.ts

import { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  id: string;
  label: string;
  icon: LucideIcon;
  route: string;
  enabled: boolean;
}

export interface SidebarState {
  open: boolean;
  activeRoute: string;
}
```

---

## Appendix B: Styling Guide

### Color Palette

```css
/* Light Mode */
--background: #ffffff;
--foreground: #171717;
--primary: #0070f3;
--secondary: #7928ca;
--accent: #ff0080;
--muted: #f5f5f5;
--border: #e5e5e5;

/* Dark Mode */
--background: #0a0a0a;
--foreground: #ededed;
--primary: #0070f3;
--secondary: #7928ca;
--accent: #ff0080;
--muted: #1a1a1a;
--border: #333333;
```

### Typography Scale

```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

---

## Appendix C: Component API Reference

### Button Component

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
```

### Input Component

```typescript
interface InputProps {
  type?: 'text' | 'number' | 'email' | 'password';
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  maxLength?: number;
}
```

---

## Conclusion

This specification provides a comprehensive blueprint for building the Dokpamine Factory SaaS platform. The architecture is designed for scalability, maintainability, and future extensibility. The initial focus on the thumbnail creator establishes patterns that can be replicated for additional productivity tools.

**Next Steps**:
1. Review and approve this specification
2. Set up project repository
3. Implement core infrastructure (Phase 1)
4. Build thumbnail creator MVP (Phase 2)
5. Iterate based on user feedback

**Questions or Clarifications**: Please review this spec and provide feedback on any sections that need adjustment or additional detail.
