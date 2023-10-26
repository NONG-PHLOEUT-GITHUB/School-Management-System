<template>
  <custom-title title="Dashboard"
  icon="mdi-chart-pie"/>
  <card-dashboard/>
  <chart-jS/>
</template>

<script>
import CustomTitle from '@/components/common/CustomTitle.vue';
import CardDashboard from '@/components/dashboard/CardDashboard.vue'
import ChartJS from '@/components/dashboard/Chart.vue'
export default {
  name: "AdminDashboard",

  components:{
    CustomTitle,
    CardDashboard,
    ChartJS
  }
};
</script>

<style scoped>

</style>
