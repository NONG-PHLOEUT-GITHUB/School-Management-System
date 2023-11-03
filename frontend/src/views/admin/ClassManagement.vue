<template>
    <custom-title icon="mdi-office-building">
        <span class="d-inline-block capitalize-first-letter">Class Management</span>
    </custom-title>
    <ClassComponent></ClassComponent>
</template>

<script>
import ClassComponent from '@/components/classManagement/ClassComponent.vue';
export default {
    name: "AdminDashboard",
    components:{
        ClassComponent
    }
}
</script>