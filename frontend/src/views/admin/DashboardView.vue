<template>
  <custom-title icon="mdi-chart-pie">
    <span class="d-inline-block capitalize-first-letter">Dashboard</span>
    <template #right>
      <v-btn small icon class="white" variant="text">
        <v-icon small> mdi-information-outline </v-icon>
      </v-btn>
    </template>
  </custom-title>
  <card-dashboard />
  <v-row>
    <v-col cols="12" md="3">
      <chart-jS class="chart" />
    </v-col>
    <v-col cols="12" md="3">
      <pie-charts class="chart" />
    </v-col>
    <v-col cols="12" md="6">
      <bar-chart-jS class="chart" />
    </v-col>
  </v-row>
</template>

<script>
import CardDashboard from '@/components/dashboard/CardDashboard.vue'
import ChartJS from '@/components/dashboard/Chart.vue'
import BarChartJS from '@/components/dashboard/BarChart.vue'
import PieCharts from '@/components/dashboard/PieCharts.vue'

export default {
  name: 'AdminDashboard',

  components: {
    CardDashboard,
    ChartJS,
    BarChartJS,
    PieCharts
  }
}
</script>

<style scoped>
/* .chart{
  background: #000;
} */
</style>
