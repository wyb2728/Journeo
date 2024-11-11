<template>
    <el-list :loading="loading">
      <el-list-item v-for="spot in scenicSpots" :key="spot.id">
        <el-image :src="spot.image" class="spot-image" />
        <div class="spot-info">
          <h3>{{ spot.name }}</h3>
          <p>{{ spot.description }}</p>
        </div>
      </el-list-item>
      <el-button v-if="!endOfList" @click="loadMore">加载更多</el-button>
    </el-list>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const props = defineProps({ scenicSpots: Array });
  const loading = ref(false);
  const endOfList = ref(false);
  
  function loadMore() {
    loading.value = true;
    // 模拟加载更多数据
    setTimeout(() => { loading.value = false; endOfList.value = true; }, 1000);
  }
  </script>
  
  <style scoped>
  .spot-image { width: 60px; height: 60px; margin-right: 10px; }
  .spot-info { display: flex; flex-direction: column; }
  </style>
  