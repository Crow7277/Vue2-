// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue';

// 引入Vuex
import Vuex from 'vuex';

// 使用vuex插件
Vue.use(Vuex);



    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations中的ADD_PERSON被调用了', state, value);
            state.personList.unshift(value);
        },
    },
    state: { personList: [{ id: '001', name: '张三' }] },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name;
        },
    },
};

// 创建Store,并暴露
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions,
    },
});
