// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router';

// 创建一个路由器
const router = new VueRouter({
    routes:[
        {
            path:'./about',
            component:'about'
        },
    ]
})