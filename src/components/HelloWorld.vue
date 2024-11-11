<template>
  <div class="container">
    Hello World!
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo({ left: document.body.scrollWidth, behavior: 'smooth' });
});
</script>

<style scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: pink;
  font-size: 2em;
  color: white;
}
</style>
