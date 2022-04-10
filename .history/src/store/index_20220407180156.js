// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue';

// 引入Vuex
import Vuex from 'vuex';

import countOptions from './'

// 使用vuex插件
Vue.use(Vuex);



// 创建Store,并暴露
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions,
    },
});
