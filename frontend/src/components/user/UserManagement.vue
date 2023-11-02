<template>
  <v-data-table
    v-model="selected"
    class="elevation-3"
    :headers="headers"
    :items="desserts"
    items-per-page="10"
    item-value="name"
    return-object
    show-select
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>
          <v-checkbox hide-details></v-checkbox>
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.fat }}</td>
        <td>{{ item.carbs }}</td>
        <td>{{ item.protein }}</td>
        <td>{{ item.iron }}</td>
        <td>{{ item.action }}</td>
        <!-- <td>
          <v-icon @click="viewItem(item)">mdi-eye</v-icon>
          <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
        </td> -->
      </tr>
    </template>
  </v-data-table>
  <v-card class="mt-2 pa-2">
    <pre>{{ selected }}</pre>
  </v-card>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selected: [],
      headers: [
        {title: "Profile",align: "start",key: "profile"},
        { title: "First Name", align: "end", key: "calories" },
        { title: "Last Name", align: "end", key: "fat" },
        { title: "Email", align: "end", key: "email" },
        { title: "Protein (g)", align: "end", key: "protein" },
        { title: "Iron (%)", align: "end", key: "iron" },
        { title: "Action", align: "end", key: "Action" },
        // { title: "Action", align: "end", key: "Action" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: "Nong Phloeut",
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
          action: "Some Action",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
      ],
    };
  },
};
</script>
