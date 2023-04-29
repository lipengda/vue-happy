<script setup lang="ts">
import type { RouterView } from 'vue-router';
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="180px">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <common-header></common-header>
        </el-header>
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.common-layout {
  height: 100%;
  & > .el-container {
    height: 100%;
    & > .el-aside {
      height: 100%;
      background: #545c64;
    }
    & > .el-container {
      & > .el-header {
        padding: 0%;
      }
    }
  }
}
</style>
