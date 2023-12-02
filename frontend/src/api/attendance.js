import http from "./api";

export function fetchUserAttendance() {
  return http.get("/student/attendances");
}