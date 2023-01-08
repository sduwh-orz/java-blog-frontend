<template>
    <div class="dir">
        <router-link to="/manage/article/edit"><el-button color="#626aef" :dark="isDark" class="post-btn">发布</el-button></router-link>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>博客</span>
                    </template>
                    <router-link to="/manage/article"><el-menu-item index="1-1">文章列表</el-menu-item></router-link>
                    <el-menu-item index="1-2">分类管理</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>标签</span>
                    </template>
                    <el-menu-item index="2-1">标签管理</el-menu-item>

                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>
                        <el-icon>
                            <User />
                        </el-icon>
                        <span>用户</span>
                    </template>
                    <el-menu-item index="3-1">用户管理</el-menu-item>
                    <el-menu-item index="3-2">用户编辑</el-menu-item>
                </el-sub-menu>
            </el-menu>
    </div>
</template>


<script lang="ts" setup>
    import { useRouter } from 'vue-router'
    import {
        Document,
        Menu as IconMenu,
        Location,
        Setting,
    } from '@element-plus/icons-vue'
    import { ElMessage } from 'element-plus'

    const router = useRouter()

    const isDark = false
</script>

<style>
    .dir {
        height:100%
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