<template>
  <custom-title 
  title="My Profile"
  icon="mdi-account-circle"
  />
  <profile-user/>

</template>


<script>
import CustomTitle from '@/components/common/CustomTitle.vue';
import ProfileUser from '@/components/user/Profile.vue';
export default {
  name: "UserProfile",

  components:{
    CustomTitle,
    ProfileUser
  }
};
</script>

