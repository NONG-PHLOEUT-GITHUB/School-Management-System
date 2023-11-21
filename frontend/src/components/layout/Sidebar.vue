<template>
  <v-navigation-drawer v-model="drawer">
    <div class="logo">
      <img :src="logo" alt="" :width="130" />
    </div>
    <div v-if="isAdmin == true">
      Welcome, admin!
      <MenuList :menuItems="menuItems"></MenuList>
    </div> 
    <div v-if="isTeacher">
      Welcome, teacher!
      <TeacherMenu :menuItems="menuItems"></TeacherMenu>
    </div>
    <div v-if="isStudent">
      Welcome, students!
      <!-- <MenuList :menuItems="menuItems"></MenuList> -->
      <StudentMenu :menuItems="menuItems"></StudentMenu>
    </div>
   admin role {{ isAdmin }}
  </v-navigation-drawer>
</template>

<script>
import MenuList from '../menus/MenuList.vue';
import TeacherMenu from '../menus/TeacherMenu.vue';
import StudentMenu from '../menus/StudentMenu.vue';
import { useAuthStore } from "@/stores/auth";
export default {
  components:{
    MenuList,
    StudentMenu,
    TeacherMenu
  },
  props: {
    value: Boolean,
  },

  data() {
    return {
      logo: require("@/assets/images/logo.png"),
      isAdmin: false,
      isTeacher: false,
      isStudent: false,
    };
  },
  methods: {
    drawer() {
      return this.value;
    },
    set(val) {
      this.$emit("input", val);
    },
    setUserRole(role) {
      if(role === 1){
        this.isAdmin = true;
      }
      else if(role === 2){
        this.isTeacher = true;
      } else {
        this.isStudent = true;
      }
    },
  },
  mounted() {
    const authStore = useAuthStore(); // Create an instance of your auth store
    const userRole = authStore.userRole; // Access the userRole property from the store
    console.log(userRole);
    this.setUserRole(userRole);
  },
};
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
