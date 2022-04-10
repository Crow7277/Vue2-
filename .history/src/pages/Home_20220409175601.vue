<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link class="list-group-item" href="./home-news.html">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item" href="./home-message.html">Message</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
};
</script>

<style></style>
