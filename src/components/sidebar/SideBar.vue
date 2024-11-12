<!-- src/components/sidebar/Sidebar.vue -->
<template>
  <el-aside :width="sidebarWidth" class="sidebar">
    <el-container :class="['sidebar-container', { 'sidebar-closed': !isSidebarOpen }]">
      <SidebarHeader 
        :is-sidebar-open="isSidebarOpen"
        @toggle="toggleSidebar"
      />
      <el-main v-show="isSidebarOpen" class="sidebar-main">
        <FilterSection />
        <SpotList />
      </el-main>
    </el-container>
  </el-aside>
</template>

<script setup>
import { ref } from 'vue'
import SidebarHeader from './SideBarHeader.vue'
import FilterSection from './FilterSection.vue'
import SpotList from '../spots/SpotList.vue'

const isSidebarOpen = ref(true)
const sidebarWidth = ref('400px')

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
  sidebarWidth.value = isSidebarOpen.value ? '300px' : '60px'
}
</script>

<style scoped>
.sidebar {
  height: 100vh;
  overflow: hidden;
}

.sidebar-container {
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.sidebar-main {
  padding: 20px;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>