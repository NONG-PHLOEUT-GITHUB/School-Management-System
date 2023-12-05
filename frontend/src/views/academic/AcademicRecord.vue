<template>
  <!-- <custom-title icon="mdi-arrow-right">
      <span class="d-inline-block capitalize-first-letter" >
          Attendance report list
      </span>
    </custom-title> -->
  <v-data-table
    v-model="selected"
    class="elevation-1"
    :headers="headers"
    :items="desserts"
    items-per-page="10"
    item-value="name"
    return-object
  >
  </v-data-table>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selected: [],
      headers: [
        { title: 'Suject of score', align: 'center', key: 'suject' },
        { title: 'Score', align: 'center', key: 'dateTime' },
        { title: 'Average', align: 'center', key: 'Teacher' },
        { title: 'Status', align: 'center', key: 'status' }
      ],
      desserts: [
        {
          dateTime: '76',
          suject: 'Khmer',
          status: 'Pass',
          Teacher: 1
        },
        {
          dateTime: '76',
          suject: 'Khmer',
          status: 4.3,
          Teacher: 40.04
        },
        {
          dateTime: '76',
          suject: 'English',
          status: 6.0,
          Teacher: 7
        },
        {
          dateTime: '76',
          suject: 'Khmer',
          status: 'Pass',
          Teacher: 40.04
        },
        {
          dateTime: '76',
          suject: 'Khmer',
          status: 4.3,
          Teacher: 40.04
        },
        {
          dateTime: '76',
          suject: 'English',
          status: 6.0,
          Teacher: 7
        },
        {
          dateTime: '76',
          suject: 'Khmer',
          status: 'Pass',
          Teacher: 40.04
        },
        {
          dateTime: '76',
          suject: 'Khmer',
          status: 4.3,
          Teacher: 40.04
        },
        {
          dateTime: '76',
          suject: 'English',
          status: 6.0,
          Teacher: 30.2
        },
        {
          dateTime: '36',
          suject: 'Khmer',
          status: 'Pass',
          Teacher: 40.04
        },
        {
          dateTime: '76',
          suject: 'Khmer',
          status: 4.3,
          Teacher: 40.04
        },
        {
          dateTime: '76',
          suject: 'English',
          status: 6.0,
          Teacher: 5
        },
        {
          dateTime: '56',
          suject: 'Khmer',
          status: 'Pass',
          Teacher: 40.04
        },
        {
          dateTime: '56',
          suject: 'Khmer',
          status: 4.3,
          Teacher: 40.04
        },
        {
          dateTime: '56',
          suject: 'Math',
          status: 6.0,
          Teacher: 5
        }
      ]
    }
  }
}
</script>
<style>
.v-data-table-footer {
  background: #ebe6e6;
}
thead {
  background: #ebe6e6;
}
</style>
