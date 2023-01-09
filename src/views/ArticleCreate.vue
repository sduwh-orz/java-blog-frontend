<template>
  <div class="container"> <!-- Editor与PersonBlogManager有多个部件重合-->
      <el-container>
          <el-aside width="250px">
              <ManageDir/>
          </el-aside>
          <el-container>
              <el-main>
  <el-row>
    <el-col style="text-align: center">
      <label>标题</label>
      <el-input v-model="state.newData.title" placeholder="文章标题" clearable style="width: 50%"/>
      <label>标签</label>
      <el-select
          v-model="state.newData.tag"
          placeholder="选择文章标签"
      >
        <el-option
            v-for="tag in state.tagList"
            :key="tag.id"
            :label="tag.name"
            :value="tag.name"
        />
      </el-select>
    </el-col>
    <el-col>
      <v-md-editor v-model="state.newData.content" height="780px"></v-md-editor>
    </el-col>
    <el-col style="text-align: center;margin: 10px 0">
      <el-button type="danger" @click="$router.go(-1)">取 消</el-button>
      <el-button type="success" @click="postArticleRequest">发 布</el-button>
    </el-col>
  </el-row>
  </el-main>
  </el-container>
  </el-container>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeMount, reactive} from "vue";
import request from '@/utils/request'
import ManageDir from '../components/ManageDirectory.vue'
import { ElMessage } from "element-plus";

const state = reactive({
  newData: {
    title: '',
    tag: '',
    content: '',
  },
  tagList: [
  ]
})

function getTagListRequest() {
	request.get("/tag/").then(res=>{
    res.data.data.forEach((e)=>{
      state.tagList.push(e)
    })
    console.log(state)
  })
}

function postArticleRequest() {
  
  var formData = new FormData()
        formData.append('title', state.newData.title)
        formData.append('summary', state.newData.content)
        formData.append('content', state.newData.content)
        formData.append('tagNames[]', state.newData.tag)
        request({
            method: "post",
            url: "/article/create",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        }).then(res => {
            if (res.data.status == true) {
                ElMessage({
                    message: '文章创建成功',
                    type: 'success',
                })
                window.location.href = '/manage/article'
            } else {
                ElMessage({
                    message: '文章创建失败，原因：' + res.data.message,
                    type: 'success',
                })
            }
            console.log(res)
        })
}

onBeforeMount(() => {
  getTagListRequest()
})
</script>

<style scoped>
label {
  font-weight: 700;
}
</style>
