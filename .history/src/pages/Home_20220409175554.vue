<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router class="list-group-item active" href="./home-news.html">News</router>
                </li>
                <li>
                    <router class="list-group-item" href="./home-message.html">Message</router>
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
