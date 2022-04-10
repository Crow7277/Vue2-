<template>
    <div>
        <Student />
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
