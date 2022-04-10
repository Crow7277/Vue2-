<template>
    <div>
        <h1 v-text="msg"></h1>
        <button @click=""></button>
        <School />
    </div>
</template>

<script>
// 引入schoolzujian
import School from './components/School.vue';
export default {
    name: 'App',
    components: {
        School,
    },
};
</script>
