// 人员管理相关的配置
const personOptions = {
    namespaced: true, //开启命名空间
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value);
            } else {
                alert('添加的人必须姓王');
            }
        },
    },