<script setup lang="ts">
    import request from '@/utils/request';
    import { onBeforeMount, reactive } from 'vue'
    import { useRoute } from 'vue-router'
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
    const isDark = false;
    const route = useRoute()
    const blogicon = 100   //blog标志

    //评论点赞
    const giveLike = () => {
        console.log(1)
    }
    //发送评论
    const onAddComment = () => {

    }
    onBeforeMount(() => {
        console.log(route.params.articleId);
        request.get("/article/get/" + route.params.articleId).then(res => {
            if (res.data.status == true) {
                article.title = res.data.data.title;
                article.authorName = res.data.data.authorName;
                article.modified = res.data.data.modified;
                article.view = res.data.data.view;
                article.summary = res.data.data.summary;
                article.content = res.data.data.content;
                article.tagNames = res.data.data.tagNames;
                article.recommendArticleId = res.data.data.recommendArticleId;
            };
        });
        request.get("/comment/get/?articleId=" + route.params.articleId).then(res => {
            if (res.data.status == true) {
                article.comments = res.data.data;
            };
        });
    })
</script>

<template>
    <div class="Layout">
        <el-scrollbar>
        <el-container>
           
                <el-header>{{blogicon}}</el-header> <!-- Script改Blog名字-->
                <el-container>
                    <el-aside >
                        
                            <el-card class="authorcard">
                                <template #header>
                                    <div class="blogauthor">
                                        <el-icon>
                                            <user /> <!-- 放Blog作者的icon-->
                                        </el-icon>
                                        <span>{{article.authorName}}</span> <!-- 放Blog作者名字-->
                                    </div>
                                </template>
                                <div v-for="o in 4" :key="o" class="text item">
                                    <!--左栏作者的信息 -->
                                    {{ '作者信息' + o }}
                                </div>
                            </el-card>
                        
                    </el-aside>


                    <el-container>
                        <el-scrollbar>
                            <el-main>

                                <div>
                                    <div class="main-header">
                                        <span>{{article.title}}</span>
                                        <div>
                                            <el-tag class="ml-2" type="success" v-for="o in article.tagNames" :key="o">{{o}}</el-tag>
                                        </div>
                                    </div>

                                    <el-divider />
                                    <span>{{ article.content }}</span> <!--这里要改成markdown渲染-->
                                </div>
                                <el-container class="comment">
                                    <el-space direction="vertical">
                                        <!--评论数据-->
                                        <el-card class="commentText" v-for="o in article.comments" :key="o">
                                            <template #header>
                                                <div class="commentTextheader">
                                                    <span>{{o.authorName}}</span>
                                                    <el-button color="#626aef" :dark="isDark" class="likebtn"
                                                        @click="giveLike">
                                                        点赞</el-button>
                                                </div>
                                            </template>
                                            <div class="text item">{{ o.content }}</div>
                                            <!-- 评论的内容-->
                                        </el-card>
                                        <div>
                                            <el-button class="pushcomment-btn" @click="onAddComment">评论</el-button>
                                        </div>
                                    </el-space>
                                </el-container>
                            </el-main>
                        </el-scrollbar>
                    </el-container>

                </el-container>
        
        </el-container>
    </el-scrollbar>
    </div>
</template>

<style>
    .Layout {
        height: 100vh
        
    }

    .el-container {
        height: 100%;
    }

    .el-header {
        background: whitesmoke;
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    .el-aside {
        width: 20%;
        margin: 10px;
    }
    .authorcard {
        width: 100%;
    }

    .blogauthor {
        justify-content: space-between;
        align-items: center;
        display: flex;
    }

    .el-menu {
        height: 100%;
    }

    .el-main {
        background:white;
        width: 1400px
    }

    .main-header {
        justify-content: space-between;
        align-items: center;
        display: flex;
    }

    .comment {
        margin-top: 30px;
        width: 100%;
    }

    .el-space {
        width: 100%;
    }

    .commentText {
        width: 1300px;
        

    }

    .commentTextheader {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .likebtn {

    }

    .pushcomment-btn {
        align-items: center;
        width: 100px;
        margin-top: 20px;
    }
</style>