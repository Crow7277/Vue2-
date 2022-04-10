<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName" />
        <!-- 给student组件的组件实例对象上绑定了一个atguigu事件 -->
        <Student v-on:atguigu="demo" />
    </div>
</template>

<script>
// 引入Student组件
import Student from './components/Student.vue';
import School from './components/School.vue';
export default {
    name: 'App',
    data() {
        return {
            msg: '欢迎学习Vue',
        };
    },
    components: {
        Student,
        School,
    },
    methods: {
        getSchoolName(name) {
            console.log('App收到了学校名', name);
        },
        demo(name) {
            console.log('demo被调用了');
        },
    },
};
</script>
<style lang="css" scoped>
.app {
    background-color: gray;
    padding: 5px;
}
</style>
