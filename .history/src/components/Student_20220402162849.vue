<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>学生名称：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>学生年龄：{{ age }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            msg: '我是一个学生',
        };
    },
    // props: ['name', 'sex', 'age'] // 简单接收
    props: {},
};
</script>
