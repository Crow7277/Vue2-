<template>
    <ul class="todo-main">
        <MyItem v-for="todoObj in todos" :key="todoObj.id" />
    </ul>
</template>

<script>
import MyItem from './MyItem.vue';
export default {
    name: 'MyList',
    data() {
        return {
            todos: [
                {
                    id: '001',
                    title: '抽烟',
                    done: true,
                },
                {
                    id: '002',
                    title: '喝酒',
                    done: true,
                },
                {
                    id: '003',
                    title: '开车',
                    done: true,
                },
            ],
        };
    },
    components: { MyItem },
};
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>
