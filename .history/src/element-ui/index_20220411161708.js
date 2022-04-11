// element/index.js
import Vue from 'vue';
import { Button, DatePicker, Row } from 'element-ui';
const element = {
    install: function (Vue) {
        Vue.comments(Button.name, Button);
        Vue.comments(DatePicker.name, DatePicker);
        Vue.comments(Row.name, Row);
    },
};
export default element;
