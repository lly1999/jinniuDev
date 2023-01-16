import axios from 'axios'
import { ElMessage } from 'element-plus'
import { params } from '@/store/store'
const service = axios.create({
    baseURL: '/api',
    timeout: 15000
})
// 拦截器，请求头中统一塞上header
service.interceptors.request.use(
    config => {
        config.headers.Authorization = "Bearer" + params.token
        return config;
    }
)
service.interceptors.response.use(
    response => {
        if (response.status == 200) {
            //使用response.data获取原始返回数据
            return response.data.data
        } else {
            ElMessage.error({
                showClose: true,
                message: '访问后台服务器出现问题'
            })
            Promise.reject()
        }
    },
    error => {
        ElMessage.error({
            showClose: true,
            message: '访问后台服务器出现问题'
        })
        return Promise.reject(error);
    }
)

export default service;
