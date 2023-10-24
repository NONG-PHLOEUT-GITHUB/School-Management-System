import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
  })
const app = createApp(App)

import HeaderComponent from "@/components/layout/HeaderComponent"
import LayoutComponent from "@/components/layout/LayoutComponent"

app.component('header-component',HeaderComponent)
app.component('layout-component',LayoutComponent)

app.use(router)
app.use(vuetify)
.mount('#app')
