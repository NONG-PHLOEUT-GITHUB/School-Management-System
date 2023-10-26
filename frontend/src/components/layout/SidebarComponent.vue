<template>
  <v-navigation-drawer v-model="drawer">
    <div class="logo">
      <img :src="logo" alt="" :width="130">
    </div>
      <!-- <v-list>
        <v-list-item>
        <router-link to="/about">Forgot login password?</router-link>
        <router-link to="/home">Forgot login password?</router-link>
        </v-list-item>
      </v-list> -->
        <v-list>
          <v-list-item prepend-icon="mdi-widgets" title="Dashboard" value="home" :to="{name:'dashboard'}"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account" :to="{name:'user-management'}"></v-list-item>
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
      logo: require('@/assets/images/logo.png'),
    };
  },
  methods:{
      drawer(){
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
};
</script>

<style>
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
}
v-list-item{
  font-size: 30px;
  color: red;
}
</style>