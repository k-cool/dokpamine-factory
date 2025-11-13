# Dokpamine Factory

A productivity-focused SaaS platform providing various tools to increase user efficiency. The initial release features a powerful thumbnail creator with plans for future tool expansion.

## Features

- **Thumbnail Creator**: Create beautiful, professional thumbnails for videos, blog posts, and social media
- **Modern UI**: Clean, responsive interface with dark mode support
- **Real-time Preview**: See your thumbnail changes instantly
- **Easy Export**: Download thumbnails as high-quality PNG files
- **Extensible Architecture**: Built to support multiple productivity tools

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x with strict mode
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **Image Processing**: html-to-image
- **Icons**: lucide-react
- **Package Manager**: Bun

## Getting Started

### Installation

```bash
# Install dependencies
bun install
```

### Development

```bash
# Start development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Build for Production

```bash
# Build the application
bun run build

# Start production server
bun start
```

### Linting

```bash
# Run ESLint
bun run lint
```

## Project Structure

```
dokpamin-factory/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home dashboard
│   └── thumbnail-creator/ # Thumbnail creator route
├── components/            # React components
│   ├── layout/           # Header, Sidebar, Navigation
│   ├── thumbnail/        # Thumbnail creator components
│   └── ui/               # Reusable UI components
├── store/                # Zustand stores
├── types/                # TypeScript type definitions
├── SPEC.md               # Technical specification
└── CLAUDE.md             # Development guidelines
```

## Usage

### Creating Thumbnails

1. Navigate to the Thumbnail Creator from the home page or sidebar
2. Upload a background image (optional)
3. Enter your title and subtitle
4. Adjust dimensions using presets or custom values
5. Preview your thumbnail in real-time
6. Click "Download PNG" to save your thumbnail

### Supported Image Formats

- PNG
- JPG/JPEG
- WebP
- Maximum file size: 5MB

## Documentation

- [SPEC.md](SPEC.md) - Comprehensive technical specification
- [CLAUDE.md](CLAUDE.md) - Development guidelines for Claude Code

## Future Roadmap

- Color palette generator
- Logo maker
- QR code generator
- Image compressor
- Screenshot annotator
- User authentication
- Cloud storage integration
- Template system

## Contributing

This project follows the specifications outlined in [SPEC.md](SPEC.md). Please review the technical documentation before contributing.

## License

MIT
