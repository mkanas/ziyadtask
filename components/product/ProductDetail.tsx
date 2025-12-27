'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getProducts } from '@/actions/product/lists'
import Image from 'next/image'
import ProductCard from './ProductCard'
import Loading from '../ui/Loading'
import Rating from '../ui/Rating'

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
  description: string
}

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [activeImage, setActiveImage] = useState<string>('')

  useEffect(() => {
    if (!id) return

    const fetchData = async () => {
      const response = await getProducts()
      const products = response.products

      const currentProduct = products.find(
        (p: { id: number }) => p.id === Number(id)
      )
      if (!currentProduct) return

      setProduct(currentProduct)
      setActiveImage(currentProduct.thumbnail) // ← INI PENTING
      setRelatedProducts(
        products.filter(
          (p: { category: any; id: any }) =>
            p.category === currentProduct.category && p.id !== currentProduct.id
        )
      )
    }

    fetchData()
  }, [id])
  if (!product) return
  const { title, rating, price, stock, description } = product

  if (!product)
    return (
      <div className="text-center rounded-none ">
        <Loading />
      </div>
    )

  return (
    <main className="w-full py-12 min-h-screen bg-white">
      <div
        className="max-w-5xl 
     mx-auto p-4 bg-white  "
      >
        {/* main product */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* left */}
          <div>
            {/* main image */}
            <div className="">
              <div className="rounded-xl bg-black/10 overflow-hidden border ">
                <Image
                  src={activeImage}
                  alt={title}
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
              </div>

              {/* thumbnail */}
              <div className="flex  gap-3 mt-4">
                {[product.thumbnail, ...product.images.slice(1)].map(
                  (img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(img)}
                      className={`border rounded-md p-1 bg-black/10 cursor-pointer transition 
        ${activeImage === img ? 'border-[#2c8f75]' : 'border-gray-300'}
        hover:border-[#2c8f75]`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        width={80}
                        height={80}
                        className="object-cover rounded"
                      />
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* right */}
          <div className="space-y-6">
            {/* TITLE */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-2 text-sm">
              <Rating value={rating} />
            </div>

            {/* PRICE */}
            <div className="w-full h-px bg-gray-200 my-4" />
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-gray-900">
                ${price.toLocaleString('en-US')}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ${(price * 1.2).toFixed(0)}
              </span>
            </div>
            <span className="text-gray-500 font-bold text-[13px]">
              {' '}
              Stock {stock}
            </span>
            {/* DIVIDER */}
            <div className="w-full h-px bg-gray-200 my-4" />

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {description}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="flex-1 cursor-pointer bg-[#2c8f75] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Add to Cart
              </button>

              <button className="flex-1 cursor-pointer border border-[#2c8f75] text-[#2c8f75] py-3 rounded-lg font-semibold hover:bg-[#2c8f75]/10 transition">
                Add to Wishlist
              </button>
            </div>
          </div>
        </section>
        {/* related product */}
        <div className="mt-10">
          <div className="w-full h-px bg-gray-200 my-4" />

          <h3 className="font-semibold text-lg text-black mb-2">
            Other Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  category={product.category}
                  images={product.images}
                  price={product.price}
                  rating={product.rating}
                  thumbnail={product.thumbnail}
                />
              ))
            ) : (
              <p className="text-gray-500 italic">No related products</p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
