<template>
  <v-card>
    <canvas id="myChart" width="500" height="510"></canvas>
  </v-card>
</template>

<script setup>
import { onMounted } from 'vue'
import { Chart, CategoryScale, Title, Tooltip } from 'chart.js/auto'

onMounted(() => {
  Chart.register(CategoryScale, Title, Tooltip)

  let ctx = document.getElementById('myChart').getContext('2d')

  let data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
    datasets: [
      {
        data: [5, 3, 6, 19],
        backgroundColor: ['blue', 'red', 'green', 'yellow']
      }
    ]
  }

  let options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Polar Area Chart'
      },
      legend: {
        display: true
      }
    }
  }

  let config = {
    type: 'polarArea',
    data: data,
    options: options
  }

  new Chart(ctx, config)
})
</script>
