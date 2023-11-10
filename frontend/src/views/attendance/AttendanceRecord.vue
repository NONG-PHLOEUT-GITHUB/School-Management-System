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
        { title: "Date time", align: "center", key: "dateTime" },
        { title: "Suject of attend", align: "center", key: "suject" },
        { title: "Status", align: "center", key: "status" },
        { title: "Teacher", align: "center", key: "Teacher" },
      ],
      desserts: [
        {
          dateTime: "Sun 10 Apr 2023,10:00",
          suject: "Khmer",
          status: 4.0,
          Teacher: 1,
        },
        {
          dateTime: "Sun 10 Apr 2023,10:00",
          suject: "Khmer",
          status: 4.3,
          Teacher: 1,
        },
        {
          dateTime: "Sun 10 Apr 2023,10:00",
          suject: "English",
          status: 6.0,
          Teacher: 7,
        },
        {
          dateTime: "Sun 10 Apr 2023,10:00",
          suject: "Khmer",
          status: 4.0,
          Teacher: 1,
        },
        {
          dateTime: "Sun 10 Apr 2023,10:00",
          suject: "Khmer",
          status: 4.3,
          Teacher: 1,
        },
        {
          dateTime: "Sun 10 Apr 2023,10:00",
          suject: "English",
          status: 6.0,
          Teacher: 7,
        },
        {
          dateTime: "Sun 10 Apr 2023,10:00",
          suject: "Khmer",
          status: 4.0,
          Teacher: 1,
        },
        {
          dateTime: "Sun 10 Apr 2023,10:00",
          suject: "Khmer",
          status: 4.3,
          Teacher: 1,
        },
        {
          dateTime: "Sun 10 Apr 2023,10:00",
          suject: "English",
          status: 6.0,
          Teacher: 7,
        },
        {
          dateTime: "Sun 10 Apr 2023,10:00",
          suject: "Khmer",
          status: 4.0,
          Teacher: 1,
        },
        {
          dateTime: "Sun 10 Apr 2023,10:00",
          suject: "Khmer",
          status: 4.3,
          Teacher: 1,
        },
        {
          dateTime: "Sun 10 Apr 2023,10:00",
          suject: "English",
          status: 6.0,
          Teacher: 7,
        },
        {
          dateTime: "Sun 10 Apr 2023,10:00",
          suject: "Khmer",
          status: 4.0,
          Teacher: 1,
        },
        {
          dateTime: "Sun 10 Apr 2023,10:00",
          suject: "Khmer",
          status: 4.3,
          Teacher: 1,
        },
        {
          dateTime: "Sun 10 Apr 2023,10:00",
          suject: "English",
          status: 6.0,
          Teacher: 7,
        },
      ],
    };
  },
};
</script>
<style>
.v-data-table-footer{
    background: #ebe6e6;
}
thead{
    background: #ebe6e6;
}
</style>