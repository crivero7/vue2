// src/components/returning-methods.vue
<template>
    <div>
        <h1>Returning Methods</h1>
        <div>
            Cart({{ totalItems }}) {{ formatCurrency(totalCost) }}
        </div>
        <ul>
            <li v-for="n in 5" :key="n">
                <a href="#" @click="addToCart(n)">Add {{ formatCurrency(n) }}</a>
            </li>
        </ul>
    </div>
</template>

<script src='../assets/js/returning-methods.js'>

</script>

<style lang="scss">
    @import "../assets/styles/returning-methods.scss";
</style>
