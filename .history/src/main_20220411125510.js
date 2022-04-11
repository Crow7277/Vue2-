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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    // 同时从A，B开始遍历
    // 当A遍历完之后,紧接着遍历B
    // 当B遍历完之后,紧接着遍历A
    // 如果存在交点,则说明链表相交
    let pA = headA;
    let pB = headB;
    while(pA !== pB){
        if(pA) pA = pA.next;
        else pA = headB;
        if(pB) pB = pB.next;
        else pB = headA;
    }
    return pA;

};