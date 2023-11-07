<template>
    <layout-user-detail/>
    <menu-user-details/>
</template>

<script>
import MenuUserDetails from "@/components/user/UserDetails.vue"
import LayoutUserDetail from "@/components/user/LayoutUserDetail.vue"
export default {
    components:{
        MenuUserDetails,
        LayoutUserDetail
    }
}
</script>
