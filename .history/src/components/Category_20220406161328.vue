<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <ul>
            <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
        </ul>
        <img v-show="title === '美食'" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['listData', 'title'],
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
</style>
