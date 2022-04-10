<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM" ref="btn">点我输出上方DOM元素</button>
        <Student ref="sch" />
    </div>
</template>

<script>
// 引入Student组件
import Student from './components/Student.vue';
export default {
    name: 'App',
    data() {
        return {
            msg: '欢迎学习Vue',
        };
    },
    methods: {
        showDOM() {
            console.log(this.$refs.title); // 真实DOM元素
            console.log(this.$refs.btn); // 真实DOM元素
            console.log(this.$refs.sch); // shcool组件的vc
        },
    },
    components: {
        Student,
    },
};
</script>
