<!-- src/components/spots/SpotItem.vue -->
<template>
    <div class="spot-item" @click="$emit('click', spot)">
      <el-image :src="spot.image" class="spot-image" fit="cover">
        <template #error>
          <div class="image-placeholder">
            <el-icon><Picture /></el-icon>
          </div>
        </template>
      </el-image>
      
      <div class="spot-info">
        <h3 class="spot-name">{{ spot.name }}</h3>
        <p class="spot-description">{{ spot.description }}</p>
        <div class="spot-meta">
          <span class="rating">
            <el-rate 
              v-model="spot.rating" 
              disabled 
              :max="5"
              :colors="['#ff9900', '#ff9900', '#ff9900']"
              :void-color="'#C6D1DE'"
            />
          </span>
          <span class="distance" v-if="spot.distance">
            <el-tag size="small" type="info">{{ spot.distance }}km</el-tag>
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Picture } from '@element-plus/icons-vue'
  
  defineProps({
    spot: {
      type: Object,
      required: true,
      validator: (spot) => {
        return spot.id && spot.name && spot.image
      }
    }
  })
  
  defineEmits(['click'])
  </script>
  
  <style scoped>
  .spot-item {
    display: flex;
    padding: 16px;
    margin-bottom: 12px;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid #ebeef5;
  }
  
  .spot-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  }
  
  .spot-image {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f7fa;
    color: #909399;
    font-size: 20px;
  }
  
  .spot-info {
    flex: 1;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
  }
  
  .spot-name {
    margin: 0 0 8px;
    font-size: 16px;
    font-weight: bold;
    color: #303133;
  }
  
  .spot-description {
    margin: 0 0 12px;
    font-size: 14px;
    color: #606266;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
    flex: 1;
  }
  
  .spot-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .rating {
    display: flex;
    align-items: center;
  }
  
  :deep(.el-rate) {
    display: inline-block;
  }
  
  :deep(.el-rate__icon) {
    margin-right: 2px;
    font-size: 14px;
  }
  </style>