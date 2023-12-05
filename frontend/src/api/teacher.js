import http from './api'

export function countAllTeacher() {
  return http.get('/count/teacher')
}
