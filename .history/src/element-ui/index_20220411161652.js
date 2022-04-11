// element/index.js
import Vue from 'vue';
import { Button, DatePicker } from 'element-ui';
const element = {
    install: function (Vue) {
        Vue.comments(Button.name, Button);
        Vue.comments(Button.name, DatePicker);
        Vue.comments(Button.name, Button);
    },
};
export default element;
