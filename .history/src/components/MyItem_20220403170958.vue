<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
            <!-- 由于是checkbox，所以可以利用v-model双向绑定传递过来的todo.done检测是否勾选 -->
            <!-- 但是不推荐这种写法,因为这样会更改props的值，虽然todo.done是对象里面的值，Vue是发现不了props -->
            <input type="checkbox" v-model="todo.done" />
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" style="display: none">删除</button>
    </li>
</template>

<script>
export default {
    name: 'MyItem',
    // 声明接收todo对象
    props: ['todo', 'checkTodo'],
    methods: {
        handleCheck(id) {
            // 通知App组件将todo 对象的done值取反
            this.checkTodo(id);
        },
    },
};
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
</style>
