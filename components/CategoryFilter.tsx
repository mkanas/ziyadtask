'use client'

interface CategoryFilterProps {
  categories: string[]
  selected: string
  onSelect: (category: string) => void
}

const categoryEmojis: Record<string, string> = {
  Semua: '📚',
  beauty: '💄',
  fragrance: '🌸',
  furniture: '🪑',
}

const CategoryFilter = ({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`flex items-center gap-2 cursor-pointer px-5 py-2 rounded-2xl text-sm font-semibold transition
            ${
              selected === category
                ? 'bg-[#2c8f75] text-[#ffffff]'
                : 'bg-[#e6efeb] text-[#5e7d73] hover:bg-[#e6efeb]/70'
            }`}
        >
          <span>{categoryEmojis[category] ?? '📦'}</span>
          <span>{category}</span>
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
