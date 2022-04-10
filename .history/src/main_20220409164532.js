// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';
// 引入路由
import VueRouter from 'vue-router';

// 关闭生产环境提示
Vue.config.productionTip = false;
// 应用插件
Vue.use(VueRouter);

// 创建Vue
new Vue({
    el: '#app',
    render: h => h(App),
});
