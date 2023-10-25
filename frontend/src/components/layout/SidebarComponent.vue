<template>
  <v-navigation-drawer v-model="drawer">
    <div class="logo">
      <img :src="logo" alt="" :width="130">
    </div>
      <v-list>
        <v-list-item>
        <router-link to="/about">Forgot login password?</router-link>
        <router-link to="/home">Forgot login password?</router-link>
        </v-list-item>
      </v-list>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-widgets" title="Dashboard" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
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
      // drawer: null,
      logo: require('@/assets/images/logo.png'),
    };
  },
  methods:{
    drawer: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },


  }
};
</script>

<style>
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>