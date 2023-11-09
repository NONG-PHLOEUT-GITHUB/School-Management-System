<template>
  <v-navigation-drawer v-model="drawer">
    <div class="logo">
      <img :src="logo" alt="" :width="130" />
    </div>
    <v-list>
      <v-list-item
        prepend-icon="mdi-widgets"
        :title="$t('menu.dashboard')"
        value="home"
        :to="{ name: 'dashboard' }"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group-outline"
        :title="$t('menu.userMg')"
        value="account"
        :to="{ name: 'user-management' }"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-chair-school"
        :title="$t('menu.classMg')"
        value="users"
        :to="{ name: 'ClassManagement' }"
      ></v-list-item>
      <!-- Storing student academic records, including grades, subjects, and exam results.
Transcripts and report card generation. -->
      <v-list-item
        prepend-icon="mdi-book-open"
        title="Academic Records"
        value="academic"
        :to="{ name: 'UserDetail' }"
      ></v-list-item>
      <!-- give feed back to student -->
      <v-list-item
        prepend-icon="mdi-clipboard-check"
        title="Attendance Tracking"
        value="attendance"
      ></v-list-item>
      <!-- give feed back to student -->
      <v-list-item
        prepend-icon="mdi-comment"
        title="Communication"
        value="communication"
        :to="{ name: 'comment' }"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },

  data() {
    return {
      logo: require("@/assets/images/logo.png"),
    };
  },
  methods: {
    drawer() {
      return this.value;
    },
    set(val) {
      this.$emit("input", val);
    },
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
