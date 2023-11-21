import http from "./api";

export function fetchAllClassroom() {
  return http.get("/classrooms");
}


export function fetchClassCoordinator() {
  return http.get("/class-coordinator");
}
