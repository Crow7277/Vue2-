// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue';

// 引入Vuex
import Vuex from 'vuex';

// 使用vuex插件
Vue.use(Vuex);

// 准备actions —— 用于响应组件中的动作
const actions = {
    // context是一个mini的store作为连接Actions与Mutations的上下文对象
    // 里面存在着从Actions到Mutations可能需要的方法等，比如commit
    // jia(context, value) {
    //     // console.log('actions中的jia被调用了', context, value);
    //     context.commit('JIA', value);
    // },
    // jian(context, value) {
    //     // console.log('actions中的jian被调用了', context, value);
    //     context.commit('JIAN', value);
    // },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value);
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value);
        }, 500);
    },
};
// 准备mutations —— 用于操作数据(state)
const mutations = {
    // 这里第一个参数的state就是定义的存储数据的state经过处理后的结果，类似于vue中的_data与data
    JIA(state, value) {
        console.log('mutations中的JIA被调用了', state, value);
        state.sum += value;
    },
    JIAN(state, value) {
        console.log('mutations中的JIAN被调用了', state, value);
        state.sum -= value;
    },
};
// 准备state —— 用于存储数据
const state = { sum: 0 };

const getters = {
    bigSum(state){

    }
};

// 创建Store,并暴露
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
});
