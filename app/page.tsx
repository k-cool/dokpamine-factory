import Link from 'next/link';
import { ImagePlus, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-950">
      <main className="mx-auto max-w-6xl px-6 py-24">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4" />
            <span>Boost Your Productivity</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            Dokpamine Factory
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-zinc-600 dark:text-zinc-400">
            A productivity-focused platform providing various tools to increase your efficiency.
            Create stunning thumbnails, and more coming soon.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Thumbnail Creator Tool */}
          <Link
            href="/thumbnail-creator"
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="mb-4 inline-flex rounded-lg bg-foreground/5 p-3">
              <ImagePlus className="h-8 w-8 text-foreground" />
            </div>
            <h2 className="mb-2 text-2xl font-semibold text-foreground">
              Thumbnail Creator
            </h2>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              Create beautiful, professional thumbnails for your videos, blog posts, and social media content.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
              Get Started
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>

          {/* Coming Soon Tools */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 opacity-60 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4 inline-flex rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
              <Sparkles className="h-8 w-8 text-zinc-400" />
            </div>
            <h2 className="mb-2 text-2xl font-semibold text-foreground">
              More Tools
            </h2>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              Additional productivity tools are coming soon.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400">
              Coming Soon
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 opacity-60 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4 inline-flex rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
              <Sparkles className="h-8 w-8 text-zinc-400" />
            </div>
            <h2 className="mb-2 text-2xl font-semibold text-foreground">
              More Tools
            </h2>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              Additional productivity tools are coming soon.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400">
              Coming Soon
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link href="/thumbnail-creator">
            <Button size="lg" className="px-8">
              Try Thumbnail Creator Now
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
