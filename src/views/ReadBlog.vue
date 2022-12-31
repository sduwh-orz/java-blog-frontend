<script setup lang="ts">
    const blogicon = 100   //blog标志
    const authorName = 10   //作者
    const title = 1     //Blog标题
    const comnmentAuthor = 11//评论者
    const tag = 123

    //评论点赞
    const giveLike = () => {
        console.log(1)
    }
    //发送评论
    const onAddComment = () => {

    }
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
                                        <span>{{authorName}}</span> <!-- 放Blog作者名字-->
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
                                        <span>{{title}}</span>
                                        <div>
                                            <el-tag class="ml-2" type="success">Tag 1</el-tag><!-- 文章的标签1 2 3-->
                                            <el-divider direction="vertical" />
                                            <el-tag class="ml-2" type="success">Tag 2</el-tag><!-- 文章的标签1 2 3-->
                                            <el-divider direction="vertical" />
                                            <el-tag class="ml-2" type="success">Tag 3</el-tag><!-- 文章的标签1 2 3-->
                                        </div>
                                    </div>

                                    <el-divider />
                                    <span>There little thoughts are the rustle of leaves; they have their whisper
                                        of joy in my mind.</span><!-- 显示出的文本-->
                                </div>
                                <el-container class="comment">
                                    <el-space direction="vertical">
                                        <!--评论数据-->
                                        <el-card class="commentText" v-for="o in 4" :key="o">
                                            <template #header>
                                                <div class="commentTextheader">
                                                    <span>{{comnmentAuthor}}</span>
                                                    <el-button color="#626aef" :dark="isDark" class="likebtn"
                                                        @click="giveLike">
                                                        点赞</el-button>
                                                </div>
                                            </template>
                                            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
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