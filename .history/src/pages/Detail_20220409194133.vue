<template>
    <ul>
        <!-- <li>消息编号：{{ $route.params.id }}</li>
        <li>消息标题：{{ $route.params.title }}</li> -->

        <li>消息编号：{{ id }}</li>
        <li>消息标题：{{ title }}</li>
        <!-- <li>a:{{ a }}</li> -->
        <!-- <li>b:{{ b }}</li> -->
    </ul>
</template>

<script>
export default {
    props: ['id', 'title'],
    name: 'Detail',
};
</script>

<style></style>
