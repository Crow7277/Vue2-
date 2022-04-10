<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <School />
        <hr />
        <Student />
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
};
</script>
<style lang="css" scoped>
.app {
   bcg;
}
</style>
