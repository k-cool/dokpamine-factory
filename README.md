# Dokpamine Factory

> **🚀 Live Demo**: [https://dokpamine-factory.vercel.app](https://dokpamine-factory.vercel.app)

A productivity-focused SaaS platform providing various tools to increase user efficiency. The initial release features a powerful thumbnail creator with plans for future tool expansion.

**Dokpamine Factory** is designed to streamline your content creation workflow by providing a suite of easy-to-use tools. Whether you're a content creator, marketer, or developer, our platform helps you create professional assets quickly and efficiently.

## ✨ Features

- **Thumbnail Creator**: Create beautiful, professional thumbnails for videos, blog posts, and social media
- **Modern UI**: Clean, responsive interface with dark mode support
- **Real-time Preview**: See your thumbnail changes instantly
- **Easy Export**: Download thumbnails as high-quality PNG files
- **Extensible Architecture**: Built to support multiple productivity tools

## 🎯 Quick Start

Try the live application: **[dokpamine-factory.vercel.app](https://dokpamine-factory.vercel.app)**

Or run it locally:

```bash
# Clone the repository
git clone <your-repo-url>
cd dokpamin-factory

# Install dependencies
bun install

# Start development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x with strict mode
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **Image Processing**: html-to-image
- **Icons**: lucide-react
- **Package Manager**: Bun

## 💻 Local Development

### Prerequisites

- Node.js 20.9+ (required for Next.js 16)
- Bun (recommended) or npm/yarn/pnpm

### Installation & Commands

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Start production server
bun start

# Run linter
bun run lint
```

## 📁 Project Structure

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

## 📖 Usage

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

## 📚 Documentation

- [SPEC.md](SPEC.md) - Comprehensive technical specification
- [CLAUDE.md](CLAUDE.md) - Development guidelines for Claude Code

## 🗺️ Future Roadmap

- Color palette generator
- Logo maker
- QR code generator
- Image compressor
- Screenshot annotator
- User authentication
- Cloud storage integration
- Template system

## 🚀 Deployment

This project is deployed on [Vercel](https://vercel.com):

**Production**: [https://dokpamine-factory.vercel.app](https://dokpamine-factory.vercel.app)

## 📄 License

MIT

---

Built with ❤️ using Next.js 16, React 19, and TypeScript
