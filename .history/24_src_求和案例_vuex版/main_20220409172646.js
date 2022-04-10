// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';

// 引入store
import store from './store/index';

// 关闭生产环境提示
Vue.config.productionTip = false;

// 创建Vue
new Vue({
    el: '#app',
    render: h => h(App),
    stre: store, //配置store
    beforeCreate() {
        // 安装全局事件总线
        Vue.prototype.$bus = this;
    },
});
