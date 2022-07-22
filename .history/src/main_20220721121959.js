//引入Vue
import Vue from 'vue';
//引入App
import App from './App.vue';

// // 完整引入
// // 引入ElementUI组件库
// import ElementUI from 'element-ui';
// // 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';
//
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

//关闭Vue的生产提示
Vue.config.productionTip = false;
//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
});

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let item of tokens) {
        if (isNum(item)) stack.push(parseInt(item));
        else {
            let num2 = stack.pop();
            let num1 = stack.pop();
            if (item === '+') {
                stack.push(num1 + num2);
            } else if (item === '-') {
                stack.push(num1 - num2);
            } else if (item === '*') {
                stack.push(num1 * num2);
            } else if (item === '/') {
                stack.push(num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2));
            }
        }
    }
    return stack.pop();
};
const isNum = s => !('+' === s || '-' === s || '*' === s || '/' === s);
