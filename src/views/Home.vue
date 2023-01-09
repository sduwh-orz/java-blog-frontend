<template>
  <el-row>
    <el-col>
      <el-menu
          mode="horizontal"
          default-active="/articleList"
          router
          :ellipsis="false"
      >
        <el-menu-item index="/articleList">
          <el-icon>
            <House/>
          </el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/userManage">
          <el-icon>
            <user/>
          </el-icon>
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="/articleManage">
          <el-icon>
            <document/>
          </el-icon>
          <span>文章管理</span>
        </el-menu-item>
        <el-menu-item index="/commentManage">
          <el-icon>
            <ChatDotSquare/>
          </el-icon>
          <span>评论管理</span>
        </el-menu-item>
        <el-menu-item index="/tagManage">
          <el-icon>
            <PriceTag/>
          </el-icon>
          <span>标签管理</span>
        </el-menu-item>
        <div class="flex-grow"/>
        <el-menu-item index="">
          <el-icon>
            <UserFilled/>
          </el-icon>
          <span>用户名</span>
        </el-menu-item>
        <el-menu-item index="" @click="logout">
          <el-icon>
            <CaretLeft/>
          </el-icon>
          <span>退出</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <router-view/>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()

function logout() {
  localStorage.clear()
  router.push({name: 'login'})
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>


