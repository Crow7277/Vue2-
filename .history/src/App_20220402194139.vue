<template>
    <div>
        <MyHeader />
        <List>
            <Item />
        </List>
        <Footer />
    </div>
</template>

<script>
// 引入Student组件
import MyHeader from './components/MyHeader.vue';
import Item from './components/Item.vue';
import List from './components/List.vue';
import MyFooter from './components/MyFooter.vue';

export default {
    name: 'App',
    data() {
        return {
            msg: '欢迎学习Vue',
        };
    },
    components: {
        MyHeader,
        Item,
        List,
        MyFooter,
    },
};
</script>
