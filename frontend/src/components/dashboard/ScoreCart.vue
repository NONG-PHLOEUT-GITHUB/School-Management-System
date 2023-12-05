<template>
  <v-container elevation="6">
    <div class="d-flex flex-column align-end">
      <v-select
        v-model="favorites"
        :items="states"
        label="Select"
        hint="Pick Month"
        variant="outlined"
        persistent-hint
        :style="{ width: '20rem' }"
      ></v-select>
    </div>
    <v-row>
      <v-col cols="12">
        <v-card>
          <canvas id="barChart" width="500" height="560"></canvas>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Chart, CategoryScale, Title, Tooltip, Filler } from 'chart.js/auto'

Chart.register(Title, CategoryScale, Tooltip, Filler)

export default {
  data() {
    return {
      favorites: [],
      states: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'Semtember',
        'Octomber',
        'November',
        'December'
      ]
    }
  },
  setup() {
    const selectedYear = ref(new Date().getFullYear().toString())

    const yearIcon = '$vuetify.icons.year'

    const chartInstance = ref(null)

    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'Semtember',
      'Octomber',
      'November',
      'December'
    ]

    const updateChart = () => {
      if (chartInstance.value) {
        chartInstance.value.destroy()
      }

      const ctx = document.getElementById('barChart').getContext('2d')

      const data = {
        labels: labels,
        datasets: [
          {
            label: 'My score',
            data: [65, 59, 80, 81, 56, 55, 40, 54, 6, 4, 33, 69],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1
          }
        ]
      }

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }

      chartInstance.value = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
      })
    }

    onMounted(() => {
      updateChart()
    })

    return {
      selectedYear,
      yearIcon
    }
  }
}
</script>

<style scoped></style>
