import { Star, Sparkles, BookOpen } from 'lucide-react'
import Link from 'next/link'
import ProductLists from './product/ProductLists'

const HeroSection = () => {
  ;<section id="katalog">
    <ProductLists />
  </section>
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#2c8f75] via-[#2c8f75] to-[#3fbfb2]">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#f2b93b]/30 rounded-full blur-2xl animate-float" />
      <div
        className="absolute bottom-20 right-20 w-32 h-32 bg-[#3fbfa3]/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#49c29c]/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      {/* Floating Icons */}
      <div className="absolute top-20 right-[15%] animate-bounce hidden md:block">
        <div className="w-14 h-14 bg-[#f2b93b] rounded-2xl flex items-center justify-center rotate-12 shadow-lg">
          <Star className="w-7 h-7 text-[#1b3d33]" />
        </div>
      </div>
      <div
        className="absolute bottom-32 left-[10%] animate-bounce hidden md:block"
        style={{ animationDelay: '0.5s' }}
      >
        <div className="w-12 h-12 bg-[#3fbfa3] rounded-2xl flex items-center justify-center -rotate-12 shadow-lg">
          <BookOpen className="w-6 h-6 text-[#ffffff]" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
        <div className="max-w-3xl mx-auto  text-center">
          <div className="inline-flex items-center gap-2 bg-[#f2b93b] text-[#1b3d33] px-5 py-2.5 rounded-full mb-6 animate-fade-in shadow-lg">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold">Buku Islam untuk Anak & Keluarga</span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffffff] mb-6 animate-fade-in-up leading-tight"
            style={{ animationDelay: '0.1s' }}
          >
            Belajar Islam{' '}
            <span className="relative">
              <span className="text-[#f2b93b]">Jadi Seru!</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 8C50 4 150 4 198 8"
                  stroke="hsl(var(--[#f2b93b]))"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-[#ffffff]/90 mb-10 max-w-2xl mx-auto animate-fade-in-up font-medium"
            style={{ animationDelay: '0.3s' }}
          >
            Koleksi buku Islam pilihan untuk anak-anak 📚 Cerita seru, komik
            lucu, dan pelajaran berharga yang bikin belajar agama makin
            menyenangkan!
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#product"
              className="inline-flex items-center justify-center gap-2 bg-[#f2b93b] text-[#1b3d33] px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all"
            >
              🎉 Lihat Buku
            </a>
            <a
              href="#tentang"
              className="inline-flex items-center justify-center gap-2 bg-[#ffffff]/20 text-[#ffffff] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#ffffff]/30 transition-all border-2 border-[#ffffff]/30"
            >
              Tentang Kami
            </a>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute -bottom-px left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="block h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
