import axios from 'axios'
import { AuthService } from '../services'
import { APIPath, CommonConstant } from '../constant'
import { BrowserUtility } from 'utility'

const onSuccess = response => response.data

const onError = async error => {
  console.log('🚀 ~ base.js:9 ~ error:', error)
  if (error?.status === 401) {
    AuthService.logout()
  }
  return Promise.reject({
    error: error?.response?.data?.error || error?.response?.data,
    status: error?.response?.status,
  })
}

let isRefreshing = false // Prevent multiple token refreshes
let failedQueue = []

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (token) {
      prom.resolve(token)
    } else {
      prom.reject(error)
    }
  })

  failedQueue = []
}

const request = async (options, isSecure) => {
  const headers = {}

  if (isSecure) {
    const token = AuthService.getToken()
    headers.Authorization = `Bearer ${token}`
  }

  headers.app = 'EAuditor'
  headers['Access-Control-Allow-Origin'] = '*'

  const client = axios.create({
    baseURL: APIPath.server,
    headers: { ...headers },
  })

  try {
    return await client(options).then(onSuccess)
  } catch (error) {
    const originalRequest = options

    if (error.response?.status === 401 && isSecure) {
      if (!isRefreshing) {
        isRefreshing = true

        try {
          const RefreshToken = BrowserUtility.getObj('user')?.refreshToken
          const newToken = await AuthService.refreshToken({
            refreshToken: RefreshToken,
          })
          console.log('🚀 ~ base.js:63 ~ request ~ newToken:', newToken)

          if (!newToken) throw new Error('Failed to refresh token')

          headers['X-TOKEN'] = newToken.accessToken
          headers.Authorization = `Bearer ${newToken.accessToken}`

          BrowserUtility.saveObj('token', newToken.accessToken)
          BrowserUtility.saveObj('user', { ...newToken })

          processQueue(null, newToken.accessToken)
          isRefreshing = false

          return await request(originalRequest, isSecure)
        } catch (refreshError) {
          console.log('🚀 ~ base.js:79 ~ request ~ refreshError:', refreshError)
          processQueue(refreshError, null)
          isRefreshing = false
          AuthService.logout()
          throw refreshError
        }
      }

      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject })
      }).then(token => {
        console.log('🚀 ~ base.js:90 ~ returnnewPromise ~ token:', token)
        originalRequest.headers.Authorization = `Bearer ${token}`
        return request(originalRequest, isSecure)
      })
    }
    console.log('🚀 ~ base.js:53 ~ request ~ error:', error)

    throw error
  }
}

const uploadFiles = (url, data, headers = {}) => {
  headers['Access-Control-Allow-Origin'] = '*'
  return axios.put(url, data, { headers }).then(onSuccess).catch(onError)
}

export class BaseService {
  static get(url, isSecure = true) {
    return request({ url, method: 'GET' }, isSecure)
  }

  static post(url, data, isSecure = true) {
    return request({ url, method: 'POST', data }, isSecure)
  }

  static put(url, data, isSecure = true) {
    return request({ url, method: 'PUT', data }, isSecure)
  }

  static patch(url, data, isSecure = true) {
    return request({ url, method: 'PATCH', data }, isSecure)
  }

  static remove(url, isSecure = true) {
    return request({ url, method: 'DELETE' }, isSecure)
  }

  static upload(url, data, headers) {
    return uploadFiles(url, data, headers)
  }

  static moralisAPI(url) {
    return axios
      .get(`${APIPath.moralisAPI}${url}`)
      .then(onSuccess)
      .catch(onError)
  }

  static openseaAPI(url) {
    const headers =
      CommonConstant.mode === 'PRODUCTION'
        ? { 'X-API-KEY': process.env.REACT_APP_OPENSEA_API_KEY }
        : {}
    return axios
      .get(`${APIPath.openSeaAPI}${url}`, { headers })
      .then(onSuccess)
      .catch(onError)
  }

  static extenralAPICall(url) {
    return axios.get(url, { timeout: 3000 }).then(onSuccess).catch(onError)
  }
}
