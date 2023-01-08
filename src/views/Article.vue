<script setup lang="ts">
    import request from '@/utils/request'
    import { onBeforeMount, reactive, computed, ref } from 'vue'
    import { useRoute } from 'vue-router'
    import { marked } from 'marked'
    import { ElMessage } from 'element-plus'
    import isLoggedIn from '../Global.vue'
    
    function updateLoggedIn() {
        console.log('test')
        isLoggedIn.value = true
    }
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
    const author = reactive({
        username: '', 
        nickname: '', 
        email: '', 
        type: ''
    })
    const commentNickname = ref('')
    const commentEmail = ref('')
    const comment = ref('')
    const route = useRoute()

    //发送评论
    const onAddComment = () => {

        var formData = new FormData()
        formData.append('articleId', route.params.articleId.toString())
        formData.append('content', comment.value)
        formData.append('nickname', commentNickname.value)
        formData.append('email', commentEmail.value)
        request({
            method: "post",
            url: "/comment/create",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        }).then(res => {
            if (res.data.status == true) {
                comment.value = ""
                ElMessage({
                    message: '评论发送成功',
                    type: 'success',
                })
            } else {
                ElMessage({
                    message: '评论发送失败，原因：' + res.data.message,
                    type: 'success',
                })
            }
            console.log(res)
        })
    }
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
                request.get("/user/info/?username=" + article.authorName).then(res => {
                    if (res.data.status == true) {
                        author.username = res.data.data.username
                        author.nickname = res.data.data.nickname
                        author.email = res.data.data.email
                        author.type = res.data.data.type
                    } 
                })
            }
        })
        request.get("/comment/get/?articleId=" + route.params.articleId).then(res => {
            if (res.data.status == true) {
                article.comments = res.data.data
            }
        })
    })
    const markdownToHtml = computed<string>(() => {
        return marked(article.content)
    }) 
    const likeComment = (id) => {
        request.get("/comment/like/?commentId=" + id).then(res => {
            if (res.data.status == true) {
                article.comments.find((obj)=>{return obj.id == id}).likeNum ++;
                ElMessage({
                    message: '点赞成功',
                    type: 'success',
                })
            }
        })
    }
</script>

<template>
<div @userLoggedIn="updateLoggedIn" />
<div class="Layout">
    <el-container>
        <el-aside >
            <el-card class="authorcard">
                <template #header>
                <div class="blogauthor">
                    <el-icon>
                        <User /> <!-- 放Blog作者的icon-->
                    </el-icon>&nbsp;
                    <span> {{author.nickname}} </span> <!-- 放Blog作者名字-->
                </div>
                </template>
                <div class="text item">
                    邮箱：{{author.email}} 
                </div>
                
            </el-card>
        </el-aside>
        <el-container>
            <el-main>
                <el-scrollbar>
                    <div>
                        <div class="main-header">
                            <span>{{article.title}}</span>
                            <div>
                                <el-tag class="ml-2" type="success" v-for="o in article.tagNames" :key="o">{{o}}</el-tag>
                            </div>
                        </div>

                        <el-divider />
                        <div v-html="markdownToHtml"></div>
                    </div>
                    <el-divider>评论区</el-divider>
                    <el-container class="comment">
                        <el-space direction="vertical">
                            <!--评论数据-->
                            <el-card class="commentText" v-for="o in article.comments" :key="o">
                                <template #header>
                                    <div class="commentTextheader">
                                        <div><el-icon><User /></el-icon>&nbsp;<span>{{o.authorName}}</span>&nbsp;&nbsp;<time class="time">{{ o.created }}</time></div>
                                        <div><el-icon><ArrowUpBold @click="likeComment(o.id)"/></el-icon>&nbsp;<span>{{ o.likeNum }}</span></div>
                                    </div>
                                </template>
                                <!-- 评论的内容-->
                                <div class="text item">{{ o.content }}</div>
                            </el-card>
                            <el-form class="commentText" label-position="left" style="margin-top: 50px">
                                <div v-show="!isLoggedIn">
                                    <el-form-item><el-input v-model="commentNickname" class="w-50 m-2" placeholder="昵称">
                                        <template #prefix>
                                        <el-icon class="el-input__icon"><User /></el-icon>
                                        </template>
                                    </el-input></el-form-item>
                                    <el-form-item><el-input v-model="commentEmail" class="w-50 m-2" placeholder="邮箱地址">
                                        <template #prefix>
                                        <el-icon class="el-input__icon"><Message /></el-icon>
                                        </template>
                                    </el-input></el-form-item>
                                </div>
                                <el-form-item><el-input
                                    v-model="comment"
                                    maxlength="120"
                                    placeholder="在这里输入评论……"
                                    show-word-limit
                                    type="textarea"
                                /></el-form-item>
                                <el-form-item><el-button class="pushcomment-btn" @click="onAddComment">评论</el-button></el-form-item>
                            </el-form>
                        </el-space>
                    </el-container>
                </el-scrollbar>
            </el-main>
        </el-container> 
    </el-container>    
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

    .el-menu {
        height: 100%;
    }

    .el-main {
        background:white;
    }

    .main-header {
        align-items: center;
        display: flex;
    }

    .comment {
        margin-top: 30px;
    }

    .el-space {
        width: 100%;
    }

    .commentText {
        width: 500px;

    }

    .commentTextheader {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    strong {
        font-weight: bold!important;
    }

    .pushcomment-btn {
        align-items: center;
        width: 100px;
        margin-top: 20px;
    }
    .time {
        font-size: 12px;
        color: #999;
    }
</style>