export declare type ProductCardProps = {
  id: string
  title: string
  description?: string
  category: string
  images: string[]
  meta?: {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  }
  price: number
  rating: number
  stock?: number
  dimensions?: {
    width: number
    height: number
  }
  tag?: string[]
  showThumbnails?: boolean
  thumbnail: string
}
