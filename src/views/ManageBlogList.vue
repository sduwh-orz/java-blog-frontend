<template>
    <div class="container">
        <el-container>
            <el-aside width="250px">
                <ManageDir/>
            </el-aside>
            <el-container>
                <el-main>
                    <div class="sub-title">博客列表</div>
                        <el-table :data="tableData"  height="500" class="table">
                            <el-table-column fixed prop="id" label="ID" width="150" />
                            <el-table-column prop="title" label="标题" width="150" />
                            <el-table-column prop="authorName" label="作者" width="120" />
                            <el-table-column prop="modified" label="更新时间" width="320" />
                            <el-table-column fixed="right" label="文章操作" width="170">
                            <template #default="scope">
                                <el-button type="primary" size="small" @click="EditClick($event)"
                                >编辑</el-button
                                >
                                <el-button type='danger' size="small" @click="DeleteClick" >删除</el-button>
                            </template>
                            </el-table-column>
                        </el-table>
            
                </el-main>
                <!-- <el-footer>
                    <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="total"
                        @current-change="CurrentChange" /> -->
                    <!-- 翻页currentchange-->
                    
                <!-- </el-footer> -->
            </el-container>
        </el-container>
    </div>
</template>


<script lang="ts" setup>
    import ManageDir from '../components/ManageDirectory.vue'
    import { ElMessage } from 'element-plus'
    import {useRouter} from 'vue-router'
    import { onBeforeMount, reactive} from 'vue'
    import request from '@/utils/request'
    var tableData = reactive([])
    onBeforeMount(() => {
        request.get("/article/list").then(res => {
            if (res.data.status == true) {
                res.data.data.forEach(element => {
                    tableData.push(element)
                });
            }
        })
    })
    const router = useRouter()
    const EditClick = (event)=>{
        var target = event.target
        if (target.tagName == 'SPAN')
            target = target.parentElement
        const id = target.parentElement.parentElement.parentElement.querySelector(':first-child div').textContent
        router.push('/manage/article/edit/' + id)
    }
    const DeleteClick = (event)=>{
        var target = event.target
        if (target.tagName == 'SPAN')
            target = target.parentElement
        const id = target.parentElement.parentElement.parentElement.querySelector(':first-child div').textContent
        var formData = new FormData();
        formData.append('articleId', id);
        request({
            method: "post",
            url: "/article/delete",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        }).then(res => {
            if (res.data.status == true) {
                ElMessage({
                    message: '删除成功',
                    type: 'success'
                })
                router.go(0)
            } else {
                ElMessage({
                    message: '删除失败' + res.data.message,
                    type: 'error'
                })
            }
        })
    }

</script>

<style>
    .container {
        height: 100vh;
    }

    .el-header {
        background: whitesmoke;
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    .nickname {
        cursor: pointer;
    }


    .el-aside {
        padding: 10px;

    }

    .container .post-btn {
        height: 50px;
        width: 100%;

    }

    .container .el-container {
        height: 100%;
    }
    .table {
        width: 1200px;
    }

    .container .el-footer {
        margin: auto;
        width: max-content;

    }

    .container .el-menu {
        height: 70%;
    }

    .container .el-pagination {
        width: 100%;
    }
</style>