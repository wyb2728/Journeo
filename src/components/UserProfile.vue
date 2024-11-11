<!-- src/components/UserProfile.vue -->
<template>
    <el-popover placement="bottom" width="200" trigger="hover">
      <p>用户名：{{ user.name }}</p>
      <p>邮箱：{{ user.email }}</p>
      <div style="text-align: right; margin-top: 10px;">
        <el-button type="primary" size="small">个人中心</el-button>
      </div>
      <el-avatar slot="reference" :src="user.avatar" class="user-avatar" />
    </el-popover>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const user = ref({
        name: '游客',
        email: 'example@example.com',
        avatar: 'https://example.com/avatar.jpg',
      });
  
      return { user };
    },
  };
  </script>
  
  <style scoped>
  .user-avatar {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  </style>
  