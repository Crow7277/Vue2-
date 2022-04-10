// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue';

// 引入Vuex
import Vuex from 'vuex';

// 使用vuex插件
Vue.use(Vuex);

// 求和功能相关的配置
const countOptions = {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        // 这里第一个参数的state就是定义的存储数据的state经过处理后的结果，类似于vue中的_data与data
        JIA(state, value) {
            console.log('mutations中的JIA被调用了', state, value);
            state.sum += value;
        },
        JIAN(state, value) {
            console.log('mutations中的JIAN被调用了', state, value);
            state.sum -= value;
        },
    },
    state: { sum: 0, school: '尚硅谷', subject: '前端' },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        },
    },
};

// 人员管理相关的配置
const personOptions = {
    namespaced:true,//开启命名空间
    actions: {},
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations中的ADD_PERSON被调用了', state, value);
            state.personList.unshift(value);
        },
    },
    state: { personList: [{ id: '001', name: '张三' }] },
    getters: {},
};

// 创建Store,并暴露
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions,
    },
});
