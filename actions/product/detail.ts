import { axiosInstance } from '@/lib/axios'

export async function getProductById(id: string) {
  const res = await axiosInstance.get(`/products/${id}`)
  return res.data
}
