<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">
                        News
                    </router-link>
                </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">
                        Message
                    </router-link>
                </li>
            </ul>
            <!-- 此处使用include属性指定那个路由组件会被缓存，如果不指定则说有的路由组件都会被缓存 -->
            <!-- include的属性值为 —— 组件名 -->
            <keep-alive include="News">
                <router-view></router-view>
            </keep-alive>

            <keep-alive :include="">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    /* beforeDestroy() {
			console.log('Home组件即将被销毁了')
		}, */
    /* mounted() {
			console.log('Home组件挂载完毕了',this)
			window.homeRoute = this.$route
			window.homeRouter = this.$router
		},  */
};
</script>
