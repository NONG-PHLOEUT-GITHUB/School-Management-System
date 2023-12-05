<template>
  <v-data-table
    v-model="selected"
    class="elevation-1 text-center"
    :headers="headers"
    :items="desserts"
    items-per-page="10"
    item-value="name"
    item-selectable="selectable"
    return-object
    show-select
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>
          <v-checkbox hide-details color="red" value="red"></v-checkbox>
        </td>
        <td>
          <v-avatar color="info">
            <v-icon icon="mdi-account-circle"></v-icon>
          </v-avatar>
        </td>
        <td>{{ item.calories }}</td>
        <td>{{ item.fat }}</td>
        <td>{{ item.carbs }}</td>
        <td>
          <v-chip class="ma-2" color="red" text-color="white"> student </v-chip>
        </td>
        <td>{{ item.iron }}</td>
        <td>
          <v-btn icon="mdi-eye" variant="plain"></v-btn>
          <v-btn icon="mdi-delete" variant="plain"></v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selected: [],
      headers: [
        { title: 'Profile', align: 'center', key: 'profile' },
        { title: 'First Name', align: 'center', key: 'calories' },
        { title: 'Last Name', align: 'center', key: 'fat' },
        { title: 'Email', align: 'center', key: 'email' },
        { title: 'Status', align: 'center', key: 'protein' },
        { title: 'Iron (%)', align: 'center', key: 'iron' },
        { title: '', align: 'center', key: 'Action' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 'Nong ',
          fat: 'Phloeut',
          carbs: 24,
          protein: 4.0,
          iron: 1
        },
        {
          name: 'Ice cream sandwich',
          calories: 'Zucima ',
          fat: 'Tu',
          carbs: 'zucimatu@gmail.com',
          protein: 4.3,
          iron: 1
        },
        {
          name: 'Eclair',
          calories: 'Kakava',
          fat: 'Tok',
          carbs: 23,
          protein: 6.0,
          iron: 7
        }
      ]
    }
  }
}
</script>
<style scoped>
.v-data-table-header th {
  white-space: nowrap;
  background: #000;
}
</style>
