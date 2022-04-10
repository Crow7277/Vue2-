export default {
    install(Vue) {
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4);
        });
        // 定义全局自定义指令
        Vue.directives('fbind', {
            // 指令与元素成功绑定时
            bind() {
                // eslint-disable-next-line no-undef
                element.value = binding.value;
            },
            // 指令所在元素被插入页面时
            inserted() {
                // eslint-disable-next-line no-undef
                element.focus();
            },
            // 指令所在模板被重新解析时
            update() {
                // eslint-disable-next-line no-undef
                element.value = binding.value;
            },
        });

        // 定义混入
        Vue.mixins
    },
};
