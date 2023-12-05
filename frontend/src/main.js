import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './plugins/i18n'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'

import CustomTitle from '@/components/global/CustomTitle.vue'
import CustomFilter from '@/components/common/CustomFilter.vue'
import SidebarComponent from '@/components/layout/Sidebar.vue'
import CustomHeader from '@/components/common/CustomHeader.vue'
//store
import { useAuthStore } from './stores/auth'

const app = createApp(App)
const pinia = createPinia()

//Grobal components call to use without import
app.component('custom-title', CustomTitle)
app.component('custom-filter', CustomFilter)
app.component('custom-header', CustomHeader)
app.component('sidebar', SidebarComponent)

app.use(pinia)
app.use(i18n())
app.use(router)
app.use(vuetify).mount('#app')

const authStore = useAuthStore()
// attach other stores as needed
app.config.globalProperties.$authStore = authStore
// use in component without import
// const authStore = this.$authStore; // For class-style components
// // OR
// const authStore = useAuthStore(); // For composition API
