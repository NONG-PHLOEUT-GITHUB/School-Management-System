import http from './api'

export function telegramBot(text,chat_id) {
    const message = {
        text,
        chat_id
      }
    return http.post('/telegram/send-message',message)
  }