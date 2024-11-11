<template>
    <el-scrollbar style="height: 300px;"> <!-- 设置高度限制，以触发滚动 -->
      <ul v-infinite-scroll="load" class="infinite-list">
        <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
      </ul>
    </el-scrollbar>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  const count = ref(0)
  const load = () => {
    count.value += 2
  }
  </script>
  
  <style>
  .infinite-list {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%; /* 使列表宽度填满 el-scrollbar */
  }
  .infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
  }
  .infinite-list .infinite-list-item + .list-item {
    margin-top: 10px;
  }
  </style>
  