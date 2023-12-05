import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDataTable } from 'vuetify/lib/labs/components.mjs'
import { VDatePicker } from 'vuetify/labs/VDatePicker'

const vuetify = createVuetify({
  components: {
    ...components,
    VDataTable,
    VDatePicker
  },
  directives
})
export default vuetify
