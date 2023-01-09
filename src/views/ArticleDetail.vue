<template>
  <el-row>
    <el-col class="header">
      <h1 class="title">{{state.title}}</h1>
      <div class="other">
        <el-tag class="other-info">{{state.author}}</el-tag>
        <el-tag class="other-info">{{state.tag}}</el-tag>
        <el-tag class="other-info">{{state.createTime}}</el-tag>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col class="content">
      <v-md-preview :text="state.content"></v-md-preview>
    </el-col>
  </el-row>
  <el-divider>
    <el-tag type="success">评论区</el-tag>
  </el-divider>
  <el-row class="comment-container">
    <el-col class="write-comment" :span="12" :offset="6">
      <el-input
          v-model="state.newComment"
          :rows="3"
          type="textarea"
          placeholder="请输入你的评论"
      />
      <el-button @click="postComment" type="success">发 表</el-button>
    </el-col>
    <el-col class="comment-item" v-for="i in state.commentList" :span="12" :offset="6">
      <div>
        <div class="comment-username">{{i.username}}</div>
        <p class="comment-content">{{i.content}}</p>
        <div class="comment-createTime"><el-tag style="margin: 3px">{{i.createTime}}</el-tag></div>
      </div>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import {onBeforeMount, reactive} from "vue";
import utils from "@/utils";
import {useRoute} from "vue-router";

const state = reactive({
  title:'文章标题',
  author:'小明',
  tag:'java',
  createTime:'2022-12-23',
  content:'# 一级标题\n' +
      '\n' +
      '## 二级标题\n' +
      '\n' +
      '* 第一\n' +
      '* 第二',
  commentList:[
    {username:'夏明',createTime:'2022-9-8',content:'非常好！'},
    {username:'夏明',createTime:'2022-9-8',content:'非常好！'},
    {username:'夏明',createTime:'2022-9-8',content:'非常好！'},
  ],
  newComment:''
})
const route = useRoute()

function getArticleRequest() {
  utils.api.getArticle(route.params.articleId,{}).then(res=>{
    state.title= res.data.title
    state.author= res.data.author
    state.tag= res.data.tag
    state.createTime= res.data.createTime
    state.content= res.data.content
  })
}

function postComment() {
  utils.api.postComment({article_id:route.params.articleId,content:state.newComment}).then(res=>{
    utils.alert('发表成功')
  })
}
function getCommentRequest() {
  utils.api.getCommentList({article_id:route.params.articleId}).then(res=>{
    state.commentList= res.data
  })
}

onBeforeMount(()=>{
  getArticleRequest()
  getCommentRequest()
})
</script>


<style scoped>
.comment-item{
  border-bottom: 1px dashed black;
  margin-top:5px;
}
.comment-username{
  font-weight: 700;
  font-size: 25px;
  margin: 5px;
}
.comment-content{
  white-space: normal;
  font-size: 16px;
  text-indent: 4em;
}
.comment-createTime{
  text-align: right;
}
.title{
  text-align: center;
}
.other{
  text-align: center;
}
.other-info{
  margin-right: 10px;
}
</style>
