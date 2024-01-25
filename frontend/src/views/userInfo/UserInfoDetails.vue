<template>
  <div>
    <v-card v-for="section in sections" :key="section.title">
      <custom-title :icon="section.icon">
        <span class="d-inline-block capitalize-first-letter">{{
          section.title
        }}</span>
      </custom-title>

      <v-card variant="tonal" class="px-5">
        <v-row class="mt-2">
          <v-col v-for="field in section.fields" :key="field.label" cols="3">
            <v-text-field variant="outlined"></v-text-field>
          </v-col>
        </v-row>
        <v-divider class="border-opacity-50"></v-divider>
        <v-row class="mt-2">
          <v-col v-for="field in section.fields" :key="field.label" cols="3">
            <v-text-field variant="outlined"></v-text-field>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/users';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'

const userStore = useUserStore();
const router = useRouter();
const userDetail = async(id)=>{
  console.log('hello world');
 await userStore.getUserDetails(id)
}

onMounted(async () => {
  // await loadData()
  const id = router.currentRoute.value.params.id
  console.log(id)
  await userDetail(id)
})
// export default {
//   data() {
//     return {
//       sections: [
//         {
//           title: 'Personal Information',
//           icon: 'mdi-home',
//           fields: [
//             { label: 'Field 1' },
//             { label: 'Field 2' },
//             { label: 'Field 3' }
//           ]
//         },
//         {
//           title: 'Contact Information',
//           icon: 'mdi-web',
//           fields: [
//             { label: 'Field 4' },
//             { label: 'Field 5' },
//             { label: 'Field 6' }
//           ]
//         }
//       ]
//     }
//   }
// }
</script>
