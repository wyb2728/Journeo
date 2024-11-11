<template>
  <div class="common-layout">
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside :width="sidebarWidth" class="sidebar">
        <el-container :class="['sidebar-container', { 'sidebar-closed': !isSidebarOpen }]">
          <!-- 侧边栏头部 -->
          <el-header class="sidebar-header">
            <img src="@/assets/logo.png" alt="Logo" class="logo" />
            <span class="title">旅游规划</span>
            <el-button class="toggle-button" @click="toggleSidebar">
              {{ isSidebarOpen ? '关闭' : '打开' }}
            </el-button>
          </el-header>
          
          <!-- 侧边栏主体 -->
          <el-main v-show="isSidebarOpen" class="sidebar-main">
            <!-- 功能区 -->
            <el-row class="selection-row" gutter="20">
              <el-col :span="8">
                <el-select v-model="selectedRegion" placeholder="选择区域" class="select-region">
                  <el-option label="北京" value="beijing"></el-option>
                  <el-option label="上海" value="shanghai"></el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                <el-select v-model="sortOrder" placeholder="排序" class="select-sort">
                  <el-option label="评分" value="rating"></el-option>
                  <el-option label="热门" value="popularity"></el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                <el-button type="primary" class="gpt-button">GPT推荐</el-button>
              </el-col>
            </el-row>

            <!-- 搜索框 -->
            <el-input placeholder="搜索景点" v-model="searchQuery" class="search-box" />

            <!-- 景点列表 -->
            <el-scrollbar class="spot-list-container">
              <div class="spot-list" v-infinite-scroll="loadMore" infinite-scroll-distance="10">
                <spot-item
                  v-for="spot in spots"
                  :key="spot.id"
                  :spot="spot"
                  @click="handleSpotClick(spot)"
                />
              </div>
            </el-scrollbar>
          </el-main>
        </el-container>
      </el-aside>
      
      <!-- 主要内容区（地图） -->
      <el-main class="map-container">
        <map-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SpotItem from '../components/SpotItem.vue'
import MapView from '../components/MapView.vue'

// 状态管理
const isSidebarOpen = ref(true)
const sidebarWidth = ref('300px')
const selectedRegion = ref('')
const sortOrder = ref('')
const searchQuery = ref('')
const spots = ref([])
const page = ref(1)
const loading = ref(false)

// 侧边栏控制
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
  sidebarWidth.value = isSidebarOpen.value ? '300px' : '60px'
}

// 加载更多数据
const loadMore = async () => {
  if (loading.value) return
  loading.value = true
  
  try {
    const newSpots = await fetchSpots(page.value)
    spots.value.push(...newSpots)
    page.value++
  } finally {
    loading.value = false
  }
}

// 模拟数据获取
const fetchSpots = async (page) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Array(10).fill().map((_, index) => ({
        id: page * 10 + index,
        name: `景点 ${page * 10 + index}`,
        description: '这是一个示例景点描述',
        image: 'https://via.placeholder.com/80'
      })))
    }, 500)
  })
}

const handleSpotClick = (spot) => {
  console.log('点击景点:', spot)
}
</script>

<style scoped>
.common-layout {
  height: 100vh;
}

.sidebar-container {
  height: 100%;
  background-color: #f5f5f5;
  transition: width 0.3s ease;
}

.sidebar-header {
  padding: 10px;
  border-bottom: 1px solid #dcdfe6;
  display: flex;
  align-items: center;
}

.sidebar-main {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
}

.spot-list-container {
  flex: 1;
  margin-top: 20px;
}

.spot-list {
  padding: 10px;
}

.selection-row {
  margin-bottom: 20px;
}

.search-box {
  margin-bottom: 20px;
}

.map-container {
  padding: 0;
  height: 100%;
}
</style>