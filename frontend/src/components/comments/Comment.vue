<template>
  <div>
    <v-card
      class="mt-2"
      v-for="(card, index) in cards"
      :key="index"
      :title="card.name"
      :subtitle="card.subtitle"
    >
      <template v-slot:prepend>
        <v-avatar>
          <v-img :src="card.avatar"></v-img>
        </v-avatar>
      </template>
      <template v-slot:append>
        <span>{{ card.timestamp }}</span>
        <v-icon size="small" icon="mdi-check" color="success"></v-icon>
        <v-btn
          variant="plain"
          :icon="card.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="toggleCard(index)"
        ></v-btn>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn variant="text" size="small" v-bind="props">
              <v-icon size="x-large">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in menuItems" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <v-expand-transition>
        <div v-show="card.show">
          <v-divider></v-divider>
          <v-card-text>
            {{ card.content }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuItems: [{ title: 'Edit' }, { title: 'Delete' }],
    cards: [
      {
        name: 'Nong Phloeut',
        subtitle: 'Feedback for this month',
        avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
        timestamp: '2 days ago',
        show: false,
        content:
          "I'm a thing. But, like most politicians, he promised more than he could deliver..."
      },
      {
        name: 'Nong Phloeut',
        subtitle: 'Feedback for this month',
        avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
        timestamp: '20 days ago',
        show: false,
        content:
          "I'm a thing. But, like most politicians, he promised more than he could deliver..."
      },
      {
        name: 'Nong Phloeut',
        subtitle: 'Feedback for this month',
        avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
        timestamp: '25 days ago',
        show: false,
        content:
          "I'm a thing. But, like most politicians, he promised more than he could deliver..."
      }
      // Define data for more cards here...
    ]
  }),
  methods: {
    toggleCard(index) {
      this.cards[index].show = !this.cards[index].show
    }
  }
}
</script>
