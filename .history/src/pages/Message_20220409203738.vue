<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">
                    {{ m.title }}
                </router-link> -->

                <!-- 跳转路由并携带params参数，to的对象写法 -->
                <!-- 使用params参数的话，不能使用path，只能使用name -->
                <router-link
                    :to="{
                        name: 'xiangqing',
                        query: {
                            id: m.id,
                            title: m.title,
                        },
                    }"
                >
                    {{ m.title }}
                </router-link>

                <button @click="pushShow">push查看</button>
                <button>replace查看</button>

                &nbsp;&nbsp;
            </li>
        </ul>
        <br />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                { id: '001', title: '消息001' },
                { id: '002', title: '消息002' },
                { id: '003', title: '消息003' },
            ],
        };
    },
    methods:{
        pushShow(){
            this.$router.push()
        }
    }
};
</script>

<style></style>
