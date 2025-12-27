'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart } from 'lucide-react'
import { ProductCardProps } from '@/types/product'
import { useState } from 'react'
import Rating from '../ui/Rating'

const ProductCard = ({
  id,
  category,
  title,
  price,
  rating,
  thumbnail,
}: ProductCardProps) => {
  const [liked, setLiked] = useState(false)
  return (
    <div className="group relative w-full max-w-95 max-h-100  rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* image */}
      <Link href={`/product/${id}`}>
        <div className=" flex items-center  justify-center bg-black/10 w-full h-[70%] aspect-4/5 overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            height={200}
            width={300}
            className="object-cover   transition-transform duration-500 group-hover:scale-110"
          />

          {/* Hover Actions */}
          <div className="absolute  inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setLiked(!liked)
              }}
              className={`p-3 rounded-full transition
        ${liked ? 'bg-[#2c8f75]' : 'bg-white'}
        hover:scale-110`}
            >
              <Heart
                className={`w-5 h-5 cursor-pointer transition ${
                  liked ? 'text-white' : 'text-[#2c8f75]'
                }`}
              />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                console.log('Add to cart')
              }}
              className="bg-[#2c8f75] cursor-pointer p-3 rounded-full hover:scale-110 transition"
            >
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* content */}
        <div className="p-4 space-y-1">
          <h5 className="text-black/30 font-bold text-[10px] uppercase">
            {category}
          </h5>
          <h3 className="font-semibold hover:text-[#2c8f75] text-sm text-gray-900 line-clamp-2">
            {title}
          </h3>

          <div className="flex items-center justify-between mt-1">
            <Rating value={rating} />
            <span className="font-bold text-[15px] text-black/50">
              <span className="relative text-[11px] -top-1">$</span>
              {price?.toLocaleString('en-US')}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
