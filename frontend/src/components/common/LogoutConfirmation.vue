<template>
  <div v-if="showDialog" class="logout-confirmation">
    <div class="confirmation-content">
      <p>Are you sure you want to logout?</p>
      <div class="buttons">
        <button @click="cancelLogout">Cancel</button>
        <button @click="confirmLogout">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    openDialog() {
      this.showDialog = true;
    },
    cancelLogout() {
      this.showDialog = false;
    },
    confirmLogout() {
      this.$emit('logout');
      this.showDialog = false;
    },
  },
};
</script>

<style scoped>
.logout-confirmation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.confirmation-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.buttons {
  margin-top: 20px;
}

button {
  margin: 0 10px;
  padding: 5px 10px;
}
</style>
