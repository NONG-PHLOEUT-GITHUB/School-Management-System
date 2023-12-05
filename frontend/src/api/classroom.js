import http from './api'

export function fetchAllClassroom() {
  return http.get('/classrooms')
}

export function fetchClassCoordinator() {
  return http.get('/class-coordinator')
}

export function fetchTotalClass() {
  return http.get('/classrooms/count')
}

export function deleteClassroom(ID) {
  return http.delete(`/classroom/${ID}`)
}
