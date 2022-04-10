<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
            <!-- 由于是checkbox，所以可以利用v-model双向绑定传递过来的todo.done检测是否勾选 -->
            <!-- 但是不推荐这种写法,因为这样会更改props的值，虽然todo.done是对象里面的值，
            Vue是发现不了props传递过来的todo的值更改了的，但是这样违背了Vue的设计意念，所以不推荐使用 -->
            <!-- 因此ESlint检查会直接报错 -->
            <!-- <input type="checkbox" v-model="todo.done" /> -->
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur" />
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
    name: 'MyItem',
    // 声明接收todo对象
    props: ['todo'],
    methods: {
        // 勾选或取消勾选
        handleCheck(id) {
            // 通知App组件将todo 对象的done值取反
            this.$bus.$emit('checkTodo', id);
        },
        //删除
        handleDelete(id) {
            if (confirm('确定删除吗？')) {
                //通知App组件将对应的todo对象删除
                // this.$bus.$emit('deleteTodo', id);
                pubsub.publish('deleteTodo', id);
            }
        },
        // 编辑
        handleEdit(todo) {
            this.$set(todo, 'isEdit', true);
        },
        handleBlur(todo) {
            todo.isEdit = false;
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

li:hover {
    background: #ddd;
}

li:hover button {
    display: block;
}
</style>
