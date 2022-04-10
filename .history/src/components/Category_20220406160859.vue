<template>
    <div class="category">
        <h3>xxx分类</h3>
        <ul>
            <li>xxxx</li>
            <li>xxxx</li>
            <li>xxxx</li>
            <li>xxxx</li>
        </ul>
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
