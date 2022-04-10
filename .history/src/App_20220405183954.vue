<template>
    <div class="container">
        <Category />
        <Category />
        <Category />
    </div>
</template>

<script>
import Category from './components/Category.vue';
export default {
    components: { Category },
    name: 'App',
    
};
</script>
<style>
.container {
    display: flex;
    justify-content: space-around;
}
</style>
