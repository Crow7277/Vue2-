<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group
            name="animate_animated animate_bounce"
            enter-active-class="animate—_swing"
            leave-active-class=""
            :appear="true"
        >
            <h1 v-show="isShow" key="1">你好啊</h1>
            <h1 v-show="isShow" key="2">hello</h1>
        </transition-group>
    </div>
</template>

<script>
import 'animate.css';
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
</style>
