<template>
  <div>
    <v-list>
      <v-list-item v-for="item in menuItems" :key="item.title">
        <v-list-item-action>
          <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            <a :href="item.to">{{ item.title }}</a>
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn v-if="item.children" @click="toggleSubmenu(item)">
            <v-icon>
              {{ item.isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
            </v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list v-if="item.isExpanded">
          <menu-list :menuItems="item.children" />
        </v-list>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'MenuList',
  data() {
    return {
      menuItems: [
        {
          title: 'Dashboard',
          to: '/',
          icon: 'mdi-view-dashboard',
          isExpanded: false, // Set isExpanded to false for top-level items
        },
        {
          title: 'Charts',
          children: [
            {
              title: 'Sub Link',
              to: '/charts/sublink',
              icon: 'mdi-chart-line',
              isExpanded: false, // Set isExpanded to false for child items
            },
            {
              title: 'Sub Link',
              to: '/charts/sublink',
              icon: 'mdi-chart-line',
              isExpanded: false, // Set isExpanded to false for child items
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleSubmenu(item) {
      // Make sure item is defined and has the isExpanded property
      if (item && 'isExpanded' in item) {
        item.isExpanded = !item.isExpanded;
        console.log(item);
      }
    },
  },
};
</script>
