<script setup>
import { onMounted, onUnmounted, ref, toRefs } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import { defineProps } from 'vue';

let map = null;

onMounted(() => {
  window._AMapSecurityConfig = {
    securityJsCode: "60e37c35a3c82bdf46e766cdae8c40f9",
  };
  AMapLoader.load({
    key: "66d50e7c4e1242e421eee929edf5d145", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  })
    .then((AMap) => {
      map = new AMap.Map("container", {
        // 设置地图容器id
        viewMode: "3D", // 是否为3D地图模式
        zoom: 11, // 初始化地图级别
        center: [121.553958, 29.869472]
      });
    })
    .catch((e) => {
      console.log(e);
    });
});

onUnmounted(() => {
  map?.destroy();
});
</script>

<template>
  <div id="container"></div>
</template>

<style scoped>
#container {
  width: 1600px;
  height: 800px;
}
</style>