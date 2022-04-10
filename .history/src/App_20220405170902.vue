<template>
    <div id="app">
        <div class="container">
            <section class="jumbotron">
                <h3 class="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" />
                    &nbsp;
                    <button>Search</button>
                </div>
            </section>
            <div class="row">
                <div class="card">
                    <a href="https://github.com/xxxxxx" target="_blank">
                        <img src="https://cn.vuejs.org/images/logo.svg" style="width: 100px" />
                    </a>
                    <p class="card-text">xxxxxx</p>
                </div>
                <div class="card">
                    <a href="https://github.com/xxxxxx" target="_blank">
                        <img src="https://cn.vuejs.org/images/logo.svg" style="width: 100px" />
                    </a>
                    <p class="card-text">xxxxxx</p>
                </div>
                <div class="card">
                    <a href="https://github.com/xxxxxx" target="_blank">
                        <img src="https://cn.vuejs.org/images/logo.svg" style="width: 100px" />
                    </a>
                    <p class="card-text">xxxxxx</p>
                </div>
                <div class="card">
                    <a href="https://github.com/xxxxxx" target="_blank">
                        <img src="https://cn.vuejs.org/images/logo.svg" style="width: 100px" />
                    </a>
                    <p class="card-text">xxxxxx</p>
                </div>
                <div class="card">
                    <a href="https://github.com/xxxxxx" target="_blank">
                        <img src="https://cn.vuejs.org/images/logo.svg" style="width: 100px" />
                    </a>
                    <p class="card-text">xxxxxx</p>
                </div>
            </div>
        </div>
    </div>
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
