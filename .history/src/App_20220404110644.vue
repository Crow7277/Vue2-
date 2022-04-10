<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <h1>学生的姓名是：{{ StudentName }}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName" />
        <Student ref="student" @click.native="show" />
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
            StudentName: '',
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
        getStudentName(name, ...params) {
            console.log('APP收到了学生名', name, params);
            this.StudentName = name;
        },
        m1() {
            console.log('demo事件被触发了');
        },
        show() {
            alert('111');
        },
    },
    mounted() {
        // setTimeout(() => {
        //     this.$refs.student.$on('atguigu', this.getStudentName);
        // }, 3000);
        this.$refs.student.$on('atguigu', this.getStudentName);
        this.$refs.student.$on('atguigu', function (name, ...params) {
            console.log('APP收到了学生名', name, params);
            this.StudentName = name;
        });
        // 只触发一次
        // this.$refs.student.$once('atguigu', this.getStudentName);
    },
};
</script>
<style lang="css" scoped>
.app {
    background-color: gray;
    padding: 5px;
}
</style>
