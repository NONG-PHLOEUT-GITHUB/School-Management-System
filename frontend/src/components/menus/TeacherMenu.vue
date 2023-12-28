<template>
  <v-list>
    <v-list-item
      v-for="item in menuItems"
      :key="item.value"
      :prepend-icon="item.icon"
      :title="$t(item.title)"
      :value="item.value"
      :to="item.to"
    ></v-list-item>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          icon: 'mdi-widgets',
          title: 'menu.dashboard',
          value: 'home',
          to: { name: 'dashboard' }
        },
        {
          icon: 'mdi-human-male-board-poll',
          title: 'Classroom teaching',
          value: 'classroom teaching',
          to: { name: 'teacherClassroom' }
        },
        // {
        //   icon: 'mdi-book-open',
        //   title: 'Classroom teaching',
        //   value: 'classroom teaching',
        //   to: { name: 'teacherClassroom' }
        // },
        // {
        //   icon: 'mdi-account-group-outline',
        //   title: 'menu.userMg',
        //   value: 'account',
        //   to: { name: 'user-management' }
        // },
        // {
        //   icon: 'mdi-chair-school',
        //   title: 'menu.classMg',
        //   value: 'users',
        //   to: { name: 'ClassManagement' }
        // },
        {
          icon: 'mdi-comment-quote',
          title: 'Class Feedback',
          value: 'academic',
          to: { name: 'feedback' }
        }
      ]
    }
  }
}
</script>
