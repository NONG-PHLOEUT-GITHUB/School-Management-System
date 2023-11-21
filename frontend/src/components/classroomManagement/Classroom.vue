<template>
  <!-- <v-btn>Create Class</v-btn> -->
  <v-container fluid class="pa-2">
    <v-row>
      <!--sm Display 2 cards per row on small screens -->
      <!--md Display 3 cards per row on medium screens -->
      <!--lg Display 4 cards per row on large screens -->
      <v-col
        class="pa-1"
        sm="6"
        md="4"
        lg="2"
        v-for="(classroom, index) in classroomStore.classrooms.data"
        :key="index"
      >
        <v-card class="card elevation-2">
          <v-card-title class="card-title">
            <span class="text-h6 font-weight-black">{{
              classroom.classroom_name
            }}</span>
            <v-icon>mdi-school</v-icon>
          </v-card-title>

          <v-card-text class="font-weight-bold mt-1">
            <v-icon class="mb-1">mdi-account-tie</v-icon>
            <span class="ms-2"
              >{{ classroom.teacher_first_name }}
              {{ classroom.teacher_last_name }}</span
            >
          </v-card-text>
          <v-card-actions class="card-action">
            <v-card-actions>
              <v-icon>mdi-account-group-outline</v-icon>
              <span class="text-h6 font-weight-black ms-3">{{
                classroom.student_count
              }}</span>
            </v-card-actions>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn size="small" v-bind="props">
                  <v-icon size="x-large">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                  <!-- <v-list-item :value="item.title" v-if="item.title == 'delete'" :style="{ color: 'red' }">{{
                    item.title
                  }}</v-list-item> -->
                  <v-list-item
                    :value="item.title"
                    v-if="item.title === 'Delete'"
                    :style="{ color: 'red' }"
                  >
                    {{ item.title }}
                  </v-list-item>
                  <v-list-item :value="item.title" v-else>
                    {{ item.title }}
                  </v-list-item>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from "vue";
import { useClassroomStore } from "@/stores/classroom.js";

const items = [{ title: "Edit" }, { title: "Delete" }];

const classroomStore = useClassroomStore();
console.log(classroomStore.classrooms.data);

onMounted(async () => {
  try {
    await classroomStore.fetchAllClassrooms();
  } catch (error) {
    console.error("Error fetching total students or teachers:", error);
  }
});
</script>

<style scoped>
.card-title,
.card-action {
  display: flex;
  justify-content: space-between;
}
.card-action {
  padding: 0px 5px 0px 10px;
}
</style>
