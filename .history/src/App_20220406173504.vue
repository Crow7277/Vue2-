<template>
    <div class="container">
        <Category :title="游戏">
            <ul slot="center">
                <li v-for="(g, index) in games" :key="index">{{ g }}</li>
            </ul>
            <div slot="footer" class="foot">
                <a href="#">单机游戏</a>
                <a href="#">网络游戏</a>
            </div>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category.vue';
export default {
    components: { Category },
    name: 'App',
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾', '牛排'],
            games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
            films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》'],
        };
    },
};
</script>
<style>
.container,
.foot {
    display: flex;
    justify-content: space-around;
}
h4 {
    text-align: center;
}
</style>
