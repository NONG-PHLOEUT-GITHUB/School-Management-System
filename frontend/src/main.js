import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './plugins/i18n'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'

import CustomTitle from '@/components/global/CustomTitle.vue'
import SidebarComponent from '@/components/layout/Sidebar.vue'
import CustomHeader from '@/components/common/CustomHeader.vue'
// import DatePiker from '@/components/global/DatePiker.vue'
import BreadCrumb from '@/components/global/BreadCrumb.vue'
//store
import { useAuthStore } from './stores/auth'

const app = createApp(App)
const pinia = createPinia()

//Grobal components call to use without import
app.component('bread-crumb', BreadCrumb)
app.component('custom-title', CustomTitle)
app.component('custom-header', CustomHeader)
app.component('sidebar', SidebarComponent)
// app.component('base-date-pikcer', DatePiker)

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
