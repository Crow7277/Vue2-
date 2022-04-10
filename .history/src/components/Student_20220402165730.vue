<template>
    <div>
        <h2>学生名称：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '张三',
            age: 18,
        };
    },
};
</script>
