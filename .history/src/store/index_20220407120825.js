// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue';

// 引入Vuex
import Vuex from 'vuex';

// 使用vuex插件
Vue.use(Vuex);

// 准备actions —— 用于响应组件中的动作
const actions = {
    jia(context, value) {
        console.log('actions中的jia被调用了', context, value);
        context.commit('JIA', value);
    },
};
// 准备mutations —— 用于操作数据(state)
const mutations = {
    JIA(state, value) {
        console.log('mutations中的JIA被调用了', state, value);
        st
    },
};
// 准备state —— 用于存储数据
const state = { sum: 0 };

// 创建Store,并暴露
export default new Vuex.Store({
    actions,
    mutations,
    state,
});
