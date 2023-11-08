<template>
    <custom-title icon="mdi-office-building">
        <span class="d-inline-block capitalize-first-letter">Class Management</span>
    </custom-title>
    <custom-filter />
    <classroom />
</template>

<script>
import Classroom from '@/components/classroomManagement/Classroom.vue';
export default {
    name: "AdminDashboard",
    components:{
        Classroom
    }
}
</script>