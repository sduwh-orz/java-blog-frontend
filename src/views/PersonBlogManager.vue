<template>
    <div class="container">
        <el-container>
            <el-header>
                <div class="logo">EasyBlog</div>

                <div class="user-info">
                    <span>欢迎回来，</span>
                    <el-dropdown @command="handleCommand" trigger="click">
                        <span class="nickname">
                            用户1号<el-icon class="el-icon--right">
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
                    <el-button color="#626aef" :dark="isDark" class="post-btn">发布</el-button>
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <location />
                                </el-icon>
                                <span>博客</span>
                            </template>
                            <el-menu-item index="1-1">博客列表</el-menu-item>
                            <el-menu-item index="1-2">分类管理</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon>
                                    <Document />
                                </el-icon>
                                <span>专题</span>
                            </template>
                            <el-menu-item index="2-1">专题管理</el-menu-item>
                        
                        </el-sub-menu>
                        <el-sub-menu index="3">
                            <template #title>
                                <el-icon>
                                    <Setting />
                                </el-icon>
                                <span>设置</span>
                            </template>
                            <el-menu-item index="3-1">个人信息设置</el-menu-item>
                            <el-menu-item index="3-2">系统设置</el-menu-item> 
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main>
                        <div class="sub-title">博客列表</div>
                            <el-table :data="tableData" style="width: 100%" height="500" class="table">
                              <el-table-column fixed prop="title" label="标题" width="150" />
                              <el-table-column prop="author" label="作者" width="120" />
                              <el-table-column prop="status" label="状态" width="120" />
                              <el-table-column prop="created" label="创建时间" width="320" />
                              <el-table-column prop="modify" label="更新时间" width="320" />
                            </el-table>
                
                    </el-main>
                    <el-footer>
                        <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="total"
                            @current-change="CurrentChange" />
                        <!-- 翻页currentchange-->
                        Footer
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
    import { ElMessage } from 'element-plus'
    import { ArrowDown } from '@element-plus/icons-vue'

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