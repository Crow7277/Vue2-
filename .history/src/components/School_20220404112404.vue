<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '尚硅谷',
            address: '北京',
        };
    },mounted(){
        console.log('Student');
    }
};
</script>
<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>
