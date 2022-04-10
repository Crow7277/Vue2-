<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <h1 v-show="isShow">你好啊</h1>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            isShow: true,
        };
    },
};
</script>

<style scope>
h1 {
    background-color: orange;
}

@keyframes atguigu {
    from {
        transform: translateX(-100px);
    }
    to{
        tar
    }
}
</style>
