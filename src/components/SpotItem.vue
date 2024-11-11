<!-- src/components/SpotItem.vue -->
<template>
    <el-card class="spot-item" shadow="always">
      <img :src="spot.image" alt="Spot Image" class="spot-image" />
      <div class="spot-info">
        <h3>{{ spot.name }}</h3>
        <p>{{ spot.description }}</p>
      </div>
    </el-card>
  </template>
  
  <script>
  export default {
    props: {
      spot: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .spot-item {
    display: flex;
    margin-bottom: 10px;
  }
  .spot-image {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }
  .spot-info {
    flex-grow: 1;
  }
  </style>
  