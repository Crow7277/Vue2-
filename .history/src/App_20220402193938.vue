<template>
    <div>
        <Header />
        <List
        <Header />
        <Footer />
    </div>
</template>

<script>
// 引入Student组件
import Header from './components/Header.vue';
import Item from './components/Item.vue';
import List from './components/List.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    data() {
        return {
            msg: '欢迎学习Vue',
        };
    },
    components: {
        Header,
        Item,
        List,
        Footer,
    },
};
</script>
