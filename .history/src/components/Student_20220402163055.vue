<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>学生名称：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>学生年龄：{{ age }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            msg: '我是一个学生',
        };
    },
    // 简单声明接收
    // props: ['name', 'sex', 'age']

    // 接收的同时对数据进行类型限制
    // props: {
    //     name: String,
    //     sex: String,
    //     age: Number,
    // },

    props:{
        name:{
            type:String, // 类型是字符串
            required:true //名字是必须传递的
        },
        name:{
            type:String, // 类型是字符串
            required:true //名字是必须传递的
        },
    }
};
</script>
