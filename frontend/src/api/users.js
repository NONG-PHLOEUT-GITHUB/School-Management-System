import http from './api'

export function fetchAllUsers() {
  return http.get('/users')
}
export function deleteUsers(id) {
  return http.delete(`/user/delete/${id}`)
}
