// export const namespaced = true;

// export const state = {
//   isLoading: false,
//   forceStopLoading: false,
//   message: ''
// };

// export const mutations = {
//   setLoading(state, payload) {
//     state.isLoading = payload;
//   },
//   setForceStopLoading(state, payload) {
//     state.forceStopLoading = payload;
//   },
//   setMessage(state, payload) {
//     state.message = payload;
//   }
// };




import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    isLoading: false,
    forceStopLoading: false,
    message: '',
  }),
  actions: {
    setLoading(payload) {
      this.isLoading = payload;
    },
    setForceStopLoading(payload) {
      this.forceStopLoading = payload;
    },
    setMessage(payload) {
      this.message = payload;
    },
  },
});
