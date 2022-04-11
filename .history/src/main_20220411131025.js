//引入Vue
import Vue from 'vue';
//引入App
import App from './App.vue';
//引入VueRouter
import VueRouter from 'vue-router';
//引入路由器
import router from './router/index';

//关闭Vue的生产提示
Vue.config.productionTip = false;
//应用插件
Vue.use(VueRouter);

//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    router: router,
});

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let fast = head;
    let slow = head;
    let checkA = null;
    let checkB = null;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            checkA = fast;
            checkB = head;
            while (checkA !== checkB) {
                checkA = checkA.next;
                checkB = checkB.next;
            }
            return checkA;
        }
    }
    return null;
};
