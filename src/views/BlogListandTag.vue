<template> <!-- 此页为后台目录等组件需要替换成访客端-->
    <div class="container">
        <el-container>
            <el-main>
                <div class="sub-title">标签列表</div>
                <el-table :data="tableData"  height="500" class="table">
                    <el-table-column fixed prop="title" label="标题" width="150" />
                    <el-table-column prop="author" label="作者" width="120" />
                    <el-table-column prop="status" label="状态" width="120" />
                    <el-table-column prop="created" label="创建时间" width="320" />
                    <el-table-column prop="modify" label="更新时间" width="320" />
                    <el-table-column prop="tag" label="标签" width="170">
                        <el-tag
                        key=""
                        type="item.type"
                        class="mx-1"
                        effect="dark"
                        round
                        >java</el-tag>
                    </el-table-column>
                    </el-table>
            </el-main>
            <el-footer>
                <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="total"
                    @current-change="CurrentChange" />
                <!-- 翻页currentchange-->
            </el-footer>
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
    import ManageDir from '../components/ManageDirectory.vue'
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