<template>
    <div class="student">
        <h2>学生名称：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendSchoolName">把学校名给App</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            sex: '男',
        };
    },
};
</script>
<style scoped>
.student {
    background-color: pink;
    padding: 5px;
    margin-top: 50px;
}
</style>
