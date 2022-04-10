// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';
// 引入vuex
import Vuex from 'vuex';
// 引入store
import store from './store/'
// 关闭生产环境提示
Vue.config.productionTip = false;
// 使用vuex
Vue.use(Vuex);

// 创建Vue
new Vue({
    el: '#app',
    render: h => h(App),
    store: 'hello',
    beforeCreate() {
        // 安装全局事件总线
        Vue.prototype.$bus = this;
    },
});
