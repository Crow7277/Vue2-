<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址{{ address }}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name: 'School',
    data() {
        return {
            name: '尚硅谷',
            address: '北京',
        };
    },
    mounted() {
        pubsub.subscribe('hello', function (msg, data) {
            console.log('有人发布了hello消息，hello消息发布成功', msg, data);
        });
    },
    beforeDestroy() {},
};
</script>
<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>
