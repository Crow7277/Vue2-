<template>
    <div class="container">
        <Category :title="美食" :listData="foods">
        <Category :title="游戏" :listData="games" />
        <Category :title="电影" :listData="films" />
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
.container {
    display: flex;
    justify-content: space-around;
}
</style>
