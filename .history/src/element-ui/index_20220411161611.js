// element/index.js
import Vue from 'vue';
import { Button, Select, Switch, MessageBox, Message } from 'element-ui';
const element = {
    install: function (Vue) {
        Vue.use(Button);
        Vue.use(Switch);
        Vue.use(Select);
    },
};
export default element;
