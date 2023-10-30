<template>
    <div>
      <h1>Main Navigation</h1>
      <MenuList :menuItems="menuItems"></MenuList>
    </div>
  </template>
  
  <script>
  import MenuList from './menuItems/MenuList.vue'; // Adjust the import path based on your project structure
  
  export default {
    name: 'AppMenuSidebar',
    components: {
      MenuList,
    },
    data() {
      return {
        menuItems: [
          {
            title: 'Dashboard',
            to: '/',
          },
          {
            title: 'Charts',
            children: [
              {
                title: 'Sub Link',
                to: '/charts/sublink',
              },
            ],
          },
        ],
      };
    },
  };
  </script>
  