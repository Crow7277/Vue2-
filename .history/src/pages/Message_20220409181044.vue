<template>
    <div>
        <ul>
            <li>
                <a href="/message1">message001</a>
                &nbsp;&nbsp;
            </li>
            <li>
                <a href="/message2">message002</a>
                &nbsp;&nbsp;
            </li>
            <li>
                <a href="/message/3">message003</a>
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
            messageList: [{ id: '001', title: '消息001' },{}],
        };
    },
};
</script>

<style></style>
