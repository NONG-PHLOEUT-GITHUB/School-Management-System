<template>
    <div>
      <ul class="notifications">
        <li v-for="toast in toastList" :key="toast.id" :class="['toast', toast.type, { hide: toast.hide }]">
          <div class="column">
            <v-icon color="white" :class="toast.icon">mdi-check-circle</v-icon>
            <span>{{ toast.text }}</span>
          </div>
          <i class="fa-solid fa-xmark" @click="removeToast(toast)"></i>
          <v-icon color="red">mdi-close</v-icon>
        </li>
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
      createToast(type) {
        const { icon, text } = this.toastDetails[type];
        const toast = {
          id: Date.now(),
          type,
          icon,
          text,
          hide: false,
        };
        this.toastList.push(toast);
        toast.timeoutId = setTimeout(() => this.removeToast(toast), this.toastDetails.timer);
      },
    },
    watch: {
      value(newVal) {
        this.toastList = newVal.slice();
      },
    },
    created() {
      this.toastList = this.value.slice();
    },
    computed: {
      toastDetails() {
        return {
          timer: 1000,
          success: {
            type: 'success',
            icon: 'fa-circle-check',
            text: 'Success: Login successfull.',
          },
        };
      },
    },
  };
  </script>
  
  
<style scoped>


/* Import Google font - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  /* background: red; */
}
:root {
  --dark: #34495E;
  --light: #ffffff;
  /* --success: #0ABF30; */
  --success: white;
  --error: #E24D4C;
  --warning: #E9BD0C;
  --info: #3498DB;
}
.notifications {
  position: absolute;
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 1000;
}
.notifications :where(.toast, .column) {
  display: flex;
  align-items: center;
}
.notifications .toast {
  width: 400px;
  position: relative;
  overflow: hidden;
  list-style: none;
  border-radius: 4px;
  padding: 16px 17px;
  margin-bottom: 10px;
  background: var(--light);
  background:#25a625;
  justify-content: space-between;
  animation: show_toast 0.3s ease forwards;
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
.toast::before {
  position: absolute;
  content: "";
  height: 3px;
  width: 100%;
  bottom: 0px;
  left: 0px;
  animation: progress 5s linear forwards;
}
@keyframes progress {
  30% {
    width: 0%;
  }
}
.toast.success::before, .btn#success {
  background: var(--success);
}
.toast.error::before, .btn#error {
  background: var(--error);
}
.toast.warning::before, .btn#warning {
  background: var(--warning);
}
.toast.info::before, .btn#info {
  background: var(--info);
}
.toast .column i {
  font-size: 1.75rem;
}
.toast.success .column i {
  color: var(--success);
}
.toast.error .column i {
  color: var(--error);
}
.toast.warning .column i {
  color: var(--warning);
}
.toast.info .column i {
  color: var(--info);
}
.toast .column span {
  font-size: 1.07rem;
  margin-left: 12px;
}
.toast i:last-child {
  color: #aeb0d7;
  cursor: pointer;
}
.toast i:last-child:hover {
  color: var(--dark);
}
.buttons .btn {
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 5px;
  color: var(--light);
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 4px;
}

/*  */
span{
  color: white;
}
</style>