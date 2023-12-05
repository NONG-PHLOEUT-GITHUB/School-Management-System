import http from './api'

export function countAllStudent() {
  return http.get('/count')
}
