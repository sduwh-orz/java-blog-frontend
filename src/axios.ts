import axios from 'axios'
import config from "@/config";
import utils from "@/utils";
axios.defaults.baseURL = config.server
axios.defaults.withCredentials = false
// 对所有请求进行处理
axios.interceptors.request.use(request => {
    request.headers['Authorization'] = window.localStorage.getItem('token')
    request.headers['X-Requested-With'] = 'XMLHttpRequest'
    const csrfRegex = new RegExp('csrftoken' + '=([^;.]*).*$')
    request.headers['X-CSRFToken'] = document.cookie.match(csrfRegex) === null ? null : document.cookie.match(csrfRegex)[1]
    return request
})

//  对所有响应进行处理
axios.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response.status !== 200) {
        utils.alert(error.response.data.error, "error")
    }
    if (error.response.status === 401) {
        localStorage.clear()
        location.replace("/login")
    }
    return Promise.reject(error.response);
})
export const $axios = axios
