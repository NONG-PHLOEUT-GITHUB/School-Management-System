<template>
  <custom-title icon="mdi-account">
    <span class="d-inline-block capitalize-first-letter"
      >Student<v-icon>mdi-arrow-right</v-icon> Kukasa tharo
      <v-avatar size="50" class="profile-avatar">
        <v-img cover src="../../../public/assets/images/avatar1.png">
        </v-img>
      </v-avatar>
      </span>
    </custom-title>
    <menu-user-details/>
</template>

<script>
import MenuUserDetails from "@/components/user/UserDetails.vue"
export default {
    components:{
        MenuUserDetails
    }
}
</script>
