<template>
  <v-card>
    <canvas id="myPieChart" width="500" height="510"></canvas>
  </v-card>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Chart, Title, Tooltip } from 'chart.js/auto'

Chart.register(Title, Tooltip)

export default {
  setup() {
    const chartInstance = ref(null)

    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'grey'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [200, 150, 100, 120],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(3345, 455, 43)'
          ],
          hoverOffset: 4
        }
      ]
    }

    const updateChart = () => {
      if (chartInstance.value) {
        chartInstance.value.destroy()
      }

      const ctx = document.getElementById('myPieChart').getContext('2d')

      chartInstance.value = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Attendenc sumerize'
            },
            legend: {
              display: true
            }
          }
        }
      })
    }

    onMounted(() => {
      updateChart()
    })

    return {}
  }
}
</script>
