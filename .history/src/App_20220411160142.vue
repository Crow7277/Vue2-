<template>
    <div>
        <button>原生的按钮</button>
        <input type="text" />

        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>

        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
    </div>
</template>

<script>
import Vue from 'vue';

// 按需引入
import { Button, Row, Datepicker } from 'element-ui';
// 应用ElementUI
// Vue.use(ElementUI);
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Datepicker.name, Datepicker);
export default {
    name: 'App',
};
</script>
<style></style>
