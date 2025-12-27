import { Search } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7aa89f]">
        <Search className="w-5 h-5" />
      </div>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari buku, kategori, atau judul..."
        className="
          w-full
          pl-12 pr-4 py-3.5
          rounded-full
          bg-white
          border border-[#e2e8f0]
          text-[#1b3d33]
          placeholder:text-[#9ca3af]
          shadow-sm
          transition-all
          duration-200
          focus:outline-none
          focus:ring-2
          focus:ring-[#2c8f75]/40
          focus:border-[#2c8f75]
        "
      />
    </div>
  )
}

export default SearchBar
