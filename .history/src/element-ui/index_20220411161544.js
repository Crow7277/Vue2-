// element/index.js
import { Button, Select, Switch, MessageBox, Message } from 'element-ui';
export default = {
    install: function (Vue) {
        Vue.use(Button);
        Vue.use(Switch);
        Vue.use(Select);
        // 下面这种写法是项目中的$xxx都被elementui对应的组件所替换
        // Vue.prototype.$msgbox = MessageBox;
        // Vue.prototype.$alert = MessageBox.alert;
        // Vue.prototype.$confirm = MessageBox.confirm;
        // Vue.prototype.$message = Message;
    },
};
export default element;
