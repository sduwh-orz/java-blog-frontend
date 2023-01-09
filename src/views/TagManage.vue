<template>
  <div class="container"> <!-- Editor与PersonBlogManager有多个部件重合-->
      <el-container>
          <el-aside width="250px">
              <ManageDir/>
          </el-aside>
          <el-container>
              <el-main>
  <el-dialog
      v-model="state.showCreateDialog"
      title="添加标签"
      :close-on-click-modal="false"
      width="50%"
      append-to-body
      @close="closeDialog"
  >
    <div>
      <el-form :model="state.newData">
        <el-form-item label="标签名">
          <el-input v-model="state.newData.name" placeholder="标签名"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
        <span class="dialog-footer">
          <el-button type="danger" @click="closeDialog">取 消</el-button>
          <el-button type="primary" @click="createRequest">确 认</el-button>
        </span>
    </template>
  </el-dialog>
  <el-table :data="state.tableData" style="width: 100%" height="800" :highlight-current-row="true">
    <el-table-column fixed prop="id" label="ID"/>
    <el-table-column prop="name" label="标签名">
      <template #default="{ row }">
        <router-link :to="{name: 'tag', params: {tagName: row.name}}"><el-tag>{{ row.name }}</el-tag></router-link>
      </template>
    </el-table-column>
    <el-table-column prop="created" label="创建时间"/>
    <el-table-column>
      <template #header>
        <span>操作&nbsp;</span>
        <el-tooltip effect="dark" content="创建" placement="top">
          <el-icon class="table-create-btn" @click="state.showCreateDialog = true">
            <Plus/>
          </el-icon>
        </el-tooltip>
      </template>
      <template #default="{ row }">
        <DeleteSure @delete="deleteRequest(row)"></DeleteSure>
      </template>
    </el-table-column>
  </el-table>
  </el-main>
  </el-container>
  </el-container>
  </div>
</template>

<script setup lang="ts">
import {reactive, onBeforeMount} from "vue";
import DeleteSure from '../components/DeleteSure.vue'
import request from '@/utils/request'
import { stubFalse } from "lodash";
import ManageDir from '../components/ManageDirectory.vue'

const state = reactive({
  showCreateDialog: false,
  newData: {
    name: '',
    description: ''
  },
  tableData: [
  ],
})

function closeDialog() {
  state.newData.name = ''
  state.showCreateDialog = false
}

function getListRequest() {
	request.get("/tag/").then(res=>{
    res.data.data.forEach((e)=>{
      state.tableData.push(e)
    })
    console.log(state)
  })
}

function deleteRequest(name) {
	request.get("/tag/delete?name="+name).then(res=>{
    alert('删除成功')
  })
}
function createRequest(){
  var formData = new FormData();
  formData.append('name', state.newData.name);
  formData.append('description', state.newData.description);
  request({
    method: "post",
    url: "/tag/create",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" }
  }).then(res=>{
    alert('添加成功')
  })
}

onBeforeMount(() => {
  getListRequest()
})
</script>

<style scoped lang="less">
</style>
