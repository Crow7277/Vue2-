<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord" />
            &nbsp;
            <button @click="getUsers">Search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Search',
    data() {
        return {
            keyWord: '',
        };
    },
    methods: {
        getUsers() {
            axios.get(`https://api.github.com/search/users?q=xxx${this.keyWord}`).then(
                response => {
                    console.log('请求成功了', response.data);
                },
                error => {
                    console.log('失败了', error.message);
                }
            );
        },
    },
};
</script>

<style></style>
