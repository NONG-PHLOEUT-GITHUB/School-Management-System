import http from "./api";

export function fetchAllClassroom() {
  return http.get("/classrooms");
}
