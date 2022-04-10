<template>
    <ul>
        <li>消息编号：{{ $route.params.id }}</li>
        <li>消息标题：{{ $route.params.title }}</li>
        <li>{{a}}</li>
        <li>消息标题：{{ $route.params.title }}</li>
    </ul>
</template>

<script>
export default { props: ['a', 'b'], name: 'Detail' };
</script>

<style></style>
