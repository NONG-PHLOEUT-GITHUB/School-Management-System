<template>
    <div>
      <TitleComponent icon="mdi-format-title" titleText="My Custom Title" />
    </div>
  </template>
  
  <script>
  import TitleComponent from '@/components/common/TitleComponent.vue';
  
  export default {
    components: {
      TitleComponent,
    },
  };
  </script>