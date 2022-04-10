<template>
    <div>
        <h1>当前求和为：{{ qiuhe }}</h1>
        <h3>当前求和放大10倍：{{ bigSum }}</h3>
        <h3>我在{{ xuexiao }},学习{{ xueke }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Count',
    data() {
        return {
            n: 1, //用户选择的数字
        };
    },
    computed: {
        qiuhe() {
            return this.$store.state.sum;
        },
        xuexiao() {
            return this.$store.state.school;
        },
        xueke() {
            return this.$store.state.subject;
        },
        bigSum() {
            return this.$store.getters.bigSum;
        },
    },
    methods: {
        increment() {
            // this.$store.dispatch('jia', this.n);
            this.$store.commit('JIA', this.n);
        },
        decrement() {
            // this.$store.dispatch('jian', this.n);
            this.$store.commit('JIAN', this.n);
        },
        incrementOdd() {
            this.$store.dispatch('jiaOdd', this.n);
        },
        incrementWait() {
            this.$store.dispatch('jiaWait', this.n);
        },
    },
    mounted() {
        const x = mapState({
            qiuhe: 'sum',
            xuexiao: 'school',
            xueke: 'subject',
        });
    },
};
</script>

<style>
button {
    margin-left: 5px;
}
</style>
