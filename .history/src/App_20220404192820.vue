<template>
    <div>
        <Test></Test>
    </div>
</template>

<script>
import Test from './components/Test.vue';
export default {
    name: 'App',
    components: {
        Test,
    },
};
</script>

<style lang="css">
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}
.btn-edit {
    color: #fff;
    background-color: skyblue;
    border: 1px solid rgb(118, 182, 207);
    margin-right: 5px;
}
.btn-edit:hover {
    color: #fff;
    background-color: skyblue;
}
.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
