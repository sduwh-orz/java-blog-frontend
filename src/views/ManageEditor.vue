<template>
    <div class="container"> <!-- Editor与PersonBlogManager有多个部件重合-->
        <el-container>
            <el-aside width="250px">
                <ManageDir/>
            </el-aside>
            <el-container>
                <el-main>
                    <v-md-editor v-model="article.content" height="780px"
                    ></v-md-editor><!-- 此处为编辑器-->
                    <el-button type="primary" @click="submit">保存</el-button>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script lang="ts" setup>
    import ManageDir from '../components/ManageDirectory.vue'
    import request from '@/utils/request'
    import { onBeforeMount, reactive } from 'vue'
    import { useRoute } from 'vue-router'
    import { ElMessage } from 'element-plus'
    const route = useRoute()
    const article = reactive({
        title: '',
        authorName: '',
        modified: '',
        view: '',
        summary: '',
        content: '',
        tagNames: [],
        recommendArticleId: [],
        comments: []
    })
    onBeforeMount(() => {
        request.get("/article/get/" + route.params.articleId).then(res => {
            if (res.data.status == true) {
                article.title = res.data.data.title
                article.authorName = res.data.data.authorName
                article.modified = res.data.data.modified
                article.view = res.data.data.view
                article.summary = res.data.data.summary
                article.content = res.data.data.content
                article.tagNames = res.data.data.tagNames
                article.recommendArticleId = res.data.data.recommendArticleId
            }
        })
    })
    const submit = () => {
        var formData = new FormData();
        formData.append('articleId', route.params.articleId.toString());
        formData.append('content', article.content);
        request({
            method: "post",
            url: "/article/modify",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        }).then(res => {
            if (res.data.status) {
                ElMessage({
                    message: '保存成功',
                    type: 'success',
                })
                window.location.href = '/manage/article/'
            } else {
                ElMessage({
                    message: '保存失败：' + res.data.message,
                    type: 'error',
                })
            }
        });
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