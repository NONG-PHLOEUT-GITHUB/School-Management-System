<template>
  <custom-title title="Dashboard"
  icon="mdi-chart-pie"/>
  <card-dashboard/>
</template>

<script>
import CustomTitle from '@/components/common/CustomTitle.vue';
import CardDashboard from '@/components/admin/CardDashboard.vue'
export default {
  name: "AdminDashboard",

  components:{
    CustomTitle,
    CardDashboard
  }
};
</script>

<style scoped>

</style>
