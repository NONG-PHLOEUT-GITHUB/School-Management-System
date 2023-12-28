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
  // theme: {
  //   defaultTheme: 'dark',
  // },
  directives,
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 340,
      md: 540,
      lg: 800,
      xl: 1280,
    },
  },
})
export default vuetify
