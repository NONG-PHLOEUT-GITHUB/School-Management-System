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
    <div class="buttons">
      <button class="btn" @click="createToast('success')">Success</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      toastList: [],
    };
  },
  methods: {
    removeToast(toast) {
      toast.hide = true;
      if (toast.timeoutId) clearTimeout(toast.timeoutId);
      setTimeout(() => {
        const index = this.toastList.indexOf(toast);
        if (index !== -1) this.toastList.splice(index, 1);
      }, 500);
    },
    createToast() {
      const toast = {
        id: Date.now(),
        hide: false,
      };
      this.toastList.push(toast);
    },

    confirmAction(toast) {
      if (toast.action === 'logout') {
        console.log('Logout confirmed');
      }
      this.removeToast(toast);
    },
    cancelAction(toast) {
      this.removeToast(toast);
    },
  },
  computed: {
    toastDetails() {
      return {
        success: {
          type: "success",
          text: "Are your sure you want to log out?",
        },
      };
    },
  },
};
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
