// /actions/product/lists.ts
import { axiosInstance } from '@/lib/axios'

export const getProducts = async (p0?: string) => {
  const res = await axiosInstance.get('/products', {
    params: { limit: 12 },
  })
  return res.data
}
