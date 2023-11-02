<template>
  <!-- <v-container fluid class="pa-0">
    <v-row justify="center">
      <v-col cols="0">
        <v-hover v-slot="{ isHovering, props }" close-delay="200">
          <v-card
            class="mx-auto elevation-3 rounded-xl"
            :elevation="isHovering ? 16 : 2"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            :color="isHovering ? 'pink-accent-3' : undefined"
          >
            <v-card-text>
              <div class="d-flex justify-center align-center">
                <v-icon size="48" class="mr-2">mdi-account-group</v-icon>
                <div>
                  <div class="text-h6">
                    {{ $t("dashboard.studentTotal") }}
                  </div>
                  <div class="text-h3 font-weight-bold">
                    {{ totalStudents }}
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="0">
        <v-card class="elevation-3 rounded-xl">
          <v-card-text>
            <div class="d-flex justify-center align-center">
              <v-icon size="48" class="mr-2">mdi-account-tie</v-icon>
              <div>
                <div class="text-h6">{{ $t("dashboard.teacherTotal") }}</div>
                <div class="text-h3 font-weight-bold">{{ totalTeachers }}</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="0">
        <v-card class="elevation-3 rounded-xl">
          <v-card-text>
            <div class="d-flex justify-center align-center">
              <v-icon size="48" class="mr-2">mdi-school</v-icon>
              <div>
                <div class="text-h6">Total Courses</div>
                <div class="text-h3 font-weight-bold">30</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="0">
        <v-card class="elevation-3 rounded-xl">
          <v-card-text>
            <div class="d-flex justify-center align-center">
              <v-icon size="48" class="mr-2">mdi-calendar-month</v-icon>
              <div>
                <div class="text-h6">Next Event</div>
                <div class="font-weight-bold">Titlt: Semester Start</div>
                <div class="text-h6">Date: {{ formatDate }}</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->
  <v-container fluid class="pa-0">
    <v-row justify="center">
      <v-col v-for="(card, index) in cards" :key="index" cols="0">
        <v-hover v-slot="{ isHovering, props }" close-delay="200">
          <v-card
            class="mx-auto elevation-3 rounded-xl"
            :elevation="isHovering ? 16 : 2"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            :color="isHovering ? card.color : undefined"
          >
            <v-card-text>
              <div class="d-flex justify-center align-center">
                <v-icon size="48" class="mr-2">{{ card.icon }}</v-icon>
                <div>
                  <div class="text-h6">{{ card.title }}</div>
                  <div class="text-h3 font-weight-bold">{{ card.value }}</div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>

</template>

<!-- //   formatDate() {
//     // Use your preferred date formatting method here
//     return new Date().toLocaleDateString();
//   }, -->
<!-- <script setup>
import { computed, onMounted } from "vue";
import { useStudentStore } from "@/stores/student";
import { useTeacherStore } from "@/stores/teacher";

const studentStore = useStudentStore();
const teacherStore = useTeacherStore();

const totalStudents = computed(() => studentStore.totalStudents);
const totalTeachers = computed(() => teacherStore.totalTeachers);
//totalTeachers call from stores
onMounted(async () => {
  try {
    await studentStore.fetchTotalStudents();
    await teacherStore.fetchTotalTeachers();
  } catch (error) {
    console.error("Error fetching total students:", error);
  }
});
</script> -->

<script setup>
import { computed, onMounted } from "vue";
import { useStudentStore } from "@/stores/student";
import { useTeacherStore } from "@/stores/teacher";

const studentStore = useStudentStore();
const teacherStore = useTeacherStore();

const totalStudents = computed(() => studentStore.totalStudents);
const totalTeachers = computed(() => teacherStore.totalTeachers);

// Define your cards array with computed properties
const cards = [
  {
    icon: 'mdi-account-group',
    title: "Total Students",
    value: totalStudents.value,
    color: 'pink-accent-3',
  },
  {
    icon: 'mdi-account-tie',
    title: "Total Teachers",
    value: totalTeachers.value,
    color: 'pink-accent-3',
  },
  {
    icon: 'mdi-school',
    title: 'Total Courses',
    value: 30,
    color: 'pink-accent-3',
  },
  {
    icon: 'mdi-calendar-month',
    title: 'Next Event',
    value: '9',
    color: 'pink-accent-3',
  },
];

// Fetch the totalStudents and totalTeachers values on component mount
onMounted(async () => {
  try {
    await studentStore.fetchTotalStudents();
    await teacherStore.fetchTotalTeachers();
  } catch (error) {
    console.error("Error fetching total students or teachers:", error);
  }
});
</script>