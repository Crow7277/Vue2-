<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <select v-model="n">
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
export default {
    name: 'Count',
    data() {
        return {
            n: 1, //用户选择的数字
            sum: 0, //当前的和
        };
    },
    methods: {
        increment() {
            this.sum += this.n;
        },
        decrement() {},
        incrementOdd() {},
        incrementWait() {},
    },
};
</script>

<style>
button {
    margin-left: 5px;
}
</style>
