<template>
  <div class="container"> <!-- Editor与PersonBlogManager有多个部件重合-->
      <el-container>
          <el-aside width="250px">
              <ManageDir/>
          </el-aside>
          <el-container>
              <el-main>
  <el-dialog
      v-model="state.showUpdateDialog"
      title="修改用户"
      :close-on-click-modal="false"
      width="50%"
      append-to-body
      @close="closeDialog"
  >
    <div>
      <el-form :model="state.updateData">
        <el-form-item label="ID">
          <el-input v-model="state.updateData.id" placeholder="ID" disabled></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="state.updateData.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="state.updateData.nickname" placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item label="组别">
          <el-select v-model="state.updateData.type">
            <el-option label="普通用户" value="user" />
            <el-option label="作者" value="author" />
            <el-option label="管理员" value="admin" />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
        <span class="dialog-footer">
          <el-button type="danger" @click="closeDialog">取 消</el-button>
          <el-button type="primary" @click="putRequest">确 认</el-button>
        </span>
    </template>
  </el-dialog>
  <el-table :data="state.tableData" style="width: 100%" height="800" :highlight-current-row="true">
    <el-table-column fixed prop="id" label="ID"/>
    <el-table-column prop="username" label="用户名"/>
    <el-table-column prop="nickname" label="昵称"/>
    <el-table-column prop="type" label="组别">
      <template #default="{ row }">
        <el-tag v-if="row.type!='deleted'" type="success">{{ row.type }}</el-tag>
        <el-tag v-else type="danger">已删除</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="is_admin" label="是否是管理员">
      <template #default="{ row }">
        <el-tag v-if="row.type!='admin'" type="danger">否</el-tag>
        <el-tag v-else type="success">是</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="createTime" label="创建时间"/>
    <el-table-column>
      <template #header>
        <span>操作&nbsp;</span>
      </template>
      <template v-slot:default="table">
        <DeleteSure @delete="deleteRequest(table.row)"></DeleteSure>
        <el-button
            size="small"
            type="primary"
            @click="getRequest(table.row)"
        >编辑
        </el-button
        >
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
import { ElMessage } from "element-plus"
import { useRouter } from "vue-router";
import ManageDir from '../components/ManageDirectory.vue'

const router = useRouter()

const state = reactive({
  showUpdateDialog: false,
  updateData: {
    id: '',
    username:'',
    nickname: '',
    type: '',
  },
  tableData: [
  ]
})

function closeDialog() {
  state.updateData = {
    id: '',
    username: '',
    nickname: '',
    type: '',
  }
  state.showUpdateDialog = false
}

function getListRequest() {
	request.get("/user/list").then(res => {
    res.data.data.forEach((u)=>{state.tableData.push(u)})
  })
  console.log(state)
}

function getRequest(row) {
  state.showUpdateDialog = true
  state.updateData.id = row.id
  state.updateData.username = row.username
  state.updateData.nickname = row.nickname
  state.updateData.type = row.type
}

function deleteRequest(row) {
	request.get("/user/delete?user"+row.username).then(res => {
    ElMessage({'message': '删除成功', 'type': 'success'})
  })
}

function putRequest() {
  var formData = new FormData();
  formData.append('username', state.updateData.username);
  formData.append('type', state.updateData.type);
  formData.append('nickname', state.updateData.nickname);
  request({
    method: "post",
    url: "/user/modify",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" }
  }).then((res)=>{
    if (res.data.status) {
      ElMessage({'message': '编辑成功', 'type': 'success'})
      router.go(0)
    } else {
      ElMessage({'message': '编辑失败，原因：'+res.data.message, 'type': 'error'})
    }
  })
}

onBeforeMount(() => {
  getListRequest()
})
</script>

<style scoped lang="less">
</style>
