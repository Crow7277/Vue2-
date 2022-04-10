<template>
    <div>
        <School />
        <hr />
        <Student />
    </div>
</template>

<script>
// 引入Student组件
import School from './components/Header.vue';
import Student from './components/Footer.vue';

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
