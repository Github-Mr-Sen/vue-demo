// 对axios的配置


import axios from "axios";
import router from "@/router";
import {MessageBox, Message} from 'element-ui'
import da from "element-ui/src/locale/lang/da";


const service = axios.create({
    baseURL: "http://localhost:9999",
    timeout: 5 * 1000

})

// 请求拦截
service.interceptors.request.use(config => {

    // 添加Authorization请求头作为token
    config.headers['Authorization'] = localStorage.getItem('token')
    return config
})


// 相应拦截
service.interceptors.response.use(response => {

        let data = response.data

        if (data.code == 200) {
            return data
        } else {
            Message.error(data.msg ? data.msg : '系统异常')

            return Promise.reject(data.msg)

        }
    },
    error => {
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)

    })