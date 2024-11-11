<template>
  <el-container>
    <el-aside :width="isSidebarOpen ? '300px' : '0'" class="sidebar">
      <Sidebar :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
    </el-aside>

    <!-- 主内容区 -->
    <el-container class="main-content">
      <el-main>
        <MapView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from './components/Sidebar.vue';
import MapView from './components/MapView.vue';

const isSidebarOpen = ref(true);
const showUserInfo = ref(false);
const userAvatar = 'https://example.com/avatar.png'; // 替换为用户头像链接

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<style scoped>
.sidebar {
  transition: width 0.3s ease;
  background-color: #f5f5f5;
  overflow: hidden;
}

.main-content {
  width: 100%;
}

.header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.user-avatar {
  cursor: pointer;
}
</style>
