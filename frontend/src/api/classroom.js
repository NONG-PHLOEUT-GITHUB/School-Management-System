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
export function createClassroom(classroom_name, teacher_id) {
  const classroom = {
    classroom_name,
    teacher_id
  }
  return http.post('/classroom', classroom)
}

export function editClassroom(id) {
  return http.get(`/classroom/edit/${id}`)
}

export function updateClassroom(id) {
  return http.put(`/classroom/update/${id}`)
}

export function deleteClassroom(ID) {
  return http.delete(`/classroom/${ID}`)
}

export function getStudentInClassroom(id) {
  return http.get(`/student/classroom/${id}`)
}
