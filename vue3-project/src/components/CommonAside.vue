<script setup lang="ts">
import { useRouter } from 'vue-router';

const list = [
  {
    path: '/home',
    name: 'home',
    label: '首页',
    icon: 'user',
    url: '/home'
  },
  {
    label: '其它',
    name: 'other',
    icon: 'location',
    path: '/other',
    url: 'other'
  }
]
const router = useRouter()
const handleClick = (item: { name: any }) => {
  router.push({
    name: item.name
  })
}
</script>

<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    :collapse-transition="false"
    active-text-color="#ffd04b"
  >
    <h3>后台管理</h3>
    <el-menu-item :index="item.path + ''" v-for="item in list" :key="item.label" @click="handleClick(item)">
      <component class="icons" :is="item.icon"></component>
      <span>{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="less" scoped>
.icons {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}
.el-menu-vertical-demo {
  width: 100%;
  border-right: none;
  h3 {
    color: #fff;
    text-align: center;
    margin-top: 10px;
  }
}
</style>
