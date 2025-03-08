import axios from 'axios'
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
// import type { NuxtApp } from '#app'

// interface AxiosPlugin {
//   $axios: AxiosInstance
// }

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  // Tạo một instance của Axios với cấu hình mặc định
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: config.public.apiBaseUrl, // 'https://jsonplaceholder.typicode.com', // Thay bằng URL API của bạn
    headers: {
      common: {
        'Content-Type': 'application/json'
      }
    }
  })

  // (Tùy chọn) Thêm interceptor để xử lý yêu cầu trước khi gửi
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // Ví dụ: Thêm token vào header nếu cần
      // const token = localStorage.getItem('token')
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // (Tùy chọn) Thêm interceptor để xử lý phản hồi
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response
    },
    (error) => {
      // Xử lý lỗi toàn cục nếu cần
      console.error('Lỗi từ server:', error.response?.data || error.message)
      return Promise.reject(error)
    }
  )

  // Cung cấp axios instance cho toàn bộ ứng dụng
  return {
    provide: {
      axios: axiosInstance
    }
  }
})
