<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <!-- 定义一个插槽等着组建的使用者进行填充 -->
        <slot >我是一些默认值，当使用者没有传递具体结构时我就会出现</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title'],
    data() {
        return {
            games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
        };
    },
};
</script>

<style>
.category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3 {
    text-align: center;
    background-color: orange;
}
video {
    width: 100%;
}
img {
    width: 100%;
}
</style>
