<script setup lang="ts">
import request from '@/utils/request'
import { onBeforeMount, reactive } from 'vue'
import isLoggedIn from '../Global.vue'

const user = reactive({
  username: '',
  nickname: '',
  email: '',
  permGroup: ''
});

onBeforeMount(() => {
	request.get("/user/info").then(res => {
		if (res.data.status == true) {
			user.username = res.data.data.username;
			user.nickname = res.data.data.nickname;
			user.email = res.data.data.email;
			user.permGroup = res.data.data.permGroup;
			isLoggedIn.value = true;
		};
		console.log(user);
	});
})
</script>
<template>
    <el-page-header>
		<template #content>
			<div class="flex items-center">
				<el-icon><Memo /></el-icon>
				<router-link to="/"><span class="text-large font-600 mr-3" style="bottom: 2px; position: relative"> 博客 </span></router-link>
			</div>
		</template>
		<template #extra>
			<div class="flex items-center" v-show="user.username != ''">
			<el-avatar
				:size="32"
				class="mr-3"
				src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
				style="top: 12px; position: relative; margin-right: 5px"
			/>
			<span class="text-large font-600 mr-3" style="top: 2px; position: relative"> {{user.nickname}} </span>&nbsp;
			<router-link to="/manage/article"><el-button type="primary" class="ml-2">管理</el-button></router-link>&nbsp;
			<router-link to="/logout"><el-button type="primary" class="ml-2">登出</el-button></router-link>
			</div>
			<div class="flex items-center" v-show="user.username == ''">
			<router-link to='/login'><el-button type="primary" class="ml-2">登录</el-button></router-link>
			<router-link to="/register"><el-button>注册</el-button></router-link>
			</div>
		</template>
    </el-page-header>
</template>
<style>
.el-page-header {
  margin-left: 20px;
  margin-right: 20px;
}
.el-page-header__header .el-page-header__back {
  display: none;
}
.el-page-header__header .el-divider--vertical {
  display: none;
}
</style>