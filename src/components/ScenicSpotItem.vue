<template>
    <el-card class="scenic-spot-item">
      <div class="item-container">
        <!-- 左侧图片 -->
        <img :src="imageUrl" alt="景点图片" class="scenic-image" />
  
        <!-- 右侧信息 -->
        <div class="info">
          <!-- 景点名称 -->
          <div class="title">{{ name }}</div>
          
          <!-- 地区和预计游玩时间 -->
          <div class="details">
            <span class="region">{{ region }}</span>
            <span class="playtime">预计游玩时间：{{ playtime }}</span>
          </div>
  
          <!-- 星级评分 -->
          <div class="rating">
            <el-rate v-model="rating" disabled :max="5" show-score />
          </div>
        </div>
      </div>
    </el-card>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'ScenicSpotItem',
    props: {
      name: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
      region: {
        type: String,
        required: true,
      },
      playtime: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        default: 0,
      },
    },
    setup(props) {
      return {
        rating: ref(props.rating),
      };
    },
  });
  </script>
  
  <style scoped>
  .scenic-spot-item {
    display: flex;
    padding: 10px;
  }
  
  .item-container {
    display: flex;
  }
  
  .scenic-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .info {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }
  
  .title {
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .details {
    display: flex;
    justify-content: space-between;
    color: #666;
    margin-top: 4px;
  }
  
  .region,
  .playtime {
    font-size: 0.9em;
  }
  
  .rating {
    margin-top: 8px;
  }
  </style>
  