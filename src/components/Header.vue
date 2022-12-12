<script setup lang="ts">
import request from '@/utils/request';
import { onBeforeMount, reactive } from 'vue'

const info = reactive({
  username: '',
  nickname: '',
  email: '',
  permGroup: ''
});

onBeforeMount(() => {
  request.get("/user/info").then(res => {
    if (res.data.status == true) {
      info.username = res.data.data.username;
      info.nickname = res.data.data.nickname;
      info.email = res.data.data.email;
      info.permGroup = res.data.data.permGroup;
    };
    console.log(info);
  });
})
</script>
<template>
  <el-header>
    <el-page-header>
      <template #content>
        <span class="text-large font-600 mr-3"> 登录 </span>
      </template>
      <template #extra>
        <div class="flex items-center" v-show="info.username != ''">
          <el-avatar
            :size="32"
            class="mr-3"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="text-large font-600 mr-3"> {{info.nickname}} </span>
          <el-button type="primary" class="ml-2">登出</el-button>
        </div>
        <div class="flex items-center" v-show="info.username == ''">
          <el-button type="primary" class="ml-2" href="/login">登录</el-button>
          <el-button>注册</el-button>
        </div>
      </template>
    </el-page-header>
    <el-divider content-position="left">
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: './page-header.html' }">
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="./page-header.html">用户</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>登录</el-breadcrumb-item>
    </el-breadcrumb>
    </el-divider>
  </el-header>
</template>
<style>
.el-header {
  margin-bottom: 20px;
}
.el-page-header__header .el-page-header__back {
  display: none;
}
.el-page-header__header .el-divider--vertical {
  display: none;
}
</style>