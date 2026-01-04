import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Ahmad - Full Stack Developer',
  description: 'Professional portfolio showcasing my work as a full stack developer specializing in modern web technologies.',
  keywords: ['developer', 'portfolio', 'full stack', 'web development', 'Next.js', 'React'],
  authors: [{ name: 'Ahmad' }],
  openGraph: {
    title: 'Ahmad - Full Stack Developer',
    description: 'Professional portfolio showcasing my work as a full stack developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-[var(--border)] py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Ahmad. All rights reserved.</p>
              <p className="text-sm mt-2">Built with Next.js, TypeScript & Tailwind CSS</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}