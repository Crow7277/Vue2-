<template>
    <ul class="todo-main">
        <MyItem />
        <li>
            <label>
                <input type="checkbox" />
                <span>xxxxx</span>
            </label>
            <button class="btn btn-danger" style="display: none">删除</button>
        </li>
        <li>
            <label>
                <input type="checkbox" />
                <span>yyyy</span>
            </label>
            <button class="btn btn-danger" style="display: none">删除</button>
        </li>
    </ul>
</template>

<script>
import MyItem from './MyItem.vue';
export default {
    name: 'MyList',
    components: { MyItem },
};
</script>

<style></style>
