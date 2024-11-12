<!-- src/components/sidebar/SidebarHeader.vue -->
<template>
    <el-header class="sidebar-header">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <span class="title">旅游规划</span>
      <el-button class="toggle-button" @click="$emit('toggle')">
        {{ isSidebarOpen ? '关闭' : '打开' }}
      </el-button>
    </el-header>
  </template>
  
  <script setup>
  defineProps({
    isSidebarOpen: {
      type: Boolean,
      required: true
    }
  })
  
  defineEmits(['toggle'])
  </script>
  
  <style scoped>
  .sidebar-header {
    padding: 10px;
    border-bottom: 1px solid #dcdfe6;
    display: flex;
    align-items: center;
  }
  
  .logo {
    height: 30px;
    margin-right: 10px;
  }
  
  .title {
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    color:black
  }
  </style>