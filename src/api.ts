import {$axios} from './axios'

export default {
    login: function (params) {
        return $axios.post('/login', params)
    },
    register: function (params) {
        return $axios.post('/register', params)
    },

    getUserList:function (params) {
        return $axios.get('/userList', {params})
    },
    getUser:function (id,params) {
        return $axios.get(`/user/${id}`, {params})
    },
    deleteUser:function (id,params) {
        return $axios.delete(`/user/${id}`, params)
    },
    putUser: function (id, params) {
        return $axios.put(`/user/${id}`, params)
    },
    postUser: function (params) {
        return $axios.post(`/user`, params)
    },

    getCommentList:function (params) {
        return $axios.get('/commentList', {params})
    },
    getComment:function (id,params) {
        return $axios.get(`/comment/${id}`, {params})
    },
    deleteComment:function (id,params) {
        return $axios.delete(`/comment/${id}`, params)
    },
    putComment: function (id, params) {
        return $axios.put(`/comment/${id}`, params)
    },
    postComment: function (params) {
        return $axios.post(`/comment`, params)
    },

    getArticleList:function (params) {
        return $axios.get('/articleList', {params})
    },
    getArticle:function (id,params) {
        return $axios.get(`/article/${id}`, {params})
    },
    deleteArticle:function (id,params) {
        return $axios.delete(`/article/${id}`, params)
    },
    putArticle: function (id, params) {
        return $axios.put(`/article/${id}`, params)
    },
    postArticle: function (params) {
        return $axios.post(`/article`, params)
    },

    getTagList:function (params) {
        return $axios.get('/tagList', {params})
    },
    getTag:function (id,params) {
        return $axios.get(`/tag/${id}`, {params})
    },
    deleteTag:function (id,params) {
        return $axios.delete(`/tag/${id}`, params)
    },
    putTag: function (id, params) {
        return $axios.put(`/tag/${id}`, params)
    },
    postTag: function (params) {
        return $axios.post(`/tag`, params)
    }
}
