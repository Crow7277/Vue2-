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
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    const Mose = [
        '.-',
        '-...',
        '-.-.',
        '-..',
        '.',
        '..-.',
        '--.',
        '....',
        '..',
        '.---',
        '-.-',
        '.-..',
        '--',
        '-.',
        '---',
        '.--.',
        '--.-',
        '.-.',
        '...',
        '-',
        '..-',
        '...-',
        '.--',
        '-..-',
        '-.--',
        '--..',
    ];
    const res = new Set();
    for (let word of words) {
        let s = '';
        for (let c of word) {
            s += Mose[c.charCodeAt() - 'a'.charCodeAt()];
        }
        res.add(s);
    }
    return res.size;
};
