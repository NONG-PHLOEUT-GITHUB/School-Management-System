import { createApp } from "vue"
import { createPinia } from "pinia"
import i18n from './plugins/i18n';
import App from "./App.vue"
import router from "./router"
import vuetify from "./plugins/vuetify";

import CustomTitle from "@/components/common/CustomTitle.vue"
import CustomFilter from "@/components/common/CustomFilter.vue"
import SidebarComponent from "@/components/layout/SidebarComponent.vue"
import CustomHeader from "@/components/common/CustomHeader.vue"; 

const app = createApp(App)
const pinia = createPinia()
//Grobal components call to use without import
app.component('custom-title',CustomTitle) 
app.component('custom-filter',CustomFilter)
app.component('custom-header',CustomHeader)
app.component('sidebar',SidebarComponent) 

app.use(pinia)
app.use(i18n())
app.use(router)
app.use(vuetify).mount("#app")
