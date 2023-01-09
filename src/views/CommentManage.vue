<template>
  <el-table :data="state.tableData" style="width: 100%" height="800" :highlight-current-row="true">
    <el-table-column fixed prop="id" label="ID" />
    <el-table-column prop="title" label="文章标题" />
    <el-table-column prop="author" label="用户" />
    <el-table-column prop="content" label="评论内容" />
    <el-table-column prop="createTime" label="评论时间"/>
    <el-table-column>
      <template #header>
        <span>操作&nbsp;</span>
      </template>
      <template #default="{ row }">
        <DeleteSure @delete="deleteRequest(row)"></DeleteSure>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import {reactive,onBeforeMount} from "vue";
import DeleteSure from '../components/DeleteSure.vue'
import utils from "@/utils";
const state = reactive({
  tableData:[
    {id:1, title:'java的内存机制', author:'小明', content:'不错，非常好', createTime:'2022-9-23'},
    {id:2, title:'java的内存机制', author:'小明', content:'不错，非常好', createTime:'2022-9-23'},
    {id:3, title:'java的内存机制', author:'小明', content:'不错，非常好', createTime:'2022-9-23'},
    {id:4, title:'java的内存机制', author:'小明', content:'不错，非常好', createTime:'2022-9-23'},
    {id:5, title:'java的内存机制', author:'小明', content:'不错，非常好', createTime:'2022-9-23'},
    {id:6, title:'java的内存机制', author:'小明', content:'不错，非常好', createTime:'2022-9-23'},
    {id:7, title:'java的内存机制', author:'小明', content:'不错，非常好', createTime:'2022-9-23'},
  ]
})

function getListRequest() {
  utils.api.getCommentList({}).then(res=>{
    state.tableData = res.data
  })
}
function deleteRequest(row) {
  utils.api.deleteComment(row.id,{}).then(res=>{
    utils.alert('删除成功')
  })
}
onBeforeMount(()=>{
  getListRequest()
})
</script>

<style scoped lang="less">
</style>
