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
    methods:{
        demo(){
            
        }
    }
    mounted() {
        // 使用这个第三方库的话this是undefined，因为是第三方库，因此需要使用箭头函数写回调函数
        this.pubId = pubsub.subscribe('hello', (msg, data) => {
            console.log('有人发布了hello消息，hello消息发布成功', msg, data);
        });
        this.pubId = pubsub.subscribe('hello', this.demo);
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId);
    },
};
</script>
<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>
