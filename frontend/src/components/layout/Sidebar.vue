<template>
  <v-navigation-drawer v-model="drawer">
    <div class="logo">
      <img :src="logo" alt="" :width="130" />
    </div>
    <div v-if="isAdmin == true">
      <AdminMenu :menuItems="menuItems"></AdminMenu>
    </div>
    <div v-if="isTeacher">
      <TeacherMenu :menuItems="menuItems"></TeacherMenu>
    </div>
    <div v-if="isStudent">
      <StudentMenu :menuItems="menuItems"></StudentMenu>
    </div>
  </v-navigation-drawer>
</template>

<script>
import AdminMenu from '../menus/AdminMenu.vue'
import TeacherMenu from '../menus/TeacherMenu.vue'
import StudentMenu from '../menus/StudentMenu.vue'

export default {
  components: {
    AdminMenu,
    StudentMenu,
    TeacherMenu
  },
  props: {
    value: Boolean
  },

  data() {
    return {
      logo: require('@/assets/images/logo.png'),
      isAdmin: false,
      isTeacher: false,
      isStudent: false,
      menuItems: []
    }
  },
  methods: {
    drawer() {
      return this.value
    },
    set(val) {
      this.$emit('input', val)
    },
    setUserRole(role) {
      if (role == 1) {
        this.isAdmin = true
      } else if (role == 2) {
        this.isTeacher = true
      } else {
        this.isStudent = true
      }
    }
  },
  mounted() {
    const userRole = localStorage.getItem('user_role')
    this.setUserRole(userRole)
  }
}
</script>

<style>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
v-list-item {
  font-size: 30px;
  color: red;
}
</style>
