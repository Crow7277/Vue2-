<template>
    <div>
        <h2 @click="showName">学校名称：{{ name }}</h2>
        <h2>学校地址{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '张三',
            sex: '男',
        };
    },
    methods: {
        showName() {
            alert(this.name);
        },
    },
};
</script>
