<template>
    <div class="container"> <!-- Editor与PersonBlogManager有多个部件重合-->
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
                        <v-md-editor v-model="text" height="780px"
                        ></v-md-editor><!-- 此处为编辑器-->
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>


<script lang="ts" setup>
  
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