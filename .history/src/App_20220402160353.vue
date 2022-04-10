<template>
    <div>
        <h1 v-text="msg"></h1>
        <button @click="showDOM">点我输出上方DOM元素</button>
        <School />
    </div>
</template>

<script>
// 引入schoolzujian
import School from './components/School.vue';
export default {
    name: 'App',
    data() {
        return {
            msg: '欢迎学习Vue',
        };
    },
    methods: {
        showDOM() {
            console.log('@@');
        },
    },
    components: {
        School,
    },
};
</script>
