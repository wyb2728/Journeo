<!-- src/views/Home.vue -->
<template>
  <div class="home-page">
    <UserProfile class="floating-profile" />
    <el-container class="common-layout">
      <SideBar />
      <el-main class="map-container">
        <map-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import UserProfile from '../components/UserProfile.vue'
import SideBar from '../components/sidebar/SideBar.vue'
import MapView from '../components/MapView.vue'
</script>

<style scoped>
.home-page {
  height: 100vh;
}

.floating-profile {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.common-layout {
  height: 100vh;
}

.map-container {
  padding: 0;
  height: 100%;
}
</style>