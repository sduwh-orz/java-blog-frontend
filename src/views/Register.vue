<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import request from "@/utils/request";
import { ElMessage } from 'element-plus'
var form = reactive({
  username: '',
  password: '',
  checkPass: '',
  nickname: '',
  email: ''
});
const emailReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
const onSubmit = () => {
    if (form.username == '' || form.password == '' || form.checkPass == '' || form.nickname == '' || form.email == '') {
        ElMessage({
            message: '请填写所有必要信息',
            type: 'error',
        })
    } else if (form.password != form.checkPass) {
        ElMessage({
            message: '密码不匹配',
            type: 'error',
        })
    } else if (!emailReg.test(form.email)) {
        ElMessage({
            message: '邮箱格式有误',
            type: 'error',
        })
    } else {
        var formData = new FormData();
        formData.append('username', form.username);
        formData.append('password', form.password);
        formData.append('nickname', form.nickname);
        formData.append('email', form.email);
        request({
            method: "post",
            url: "/user/register",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        }).then(res => {
            if (res.data.status) {
                ElMessage({
                    message: '注册成功',
                    type: 'success',
                })
                window.location.href = '/login'
            } else {
                ElMessage({
                    message: '注册失败：' + res.data.message,
                    type: 'error',
                })
            }
        });
    }
};
</script>
<template>
  <el-main>
    <el-row>
      <el-col :span="8" :offset="8">
        <el-card class="box-card" width="250px;">
          <template #header>
              <div class="card-header">
              <span>用户注册</span>
              </div>
          </template>
          <el-form :model="form" label-position="left">
            <el-form-item prop="username">
                <el-input v-model="form.username" prefix-icon="User" autocomplete="off" placeholder="用户名" />
            </el-form-item>
            <el-form-item prop="nickname">
                <el-input v-model="form.nickname" prefix-icon="User" autocomplete="off" placeholder="昵称" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="form.password" prefix-icon="Lock" type="password" autocomplete="off" placeholder="请输入密码" />
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="password" placeholder="请再次输入密码" v-model="form.checkPass" prefix-icon="Lock"></el-input>
            </el-form-item>
            <el-form-item prop="email">
                <el-input class="email-input" placeholder="邮箱" v-model="form.email" prefix-icon="Message"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">注册</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>