<template>
  <custom-title icon="mdi-check-all">
    <span class="d-inline-block capitalize-first-letter"
      >Attendance Tracking</span
    >
  </custom-title>
  <v-card class="mb-4">
    <custom-title>
      <v-btn
        variant="text"
        small
        icon="mdi-calendar-range"
      ></v-btn><p>Today: {{ currentDate() }}</p>
      <template #right>
        <v-btn
          color="primary"
          variant="text"
          small
          icon="mdi-send-check-outline"
          @click="detail(item.id)"
        ></v-btn>
      </template>
    </custom-title>
  </v-card>
  <v-data-table
    v-model="selected"
    class="elevation-1 text-center"
    :headers="headers"
    :items="desserts"
    items-per-page="7"
    item-value="name"
    item-selectable="selectable"
    return-object
    show-select
  >
    <template v-slot:[`item.image`]="{}">
      <v-avatar>
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        ></v-img>
      </v-avatar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-btn
        variant="text"
        small
        icon="mdi-message-alert-outline"
        @click="detail(item.id)"
      ></v-btn>
    </template>
    <template v-slot:[`item.status`]="{ item }">
      <v-select
        style="margin-top: 16px"
        v-model="item.status"
        :items="[
          'Present',
          'Absent',
          'Early',
          'Excused',
          'Unexcused',
          'On leave',
          'No show'
        ]"
        variant="outlined"
        density="compact"
      ></v-select>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      selected:'',
      cards: [
        {
          model: false,
          show: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/john.jpg'
        }
      ],
      headers: [
        { title: 'Profile', align: 'center', key: 'suject' },
        { title: 'First name', align: 'center', key: 'dateTime' },
        { title: 'Last name', align: 'center', key: 'Teacher' },
        { title: 'Status', align: 'center', key: 'status' },
        { title: 'Message', align: 'center', key: 'actions' }
      ],
      desserts: [
        {
          dateTime: '76',
          suject: 'Khmer',

          Teacher: 1
        },
        {
          dateTime: '76',
          suject: 'Khmer',
          Teacher: 40.04
        },
        {
          dateTime: '76',
          suject: 'English',
          Teacher: 7
        },
        {
          dateTime: '76',
          suject: 'Khmer',

          Teacher: 40.04
        },
        {
          dateTime: '76',
          suject: 'Khmer',
          Teacher: 40.04
        },
        {
          dateTime: '76',
          suject: 'English',
          Teacher: 7
        },
        {
          dateTime: '76',
          suject: 'Khmer',

          Teacher: 40.04
        },
        {
          dateTime: '76',
          suject: 'Khmer',
          Teacher: 40.04
        },
        {
          dateTime: '76',
          suject: 'English',
          Teacher: 30.2
        },
        {
          dateTime: '36',
          suject: 'Khmer',

          Teacher: 40.04
        }
      ]
    }
  },
  methods: {
    loadMoreData() {
      // Simulate loading more data (replace this with your actual data loading logic)
      const newData = [
        // Load your new data here
      ]

      // Append the new data to the existing cards
      this.cards = [...this.cards, ...newData]
    },
    toggleCard(index) {
      this.cards[index].show = !this.cards[index].show
      console.log(index)
    },
    toggleSwitcher(index) {
      this.cards[index].model = !this.cards[index].model
      console.log(index)
    },
    currentDate() {
      const current = new Date()
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      const monthIndex = current.getMonth()
      const monthName = monthNames[monthIndex]
      const date = `${current.getDate()}/${monthName}/${current.getFullYear()} => ${current.getHours()}h:${current.getMinutes()}mn:${current.getSeconds()}s`
      return date
    }
  },
  computed: {
    counterAttendance() {
      return this.cards.filter((card) => card.show || card.model).length
    }
  }
}
</script>

<style scoped>
.card-action {
  display: flex;
  justify-content: space-between;
}

.card-action {
  padding: 0px 5px 0px 10px;
}
</style>
