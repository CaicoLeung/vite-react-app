import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'
import config from '#CONF'
import { Services } from '#LIBS'

axios.defaults.withCredentials = true
axios.defaults.timeout = 15000

const mainService = axios.create({
  baseURL: config.prefixApi,
  headers: {
    'Content-Type': 'application/json'
  },
})

/* 请求拦截 */
mainService.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    token && (config.headers.token = token)
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

/* 响应拦截 */
mainService.interceptors.response.use((response: AxiosResponse<Services.Response>) => {
  const { status, data, statusText } = response
  if ((status >= 200 && status <= 300) || status === 305) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(statusText)
  }
})

export default {
  get: async <R>(url: string, params?: unknown) => (await mainService.get<Services.Response<R>>(url, { params })).data,
  post: async <R>(url: string, params: unknown) => (await mainService.post<Services.Response<R>>(url, qs.stringify(params))).data,
  put: async <R>(url: string, params: unknown) => (await mainService.put<Services.Response<R>>(url, qs.stringify(params))).data,
  patch: async <R>(url: string, params: unknown) => (await mainService.patch<Services.Response<R>>(url, qs.stringify(params))).data,
  delete: async <R>(url: string) => (await mainService.delete<Services.Response<R>>(url)).data,
}
