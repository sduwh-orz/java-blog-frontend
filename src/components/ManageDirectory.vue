<template>
    <div class="dir">
            <el-button color="#626aef" :dark="isDark" class="post-btn" @click="goEdit">发布</el-button>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>博客</span>
                    </template>
                    <el-menu-item index="1-1" @click="goarticle">文章列表</el-menu-item>
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

    const total = 100
    const CurrentChange = (val) => {
        console.log(val)
    }
    import { useRouter } from 'vue-router'
    const router = useRouter()
    const goEdit = () => {
        router.push('/manage/article/edit')
    }
    const goarticle =()=>{
        router.push('/manage/article')
    }


    const handleCommand = (command) => {
        ElMessage(`click on item ${command}`)
    }
    const getBolgData = () => {

    }
    import {
        Document,
        Menu as IconMenu,
        Location,
        Setting,
    } from '@element-plus/icons-vue'

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