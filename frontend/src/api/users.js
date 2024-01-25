import http from './api'

export function fetchAllUsers() {
  return http.get('/users')
}
export function deleteUsers(id) {
  return http.delete(`/user/delete/${id}`)
}
export function userDetail(id) {
  return http.get(`/user/${id}/details`)
}
