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
            name: '尚硅谷123123',
            address: '北京',
        };
    },
};
</script>
<style lang="less" scoped>
.school {
    background-color: skyblue;
    .qwe {
        font-size: 40px;
    }
}
</style>
