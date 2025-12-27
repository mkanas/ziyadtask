'use client'

import { useEffect, useMemo, useState } from 'react'
import { getProducts } from '@/actions/product/lists'
import ProductCard from './ProductCard'
import SearchBar from '../SearchBar'
import CategoryFilter from '../CategoryFilter'
import { Sparkles } from 'lucide-react'
import EmptyState from '../EmptyState'
import Loading from '../ui/Loading'

type Product = {
  createdAt: string
  id: string
  title: string
  content: string
  category: string
  images: string[]
  meta?: string
  thumbnail: string
  price: number
  rating: number
  stock: number
}

const ProductLists = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const res = await getProducts()
      setProducts(res.products)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  const categories = useMemo(() => {
    return [
      'Semua',
      ...Array.from(
        new Set(
          products
            .map((p) => p.category)
            .filter((c): c is string => typeof c === 'string')
        )
      ),
    ]
  }, [products])

  const filteredProducts = useMemo(() => {
    const q = search.toLowerCase()

    return products.filter((product) => {
      const matchSearch =
        product.title.toLowerCase().includes(q) ||
        (product.content ?? '').toLowerCase().includes(q)

      const matchCategory =
        selectedCategory === 'Semua' || product.category === selectedCategory

      return matchSearch && matchCategory
    })
  }, [products, search, selectedCategory])

  return (
    <section className="py-12  bg-[#ffffff]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2c8f75]/10 text-[#2c8f75] px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold text-sm">Koleksi Buku Seru</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#000000] mb-4">
            Katalog <span className="text-[#2c8f75]">Buku</span> 📚
          </h2>
          <p className="text-[#5e7d73] text-lg max-w-2xl mx-auto">
            Temukan buku Islam favorit untuk si kecil! Cerita seru, komik lucu,
            dan banyak lagi~
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Grid */}
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <div className="pb-6">
              <CategoryFilter
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>

            {filteredProducts.length === 0 ? (
              <EmptyState searchQuery={search} />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    category={product.category}
                    price={product.price}
                    rating={product.rating}
                    thumbnail={product.thumbnail}
                    images={[]}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductLists
