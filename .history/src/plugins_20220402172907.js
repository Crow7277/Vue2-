export default {
    install(Vue) {
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4);
        });
    },
};
