<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import request from "@/utils/request";
import { ElMessage } from 'element-plus'
var form = reactive({
  username: '',
  password: ''
});
const onSubmit = () => {
  var formData = new FormData();
  formData.append('username', form.username);
  formData.append('password', form.password);
  request({
    method: "post",
    url: "/user/login",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" }
  }).then(res => {
    if (res.data.status) {
      ElMessage({
        message: '登录成功',
        type: 'success',
      })
      window.location.href = '/'
    }
  });
};
</script>
<template>
  <el-main>
    <el-row>
      <el-col :span="8" :offset="8">
        <el-card class="box-card" width="250px;">
          <template #header>
              <div class="card-header">
              <span>用户登录</span>
              </div>
          </template>
          <el-form :model="form" label-position="left">
            <el-form-item prop="username">
              <el-input v-model="form.username" prefix-icon="User" />
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="form.password" prefix-icon="Lock" type="password" autocomplete="on" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">登录</el-button>
              <router-link to='/register'><el-button>注册</el-button></router-link>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>