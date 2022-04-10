<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName" />

        <!-- 给student组件的组件实例对象上绑定了一个atguigu事件 -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
        <!-- 就是说给Student组件绑定了一个atguigu自定义事件，其回调为下面的getStudentName回调函数 -->
        <!-- 在子组件中触发这个事件，就会触发回调函数，从而实现数据传递 -->
        <Student v-on:atguigu="getStudentName" />

        <Student ref="student" />
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
        getStudentName(name) {
            console.log('APP收到了学生名', name);
        },
    },
    mounted(){
        this.$refs.student.$on('atguigu',getu)
    }
};
</script>
<style lang="css" scoped>
.app {
    background-color: gray;
    padding: 5px;
}
</style>
