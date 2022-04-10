<template>
    <div>
        <Student/>
        <School></School>
    </div>
</template>

<script>
// 引入Student组件
import Student from './src/components/Student.vue';
import School from './src/components/School.vue';
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
};
</script>
