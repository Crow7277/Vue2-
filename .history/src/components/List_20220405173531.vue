<template>
    <div class="row">
        <div class="card" v-for="user in users" :key>
            <a href="https://github.com/xxxxxx" target="_blank">
                <img src="https://cn.vuejs.org/images/logo.svg" style="width: 100px" />
            </a>
            <p class="card-text">xxxxxx</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'List',
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        this.$bus.$on('getUsers', users => {
            console.log('我是List组件，收到了数据', users);
            this.users = users;
        });
    },
};
</script>

<style scoped>
.album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}

.card {
    float: left;
    width: 33.333%;
    padding: 0.75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card > img {
    margin-bottom: 0.75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}
</style>
