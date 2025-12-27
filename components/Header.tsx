'use client'

import { BookOpen, Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/90 backdrop-blur-md border-b-4 border-[#f2b93b]/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#2c8f75] to-[#3fbfb2] flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-[0_8px_30px_-8px_rgba(44,143,117,0.25)]">
              <BookOpen className="w-6 h-6 text-[#ffffff]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-[#1b3d33] leading-tight">
                Ziyad<span className="text-[#2c8f75]">books</span>
              </span>
              <span className="text-xs text-[#5e7d73] font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#f2b93b]" />
                Buku Islam Anak
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="/#katalog"
              className="text-[#5e7d73] hover:text-[#2c8f75] transition-colors font-semibold text-lg"
            >
              Katalog
            </a>
            <a
              href="/#tentang"
              className="text-[#5e7d73] hover:text-[#2c8f75] transition-colors font-semibold text-lg"
            >
              Tentang
            </a>
            <a
              href="/#kontak"
              className="text-[#5e7d73] hover:text-[#2c8f75] transition-colors font-semibold text-lg"
            >
              Kontak
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#1b3d33] rounded-xl hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t-2 border-muted animate-fade-in">
            <div className="flex flex-col gap-2">
              <a
                href="/#katalog"
                className="text-[#5e7d73] hover:text-[#2c8f75] hover:bg-muted transition-colors font-semibold py-3 px-4 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                📚 Katalog
              </a>
              <a
                href="/#tentang"
                className="text-[#5e7d73] hover:text-[#2c8f75] hover:bg-muted transition-colors font-semibold py-3 px-4 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                ✨ Tentang
              </a>
              <a
                href="/#kontak"
                className="text-[#5e7d73] hover:text-[#2c8f75] hover:bg-muted transition-colors font-semibold py-3 px-4 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                💌 Kontak
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
