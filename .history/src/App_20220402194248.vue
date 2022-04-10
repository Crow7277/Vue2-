<template>
    <div>
        <MyHeader />
        <MyList>
            <MyItem />
        </MyList>
        <MyFooter />
    </div>
</template>

<script>
// 引入Student组件
import MyHeader from './components/MyHeader.vue';
import MyItem from './components/MyItem.vue';
import MyList from './components/MyList.vue';
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
        MyItem,
        MyList,
        MyFooter,
    },
};
</script>
