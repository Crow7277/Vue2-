<template>
    <div>
        <Student name="李四" sex="女" :age="18" />
    </div>
</template>

<script>
// 引入Student组件
import Student from '../src/components/Student.vue';
import Student from '../03_src_props配置/components/Student.vue';
export default {
    name: 'App',
    data() {
        return {
            msg: '欢迎学习Vue',
        };
    },
    components: {
        Student,
        School,
    },
};
</script>
