<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" :appear="true">
            <h1 v-show="isShow">你好啊</h1>
        </transition>
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

.hello-enter-active {
    
}
.hello-leave-active {
    
}


</style>
