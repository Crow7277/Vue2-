<template>
    <div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="page-header"><h2>Vue Router Demo</h2></div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <a class="list-group-item active" href="./about.html">About</a>
                    <a class="list-group-item" href="./home.html">Home</a>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <h2>我是About的内容</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Count from './components/Count.vue';
import Person from './components/Person.vue';
export default {
    components: { Count, Person },
    name: 'App',
};
</script>
<style></style>
