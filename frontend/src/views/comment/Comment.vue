<template>
  <custom-title icon="mdi-reply">
    <span class="d-inline-block capitalize-first-letter">My Comment</span>
  </custom-title>
  <v-container fluid class="px-0">
    <v-row>
      <v-col class="sidebar elevation-2" cols="3">
        <v-virtual-scroll :items="items" height="655" item-height="10">
          <template v-slot="{ item }">
            <v-list lines="three" select-strategy="classic" class="comment-box">
                <v-card
                  @click="displayFullComment(item.id)"
                  :class="{ 'active-card': item.id === selectedComment?.id }"
                  class="mx-auto"
                  max-width="344"
                  :title="item.first_name + ' ' + item.last_name"
                  :subtitle="item.title"
                  variant="outlined"
                >
                  <template v-slot:prepend>
                    <v-avatar color="blue-darken-2">
                      <v-img :src="item.prependAvatar" alt="John"></v-img>
                    </v-avatar>
                  </template>
                </v-card>
            </v-list>
          </template>
        </v-virtual-scroll>
      </v-col>

      <v-col class="main-content elevation-2" cols="9">
        <v-card
          v-if="selectedComment"
          class="mx-auto pa-0"
          :title="selectedComment.first_name + ' ' + selectedComment.last_name"
          :subtitle="selectedComment.title"
          variant="flat"
        >
          <template v-slot:prepend>
            <v-avatar color="blue-darken-2">
              <v-img
                src="https://cdn.vuetifyjs.com/images/john.png"
                alt="John"
              ></v-img>
            </v-avatar>
          </template>
          <template v-slot:append>
            <v-card-text>
              {{ formatTimestamp(selectedComment.created_at) }}
              <v-btn variant="flat" icon="mdi-dots-vertical"></v-btn
            ></v-card-text>
          </template>
          <v-card-text>
            <div v-html="selectedComment.body.replace(/\n/g, '<br>')"></div>
          </v-card-text>
        </v-card>
        <v-card variant="flat" class="no-selected" height="100%" v-else>
          <div>
            <v-icon size="100" color="primary">mdi-message-alert</v-icon>
          </div>
          <div>
            <span> No comment selected </span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth.js";
let items = ref([]);
let selectedComment = ref(null);

const authStore = useAuthStore();
onMounted(async () => {
  try {
    await authStore.fetchUser();
    items.value = authStore.user.data.comments || [];
    console.log("comment", items.value);
  } catch (error) {
    console.error("Error fetching total students or teachers:", error);
  }
});

const displayFullComment = async (id) => {
  selectedComment.value = items.value.find((comment) => comment.id === id);
};

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const timeDifference = now - date;

  const secondsAgo = Math.floor(timeDifference / 1000);
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (secondsAgo < 60) {
    return `${formattedDate(date)}, ${formattedTime(date)} (just now)`;
  } else if (minutesAgo < 60) {
    return `${formattedDate(date)}, ${formattedTime(
      date
    )} (${minutesAgo} minutes ago)`;
  } else if (hoursAgo < 24) {
    return `${formattedDate(date)}, ${formattedTime(
      date
    )} (${hoursAgo} hours ago)`;
  } else if (daysAgo < 2) {
    return `${formattedDate(date)}, ${formattedTime(date)} (1 day ago)`;
  } else {
    return `${formattedDate(date)}, ${formattedTime(
      date
    )} (${daysAgo} days ago)`;
  }
};

const formattedDate = (date) => {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleString("en-US", options);
};

const formattedTime = (date) => {
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
};
</script>
<style scoped>
.sidebar {
  padding: 4px;
}

.main-content {
  height: 80vh;
  padding: 5px;
}

.comment-box {
  padding: 1px;
}

.active-card {
  background-color: #e0f7fa; /* Set your desired active card background color */
}
.no-selected {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
