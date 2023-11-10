import { createApp } from "vue"
import { createPinia } from "pinia"
import i18n from './plugins/i18n';
import App from "./App.vue"
import router from "./router"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "vuetify/styles"
import "vuetify/dist/vuetify.min.css"
import "@mdi/font/css/materialdesignicons.css"

import CustomTitle from "@/components/common/CustomTitle.vue"
import CustomFilter from "@/components/common/CustomFilter.vue"
import { VDataTable } from "vuetify/labs/VDataTable";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App)
const pinia = createPinia()

app.component('custom-title',CustomTitle) // call to use without import
app.component('custom-filter',CustomFilter) // call to use without import
app.component('v-data-table',VDataTable)

app.use(pinia)
app.use(i18n())
app.use(router)
app.use(vuetify).mount("#app")
