<template>
  <div>
    <ul class="notifications">
      <v-card
        v-for="toast in toastList"
        :key="toast.id"
        :class="['toast', { hide: toast.hide }]"
      >
        <div class="column">
          <v-icon color="white" size="40">mdi-robot</v-icon>
          <span>Are your sure you want to log out?</span>
        </div>
        <div class="action">
          <v-btn color="red" @click="confirmAction(toast)">Yes</v-btn>
          <v-btn class="me-3 ms-4" @click="cancelAction(toast)">Cancel</v-btn>
        </div>
      </v-card>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch, onMounted} from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
const authStore = useAuthStore();
const router = useRouter();
const toastList = ref([]);
const isCancelled = ref(false);
const removeToast = (toast) => {
  toast.hide = true;
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  setTimeout(() => {
    const index = toastList.value.indexOf(toast);
    if (index !== -1) toastList.value.splice(index, 1);
  }, 500);
};

const createToast = () => {
  const toast = {
    id: Date.now(),
    hide: false,
  };
  toastList.value.push(toast);
};

const confirmAction = (toast) => {
  console.log("You have been logged out");
  localStorage.removeItem("access_token");
  localStorage.removeItem("user_role");
  removeToast(toast);
  router.push({ name: "login" });
};

const cancelAction = (toast) => {
  console.log("cancel action", toast.hide);
  isCancelled.value = true;
  removeToast(toast);
};

const toastDetails = {
  success: {
    type: "success",
    text: "Are you sure you want to log out?",
  },
};

watch(
  () => useAuthStore().isLogout,
  (newIsLogout) => {
    if (newIsLogout) {
      createToast();
    }
    console.log(
      "isLogout status after logout in logout confirmation:",
      useAuthStore().isLogout
    );
  },
);
</script>

<style scoped>
:root {
  --error: #e24d4c;
  --warning: #e9bd0c;
  --info: #3498db;
}
.notifications {
  position: absolute;
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 1000;
}
.notifications .toast {
  width: 400px;
  list-style: none;
  border-radius: 4px;
  padding: 16px 17px;
  background: #e9bd0c;
  animation: show_toast 0.3s ease forwards;
}
.action {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}
@keyframes show_toast {
  0% {
    transform: translateX(100%);
  }
  40% {
    transform: translateX(-5%);
  }
  80% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-10px);
  }
}
.notifications .toast.hide {
  animation: hide_toast 0.3s ease forwards;
}
@keyframes hide_toast {
  0% {
    transform: translateX(-10px);
  }
  40% {
    transform: translateX(0%);
  }
  80% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(calc(100% + 20px));
  }
}
.toast .column span {
  font-size: 1.1rem;
  margin-left: 12px;
}
span {
  color: white;
}
</style>
