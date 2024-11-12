<template>
  <div class="avatar-card-container">
    <!-- 头像部分 -->
    <el-avatar
      :size="50"
      :src="avatarSrc"
      @mouseenter="startHoverTimer"
      @mouseleave="startLeaveTimer"
    />

    <!-- 悬浮卡片 -->
    <div class="popover-card" 
         v-show="showPopover"
         @mouseenter="cancelLeaveTimer"
         @mouseleave="startLeaveTimer">
      <!-- 卡片内容 -->
      <div class="card-content">
        <!-- 用户信息 -->
        <div class="user-info">
          <h3>{{ nickname }}</h3>
          <el-button type="primary" size="small" @click="goToUserCenter">
            个人中心
          </el-button>
        </div>

        <!-- 历史规划列表 -->
        <div class="history-list">
          <h4>历史规划</h4>
          <div class="scroll-container">
            <div v-for="(item, index) in historyList" 
                 :key="index" 
                 class="history-item">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import avatarImg from '@/assets/avator.png'

const showPopover = ref(false)
let hoverTimer = null
let leaveTimer = null

const startHoverTimer = () => {
  if (leaveTimer) {
    clearTimeout(leaveTimer)
    leaveTimer = null
  }
  if (!showPopover.value) {
    hoverTimer = setTimeout(() => {
      showPopover.value = true
      // 在卡片显示后调整位置
      nextTick(() => {
        adjustPopoverPosition()
      })
    }, 1000)
  }
}
const startLeaveTimer = () => {
  if (hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
  }
  leaveTimer = setTimeout(() => {
    showPopover.value = false
  }, 500)
}

const cancelLeaveTimer = () => {
  if (leaveTimer) {
    clearTimeout(leaveTimer)
    leaveTimer = null
  }
}
const adjustPopoverPosition = () => {
  const popover = document.querySelector('.popover-card')
  if (!popover) return
  
  // 获取视窗宽度和卡片位置信息
  const viewportWidth = window.innerWidth
  const cardRect = popover.getBoundingClientRect()
  const rightSpace = viewportWidth - cardRect.right
  
  // 如果卡片超出右侧或太靠近右边界
  if (rightSpace < 20) { // 20px的安全距离
    const adjustment = Math.abs(rightSpace - 20)
    popover.style.left = 'auto'
    popover.style.right = '20px'
    popover.style.transform = 'none'
  }
}

const avatarSrc = avatarImg
const nickname = '示例用户'
const historyList = ref([
  { title: '历史规划 1' },
  { title: '历史规划 2' },
  { title: '历史规划 3' },
  { title: '历史规划 4' },
  { title: '历史规划 5' }
])

const goToUserCenter = () => {
  // 实现跳转逻辑
}
</script>

<style scoped>
.avatar-card-container {
  position: relative;
  display: inline-block;
}

.popover-card {
  position: absolute;
  top: 60px;
  left: calc(50% - 120px);
  transform: translateX(-50%);
  width: 300px;
  background: white;
  border-radius: 12px;  /* 增加圆角 */
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;
  color: #333;  /* 设置默认文字颜色 */
}

.card-content {
  margin-top: 10px;
}

.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.user-info h3 {
  margin: 0;
  font-size: 18px;
  color: #333;  /* 确保标题文字颜色 */
}

.history-list h4 {
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #333;  /* 确保标题文字颜色 */
}

.scroll-container {
  max-height: 200px;
  overflow-y: auto;
}

.history-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  color: #333;  /* 确保列表项文字颜色 */
}

.history-item:hover {
  background-color: #f5f7fa;
}

.scroll-container::-webkit-scrollbar {
  width: 6px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 3px;
}

.scroll-container::-webkit-scrollbar-track {
  background: #f5f5f5;
}
</style>