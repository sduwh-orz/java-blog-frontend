<template>
  <el-row>
    <el-col style="text-align: center">
      <label>标题</label>
      <el-input v-model="state.title" placeholder="文章标题" clearable style="width: 50%"/>
      <label>标签</label>
      <el-select
          v-model="state.tag"
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
      <v-md-editor v-model="state.content" height="780px"></v-md-editor>
    </el-col>
    <el-col style="text-align: center;margin: 10px 0">
      <el-button type="danger" @click="$router.go(-1)">取 消</el-button>
      <el-button type="success" @click="putArticleRequest">修 改</el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {onBeforeMount, reactive} from "vue";
import {useRoute} from "vue-router";
import utils from "@/utils";

const state = reactive({
  title: '',
  tag: '',
  content: '',
  tagList: [
    {id: 1, name: 'python', createTime: '2022-8-20'},
    {id: 2, name: 'java', createTime: '2022-8-20'},
    {id: 3, name: 'js', createTime: '2022-8-20'},
    {id: 4, name: 'css', createTime: '2022-8-20'},
    {id: 5, name: '学习', createTime: '2022-8-20'},
    {id: 6, name: 'MQ', createTime: '2022-8-20'},
  ]
})

const route = useRoute()

function getArticleRequest() {
  utils.api.getArticle(route.params.articleId,{}).then(res=>{
    state.title= res.data.title
    state.tag= res.data.tag
    state.content= res.data.content
  })
}

function getTagRequest() {
  utils.api.getTagList({}).then(res=>{
    state.tagList= res.data
  })
}

function putArticleRequest() {
  utils.api.putArticle(route.params.articleId,{
    title:state.title,
    tag:state.tag,
    content:state.content
  }).then(res=>{
    utils.alert('修改成功')
  })
}

onBeforeMount(() => {
  getArticleRequest()
  getTagRequest()
})
</script>

<style scoped>
label{
font-weight: 700;
}
</style>
