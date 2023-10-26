<template>
    <div>
      <my-chart :chartData="chartData" :options="chartOptions" />
      ff
    </div>
  </template>
  
  <script>

  export default {

    data() {
      return {
        chartData: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First Dataset',
              borderColor: 'rgba(75, 192, 192, 1)',
              data: [65, 59, 80, 81, 56, 55, 40],
            },
          ],
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
        },
      };
    },
  };
  </script>
  