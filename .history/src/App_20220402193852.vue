<template>
    <div>
        <School />
        <hr />
        <Student />
    </div>
</template>

<script>
// 引入Student组件
import Header from './components/Header.vue';
import Item from './components/Item.vue';
import List from './components/List.vue';
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
