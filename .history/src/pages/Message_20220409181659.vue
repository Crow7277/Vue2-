<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <router-link to="h/message1">{{ m.title }}</router-link>
                &nbsp;&nbsp;
            </li>
        </ul>
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
};
</script>

<style></style>
