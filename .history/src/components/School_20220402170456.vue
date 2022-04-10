<template>
    <div>
        <h2 @click="showName">学校名称：{{ name }}</h2>
        <h2>学校地址{{ address }}</h2>
    </div>
</template>

<script>
// 引入mixin混合
import {mixin} from './'
export default {
    name: 'School',
    data() {
        return {
            name: '尚硅谷',
            address: '北京',
        };
    },
};
</script>
