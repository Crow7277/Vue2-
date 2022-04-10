<template>
    <div class="student">
        <h2>学生名称：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑atguigu事件</button>
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
    methods: {
        sendStudentName() {
            // 触发Student组件实例身上的atguigu事件
            this.$emit('atguigu', this.name);
        },
        unbind(){
            this.atguigu
        }
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
