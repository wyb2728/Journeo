<template>
  <div class="filter-section">
    <!-- 筛选行 -->
    <el-row class="selection-row" :gutter="10">
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

    <!-- 搜索行 -->
    <el-row class="search-row" :gutter="10">
      <el-col :span="18">
        <el-input
          v-model="searchText"
          placeholder="搜索景点..."
          clearable
          @keyup.enter="handleSearch"
        />
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="handleSearch" :icon="Search">
          搜索
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const selectedRegion = ref('')
const sortOrder = ref('')
const searchText = ref('')

const handleSearch = () => {
  console.log('搜索:', searchText.value)
}
</script>

<style scoped>
.filter-section {
  margin-bottom: 20px;
}

.selection-row,
.search-row {
  margin-bottom: 10px;
}

.select-region,
.select-sort,
.gpt-button {
  width: 100%;
}

.search-row .el-button {
  width: 100%;
}
</style>