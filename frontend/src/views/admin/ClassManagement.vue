<template>
    <custom-title icon="mdi-office-building">
        <span class="d-inline-block capitalize-first-letter">Class Management</span>
    </custom-title>
    <classroom />
</template>

<script>
import Classroom from '@/components/classroom/Classroom.vue';
export default {
    name: "AdminDashboard",
    components:{
        Classroom
    }
}
</script>