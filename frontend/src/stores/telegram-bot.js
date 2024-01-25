import { defineStore } from 'pinia'
import { telegramBot } from '@/api/telegram-bot'
import { useLoadingStore } from './loading'

export const useTelegramBotStore = defineStore('telegramBot', {
  state: () => ({
    messageEnter: null
  }),
  getters: {
    message: (state) => state.messageEnter
  },
  async sendMessage({ text, chat_id }) {
    const loadingStore = useLoadingStore()
    loadingStore.setLoading(true)
    try {
      const response = await telegramBot(text, chat_id)
      this.messageEnter = response.data
      loadingStore.setLoading(false)
    } catch (error) {
      console.error('Error fetching total class:', error)
    }
  }
})
