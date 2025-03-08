import type { AxiosResponse } from 'axios'
import { useNuxtApp } from '#app'

// Định nghĩa interface cho dữ liệu trả về từ API (tùy thuộc vào API của bạn)
interface Post {
  id: number
  name: string
  email: string
}

export function useApi() {
  const { $axios } = useNuxtApp()

  const getData = async <T>(endpoint: string): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await $axios.get(endpoint)
      return response.data
    } catch (error) {
      console.error('Lỗi trong useApi:', error)
      throw error
    }
  }

  const postData = async <T>(endpoint: string, data: any): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await $axios.post(endpoint, data)
      return response.data
    } catch (error) {
      console.error('Lỗi trong useApi:', error)
      throw error
    }
  }

  return { getData, postData }
}
