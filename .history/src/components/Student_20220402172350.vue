<template>
    <div>
        <h2>学生名称：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
    </div>
</template>

<script>
// 引入一个混合 mixin
// import { mixin, mixin2 } from '../mixin';
export default {
    name: 'School',
    data() {
        return {
            name: '张三',
            sex: '男',
        };
    },
    // mixins: [mixin, mixin2],
};
</script>
