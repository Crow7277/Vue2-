<template>
    <div>
        <h2>学生名称：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '张三',
            myAge: this.age,
        };
    },
    methods: {
        updateAge() {
            this.myAge = 99;
        },
    },
    // 简单声明接收
    // 接收的属性值不能修改，如果要修改需要在data中接收
    props: ['name', 'sex', 'age'],

    // 接收的同时对数据进行类型限制
    // props: {
    //     name: String,
    //     sex: String,
    //     age: Number,
    // },

    // 接收的同时对数据类型进行限制+默认值的指定+必要性的限制
    // props: {
    //     name: {
    //         type: String, // 类型是字符串
    //         required: true, //名字是必须传递的
    //     },
    //     sex: {
    //         type: String, // 类型是字符串
    //         default: '女', //性别是女
    //     },
    //     age: {
    //         type: Number, // 类型是数字
    //         required: true, //年龄是必须传递的
    //     },
    // },
};
</script>
