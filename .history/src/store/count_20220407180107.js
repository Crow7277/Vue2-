export default {{
    namespaced: true, //开启命名空间
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
};};
