import http from './api'

export function fetchAllUsers() {
    return http.get('/users');
}

export function userLogin() {
    return http.post('/v2/auth/login');
}