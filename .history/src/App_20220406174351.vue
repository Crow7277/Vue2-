<template>
    <div class="container">
        <Category :title="游戏">
            <template scope="atguigu">
                <ul>
                    <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
                </ul>
            </template>
        </Category>

        <Category :title="游戏">
            <Category :title="游戏">
            <template scope="atguigu">
                <ul>
                    <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
                </ul>
            </template>
        </Category>

        <Category :title="游戏">
            <h4>
                <li v-for="(g, index) in games" :key="index">{{ g }}</li>
            </h4>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category.vue';
export default {
    components: { Category },
    name: 'App',
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
