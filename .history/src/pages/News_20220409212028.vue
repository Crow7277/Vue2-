<template>
    <ul>
        <li :style="{ opacity }">欢迎学习Vue</li>
        <li>
            news001
            <input type="text" />
        </li>
        <li>
            news002
            <input type="text" />
        </li>
        <li>
            news003
            <input type="text" />
        </li>
    </ul>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {
            opacity: 1,
        };
    },
	mounted(){
		setInterval(()=>{
			
		})
	}
};
</script>
