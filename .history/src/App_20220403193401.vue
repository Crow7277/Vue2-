<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <School :getSchoolName="getSchoolName"/>
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
    methods: {
        getSchoolName(name) {
            console.log('App收到了学校名', name);
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
