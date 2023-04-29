<script setup lang="ts">
import { useRouter } from 'vue-router';
let getImgSrc = () => {
    return "https://img0.baidu.com/it/u=779040798,3900256075&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
}
const router = useRouter()
const handleClick = () => {
  router.push('/login')
}
</script>

<template>
    <el-header>
        <div class="l-content">
            <!-- 这个button本来应该是有用途的，但是与本笔记主体内容无关，所以去除了，只保留样式 -->
            <el-button size="small" plain>
                <el-icon :size="20">
                    <Menu />
                </el-icon>
            </el-button>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" :src="getImgSrc()" alt="头像" />
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleClick()">我的</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<style lang="less" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #333;
}
.l-content {
    display: flex;
    align-items: center;
    .el-button {
        margin-right: 16px;
        margin-left: 10px;
    }
    h3 {
        color: #fff;
    }
}
.r-content {
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }
}
</style>