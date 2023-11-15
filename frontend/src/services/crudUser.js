import http from "./api";

export function createUser(user) {
//   const user = {
//     first_name,
//     last_name,
//     gender,
//     date_of_birth,
//     phone_number,
//     address,
//     profile,
//     email,
//     role,
//     classroom_id, /// asing to student which classroom 
//     guardian_id // student parent
//   };
  return http.post("/user",user);
}
