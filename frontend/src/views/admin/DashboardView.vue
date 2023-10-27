<template>
  <custom-title title="Dashboard" icon="mdi-chart-pie" />
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
import CustomTitle from "@/components/common/CustomTitle.vue";
import CardDashboard from "@/components/dashboard/CardDashboard.vue";
import ChartJS from "@/components/dashboard/Chart.vue";
import BarChartJS from "@/components/dashboard/BarChart.vue";
import PieCharts from "@/components/dashboard/PieCharts.vue";

export default {
  name: "AdminDashboard",

  components: {
    CustomTitle,
    CardDashboard,
    ChartJS,
    BarChartJS,
    PieCharts
  },
};
</script>

<style scoped>
/* .chart{
  background: #000;
} */
</style>
