<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <h1>学生的姓名是：{{ StudentName }}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName" />

        <!-- 第一种写法：使用@或者v-on -->
        <!-- 给student组件的组件实例对象上绑定了一个atguigu事件 -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
        <!-- 就是说给Student组件绑定了一个atguigu自定义事件，其回调为下面的getStudentName回调函数 -->
        <!-- 在子组件中触发这个事件，就会触发回调函数，从而实现数据传递 -->
        <!-- <Student v-on:atguigu="getStudentName" @demo="m1" /> -->
        <!-- <Student @atguigu="gettudentName" /> -->
        <!-- 只触发一次 -->
        <!-- <Student @atguigu.once="getStudentName" /> -->

        <!-- 第二中写法：使用ref -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
        <!-- 组件中默认绑定的事件都是自定义事件，因此如果想要使用原生的事件，需要加.native修饰符 -->
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
        this.$refs.student.$on('atguigu', function(name, ...params){

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
