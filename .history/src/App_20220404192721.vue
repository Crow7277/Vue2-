<template>
    <div >
        
    </div>
</template>

<script>
import Test from "./components/"
export default {
    name: 'App',
    components: {
        MyHeader,
        MyList,
        MyFooter,
    },
    data() {
        return {
            todos: JSON.parse(localStorage.getItem('todos')) || [],
        };
    },
    methods: {
        // 添加一个todo
        addTodo(todoObj) {
            this.todos.unshift(todoObj);
        },
        // 勾选或者取消勾选一个todo
        checkTodo(id) {
            this.todos.forEach(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done;
                }
            });
        },
        //删除一个todo
        deleteTodo(_, id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        // 全选or全不选
        checkAllTodo(done) {
            this.todos.forEach(todo => {
                todo.done = done;
            });
        },
        // 清除所有
        clearAllTodo() {
            console.log('1111');
            this.todos = this.todos.filter(todo => !todo.done);
        },
        updateTodo(id, title) {
            this.todos.forEach(todo => {
                if (todo.id === id) {
                    todo.title = title;
                }
            });
        },
    },
    watch: {
        todos: {
            deep: true,
            handler(val) {
                localStorage.setItem('todos', JSON.stringify(val));
            },
        },
    },
    mounted() {
        this.$bus.$on('checkTodo', this.checkTodo);
        this.$bus.$on('updateTodo', this.updateTodo);
        this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo);
    },
    beforeDestroy() {
        this.$bus.$off('checkTodo');
        this.$bus.$off('updateTodo');
        pubsub.unsubscribe(this.pubId);
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
