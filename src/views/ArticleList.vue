<template>
  <el-row>
    <el-col
        v-for="i in state.articleList"
        :key="i.id"
        :span="16"
        :offset="4"
        @click="$router.push({name:'article',params:{articleId:i.id}})"
        class="article-item"
    >
      <div class="content">
        <div class="demo title">{{ i.title }}</div>
        <div class="demo author"><el-tag>{{ i.authorName }}</el-tag></div>
        <div class="demo tag"><el-tag type="success" v-for="t in i.tagNames">{{ t }}</el-tag></div>
        <div class="demo create_time">{{ i.modified }}</div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import {onBeforeMount, reactive} from "vue";
import request from '@/utils/request'
import { useRoute } from 'vue-router'

const state = reactive({
  articleList: [
  ]
})
const route = useRoute()

function getListRequest() {
  request.get("/article/search").then(res => {
      if (res.data.status == true) {
        res.data.data.forEach((e)=> {
          state.articleList.push(e)
        })
      }
  })
}
onBeforeMount(()=>{
  getListRequest()
})
</script>

<style scoped>
.article-item{
  cursor: pointer;
  margin-top: 6px;
  border-bottom: 1px dashed black;
}

.demo{
  text-align: center;
  display: inline-block;
}

.title{
  width: 70%;
  font-weight: 700;
  font-size: 25px;
}
.title:hover{
  color: #285395;
}

.author{
  width: 10%;
}

.tag{
  width: 10%;
}

.create_time{
  width: 10%;
}
</style>
