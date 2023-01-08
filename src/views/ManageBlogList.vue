<template>
    <div class="container">
        <el-container>
            <el-header>
                <div class="logo">EasyBlog</div>

                <div class="user-info">
                    <span>欢迎回来，</span>
                    <el-dropdown @command="handleCommand" trigger="click">
                        <span class="nickname">
                            管理1号<el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="a">个人信息</el-dropdown-item>
                                <el-dropdown-item command="b">退出</el-dropdown-item>

                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </el-header>
            <el-container>
                <el-aside width="250px">
                    <ManageDir/>
                </el-aside>
                <el-container>
                    <el-main>
                        <div class="sub-title">博客列表</div>
                            <el-table :data="tableData"  height="500" class="table">
                              <el-table-column fixed prop="title" label="标题" width="150" />
                              <el-table-column prop="author" label="作者" width="120" />
                              <el-table-column prop="status" label="状态" width="120" />
                              <el-table-column prop="created" label="创建时间" width="320" />
                              <el-table-column prop="modify" label="更新时间" width="320" />
                              <el-table-column fixed="right" label="文章操作" width="170">
                                <template #default="scope">
                                    <el-button type="primary" size="small" @click="EditClick"
                                    >编辑</el-button
                                  >
                                  <el-button type='danger' size="small" >删除</el-button>
                                </template>
                              </el-table-column>
                            </el-table>
                
                    </el-main>
                    <el-footer>
                        <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="total"
                            @current-change="CurrentChange" />
                        <!-- 翻页currentchange-->
                       
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>


<script lang="ts" setup>
    const tableData = [
  {
    created: '2016-05-03',
    modify:'2016-05-03',
    author: 'Tom',
    status: '草稿',
    title: 'Los Angeles',
  },
  {
    created: '2016-05-03',
    modify:'2016-05-03',
    author: 'Tom',
    status: '草稿',
    title: 'Los Angeles',
  },
  {
    created: '2016-05-03',
    modify:'2016-05-03',
    author: 'Tom',
    status: '草稿',
    title: 'Los Angeles',
  },  {
    created: '2016-05-03',
    modify:'2016-05-03',
    author: 'Tom',
    status: '草稿',
    title: 'Los Angeles',
  },  {
    created: '2016-05-03',
    modify:'2016-05-03',
    author: 'Tom',
    status: '草稿',
    title: 'Los Angeles',
  },  {
    created: '2016-05-03',
    modify:'2016-05-03',
    author: 'Tom',
    status: '草稿',
    title: 'Los Angeles',
  },
]
    const total = 100
    const CurrentChange = (val) => {
        console.log(val)
    }
    import ManageDir from '../components/ManageDirectory.vue'
    import { ElMessage } from 'element-plus'
    import { ArrowDown } from '@element-plus/icons-vue'
    import {useRouter} from 'vue-router'
    const router = useRouter()
    const goEdit = ()=>{
        router.push('/manage/article/edit')
    }
    const EditClick = ()=>{
        router.push('/manage/article/edit')
    }
    const handleCommand = (command) => {
        ElMessage(`click on item ${command}`)
    }
    const getBolgData = ()=> {
        
    }
    import {
        Document,
        Menu as IconMenu,
        Location,
        Setting,
    } from '@element-plus/icons-vue'

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