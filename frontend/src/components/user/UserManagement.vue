<template>
  <v-data-table
    v-model="selected"
    class="elevation-1"
    :headers="headers"
    :items="desserts"
    items-per-page="10"
    item-value="name"
    return-object
    show-select
  >
  </v-data-table>
</template>
<script setup>
import { useUsersStore } from "@/stores/users";
import { ref, onMounted } from "vue";
const usersStore = useUsersStore();

const headers = [
  { title: "Profile", align: "center", key: "profile" },
  { title: "First Name", align: "center", key: "first_name" },
  { title: "Last Name", align: "center", key: "last_name" },
  { title: "Email", align: "center", key: "email" },
  { title: "Status", align: "center", key: "role" },
  { title: "", align: "center", key: "iron" },
  { title: "", align: "center", key: "Action" },
];
const desserts = ref([]);
const selected = ref([]);

onMounted(async () => {
  try {
    await usersStore.fetchAllUsersData();
    console.log(usersStore.users);
    usersStore.users.data.forEach((user) => {
      desserts.value.push({
        date: user.date,
        profile: user.profile,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role,
        id: user.id,
      });
    });
  } catch (error) {
    console.error("Error fetching total students or teachers:", error);
  }
});
</script>

<style scoped>

.v-data-table-footer {
  background: #dfcece;
}
thead {
  background: #d4c0c0;
}
</style>
