// src/components/exercise-methods.vue
<template>
    <div>
        <h1>Vue lifecycle hooks</h1>
        <ul>
            <li v-for="(item, n) in list" :key="n">
                {{ item }} <a @click="deleteItem(item)">Delete</a>
            </li>
        </ul>
    </div>
    
</template>

<script src='../assets/js/lifecycle.js'>

</script>

<style lang="scss">
    @import "../assets/styles/lifecycle.scss";
</style>
