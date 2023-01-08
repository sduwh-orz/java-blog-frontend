<template> <!-- 此页为后台目录等组件需要替换成访客端-->
    <div class="container">
        <el-container>
            <el-aside width="250px">
                <ManageDir/>
            </el-aside>
            <el-container>
                <el-main>
                    <el-descriptions :title="tagInfo.name">
                        <el-descriptions-item label="简介">{{ tagInfo.description }}</el-descriptions-item>
                    </el-descriptions>
                    <el-divider />
                    <h2>文章列表</h2>
                    <el-table :data="tableData"  height="500" class="table">
                        <el-table-column prop="id" label="ID" width="150" />
                        <el-table-column label="标题" width="150">
                            <template v-slot:default="table">
                                <router-link :to="{ name: 'article', params: {articleId: table.row.id} }">{{ table.row.title }}</router-link>
                            </template>
                        </el-table-column>
                        <el-table-column prop="authorName" label="作者" width="120" />
                        <el-table-column prop="modified" label="更新时间" width="320" />
                        </el-table>
                </el-main>
                <el-footer>
                    <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="total"
                        @current-change="CurrentChange" />
                    <!-- 翻页currentchange-->
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>


<script lang="ts" setup>
    import ManageDir from '../components/ManageDirectory.vue'
    import { ElMessage } from 'element-plus'
    import {useRouter, useRoute} from 'vue-router'
    import { onBeforeMount, reactive} from 'vue'
    import request from '@/utils/request'
    var tableData = reactive([])
    const router = useRouter()
    const route = useRoute()
    const total = () => {
        return tableData.length;
    }
    const tagInfo = reactive({
        'id': '',
        'name': '',
        'description': ''
    })
    onBeforeMount(() => {
        request.get("/tag/get/?name="+route.params.tagName).then(res => {
            if (res.data.status == true) {
                tagInfo.id = res.data.data.id;
                tagInfo.name = res.data.data.name;
                tagInfo.description = res.data.data.description;
            }
        })
        request.get("/tag/list/"+route.params.tagName).then(res => {
            if (res.data.status == true) {
                res.data.data.forEach(element => {
                    tableData.push(element)
                });
            }
        })
    })
    const CurrentChange = (val) => {
        console.log(val)
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

    .logo {
        font-size: 30px;
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