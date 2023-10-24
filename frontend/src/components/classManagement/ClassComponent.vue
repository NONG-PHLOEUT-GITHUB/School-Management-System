<template>
  <header-component></header-component>
  <v-row class="py-12 elevation-4" justify="space-around">
    <v-btn color="primary"> With ripple (default) </v-btn>
    <v-btn :ripple="false" color="primary"> Without ripple </v-btn>
    <div>
      <v-icon
        size="small"
        class="me-2"
        :filter="iconFilter"
        @click="toggleSearchInput"
      >
        mdi-magnify
      </v-icon>

    
      <v-text-field label="Label" variant="outlined"
            v-if="showSearchInput"
            type="text"
            placeholder="Search..."
            @input="handleSearch"
            @blur="hideSearchInput"
      >
      </v-text-field>
    </div>
  </v-row>

  <v-container class="elevation-4">
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        iconFilter: 'brightness(50%)',
        showSearchInput: false,

      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
  },

  methods: {
    toggleSearchInput() {
      this.showSearchInput = !this.showSearchInput;
    },
    // handleSearch(event) {
    //   const searchQuery = event.target.value;
    //   // Perform search logic or emit an event with the search query
    // },
    hideSearchInput() {
      this.showSearchInput = false;
    },
  },
};
</script>
