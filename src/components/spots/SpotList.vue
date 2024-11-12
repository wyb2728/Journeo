<!-- src/components/spots/SpotList.vue -->
<template>
    <div class="spot-list">
      <el-scrollbar>
        <div class="list-container" v-infinite-scroll="loadMore" infinite-scroll-distance="10">
          <spot-item
            v-for="spot in spots"
            :key="spot.id"
            :spot="spot"
            @click="handleSpotClick"
          />
          
          <div v-if="loading" class="loading-more">
            <el-skeleton :rows="3" animated />
          </div>
          
          <div v-if="!hasMore" class="no-more">
            没有更多了
          </div>
        </div>
      </el-scrollbar>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import SpotItem from './SpotItem.vue'
  
  const spots = ref([])
  const page = ref(1)
  const loading = ref(false)
  const hasMore = ref(true)
  
  // 模拟获取数据
  const fetchSpots = async (page) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Array(10).fill().map((_, index) => ({
          id: page * 10 + index,
          name: `景点 ${page * 10 + index}`,
          description: '这是一个很好的旅游景点，风景优美，值得一游。这里有很多特色美食和独特的文化体验。',
          image: 'https://via.placeholder.com/80',
          rating: Math.floor(Math.random() * 5) + 1,
          distance: (Math.random() * 10).toFixed(1)
        })))
      }, 500)
    })
  }
  
  const loadMore = async () => {
    if (loading.value || !hasMore.value) return
    
    loading.value = true
    try {
      const newSpots = await fetchSpots(page.value)
      if (newSpots.length === 0) {
        hasMore.value = false
        return
      }
      spots.value.push(...newSpots)
      page.value++
    } finally {
      loading.value = false
    }
  }
  
  const handleSpotClick = (spot) => {
    emit('spot-selected', spot)
  }
  
  onMounted(() => {
    loadMore()
  })
  
  const emit = defineEmits(['spot-selected'])
  </script>
  
  <style scoped>
  .spot-list {
    flex: 1;
    overflow: hidden;
    margin-top: 10px;
  }
  
  .list-container {
    padding: 12px;
  }
  
  .loading-more {
    padding: 20px 0;
  }
  
  .no-more {
    text-align: center;
    color: #999;
    padding: 20px 0;
    font-size: 14px;
  }
  
  :deep(.el-scrollbar__wrap) {
    overflow-x: hidden;
  }
  </style>