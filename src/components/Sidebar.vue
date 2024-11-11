<template>
  <el-container :class="['sidebar-container', { 'sidebar-closed': !isSidebarOpen }]">
    <el-header class="sidebar-header">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <span class="title">旅游规划</span>
      <el-button class="toggle-button" @click="toggleSidebar">
        {{ isSidebarOpen ? '关闭' : '打开' }}侧边栏
      </el-button>
    </el-header>
    
    <el-main v-show="isSidebarOpen" class="sidebar-main">
      <!-- 区域选择、排序方式、GPT推荐 -->
      <el-row class="selection-row" gutter="20">
        <el-col :span="8">
          <el-select v-model="selectedRegion" placeholder="选择区域" @change="fetchScenicSpots" class="select-region">
            <!-- 添加省市区选项 -->
            <el-option label="北京" value="beijing"></el-option>
            <el-option label="上海" value="shanghai"></el-option>
            <el-option label="广州" value="guangzhou"></el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <el-select v-model="sortOrder" placeholder="选择排序" class="select-sort">
            <el-option label="评分" value="rating"></el-option>
            <el-option label="热门" value="popularity"></el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <el-button type="primary" @click="showGptRecommendation" class="gpt-button">GPT 推荐</el-button>
        </el-col>
      </el-row>

      <!-- 搜索框 -->
      <el-input placeholder="搜索景点" v-model="searchQuery" @input="searchSpots" class="search-box" />

      <!-- 景点列表展示 -->
      <ScenicSpotList :scenicSpots="displayedSpots" @load-more="loadMoreSpots" />
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';
import ScenicSpotList from './ScenicSpotList.vue';

const isSidebarOpen = ref(true);
const selectedRegion = ref('');
const sortOrder = ref('');
const searchQuery = ref('');
const displayedSpots = ref([]); // 初始展示的20条数据

function toggleSidebar() { 
  isSidebarOpen.value = !isSidebarOpen.value; 
}
function showGptRecommendation() { /* 展示GPT推荐窗口 */ }
function fetchScenicSpots() { /* 根据selectedRegion获取景点 */ }
function searchSpots() { /* 根据searchQuery搜索景点 */ }
function loadMoreSpots() { /* 加载更多景点 */ }
</script>

<style scoped>
.sidebar-container {
  padding: 20px;
  background-color: #f5f5f5;
  transition: width 0.3s ease;
}

.sidebar-closed {
  width: 0;
  overflow: hidden;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.logo {
  width: 30px;
  margin-right: 10px;
}

.title {
  font-size: 1.2em;
  font-weight: bold;
}

.toggle-button {
  margin-left: auto;
}

.sidebar-main {
  padding: 20px 0;
}

.selection-row {
  margin-bottom: 20px;
}

.select-region,
.select-sort,
.gpt-button {
  width: 100%;
}

.search-box {
  margin-bottom: 20px;
}
</style>
