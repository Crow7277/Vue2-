<template>
    <div id="app">
</template>

<script>
import axios from 'axios';

export default {
    name: 'App',
    methods: {
        getStudents() {
            axios.get('http://localhost:8080/api/students').then(
                response => {
                    console.log('请求成功了', response.data);
                },
                error => {
                    console.log('请求失败了', error.message);
                }
            );
        },
        getCars() {
            axios.get('http://localhost:8080/foo/cars').then(
                response => {
                    console.log('请求成功了', response.data);
                },
                error => {
                    console.log('请求失败了', error.message);
                }
            );
        },
    },
};
</script>
