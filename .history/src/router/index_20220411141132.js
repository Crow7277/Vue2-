// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
//引入组件
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { isAuth: true, title: '关于' },
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '详情' },

                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                    a: 1,
                                    b: 'hello',
                                };
                            },
                        },
                    ],
                },
            ],
        },
    ],
});
// 全局前置路由守卫
// 在每一次路由切换之前调用其回调函数
router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from);
    if (to.meta.isAuth) {
        // 判断是否需要鉴定
        if (localStorage.getItem('school') === 'atguigu') {
            next();
        } else {
            alert('用户信息错误，无权限查看');
        }
    } else {
        next();
    }
});

// 后置路由守卫
router.afterEach((to, from) => {
    console.log('前置路由守卫', to, from);
    document.title = to.meta.title || '系统';
});

export default router;
