<template>
    <div class="category">
        <h3>xxx分类</h3>
        <ul>
            <li>xxxx</li>
            <li>xxxx</li>
            <li>xxxx</li>
            <li>xxxx</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Category',
    data() {
			return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
			}
		},
};
</script>

<style>
.category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3 {
    text-align: center;
    background-color: orange;
}
</style>
