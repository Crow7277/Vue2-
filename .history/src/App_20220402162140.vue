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
    components: {
        Student,
    },
};
</script>
