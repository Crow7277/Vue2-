// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';

// 关闭生产环境提示
Vue.config.productionTip = false;

// const Demo = Vue.extend({});
// const d = new Demo();
// Vue.prototype.x = d;

// 创建Vue
const vm = new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        // 安装全局事件总线+
        Vue.prototype.x = this;
    },
});
