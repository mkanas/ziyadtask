import { BookX, Search, Frown } from 'lucide-react'

interface EmptyStateProps {
  searchQuery: string
}

const EmptyState = ({ searchQuery }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-24 px-4 animate-fade-in">
      {/* Illustration */}
      <div className="relative mb-8">
        <div className="w-40 h-40 md:w-48 md:h-48 bg-linear-to-br from-[#e6efeb] to-[#a9d8c3]/30 rounded-full flex items-center justify-center">
          <Frown className="w-20 h-20 md:w-24 md:h-24 text-[#2c8f75]/50" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-[#f2b93b] rounded-2xl flex items-center justify-center animate-bounce shadow-lg rotate-12">
          <Search className="w-7 h-7 text-[#1b3d33]" />
        </div>
        <div className="absolute -top-2 -left-2 w-10 h-10 bg-[#3fbfa3] rounded-xl flex items-center justify-center animate-wiggle shadow-lg -rotate-12">
          <BookX className="w-5 h-5 text-[#ffffff]" />
        </div>
      </div>

      {/* Text Content */}
      <h3 className="font-display text-2xl md:text-3xl font-bold text-[#1b3d33] mb-3 text-center">
        Oops! Buku Tidak Ditemukan 😅
      </h3>
      <p className="text-[#5e7d73] text-center max-w-md mb-2 text-lg">
        Tidak ada buku dengan kata kunci{' '}
        <span className="font-bold text-[#2c8f75]">"{searchQuery}"</span>
      </p>
      <p className="text-[#5e7d73] text-center max-w-md">
        Coba kata kunci lain atau lihat kategori yang tersedia ya!
      </p>
    </div>
  )
}

export default EmptyState
