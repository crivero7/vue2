<template>
    <div class="container">
        <h1>Deep Watcher</h1>
        <div>
            <h4>{{ product.label }}</h4>
            <h5>${{ product.price }} (${{ discount }} Off)</h5>
        </div>
        <a href="#" @click="updatePrice()">Reduce price!</a>
    </div>
</template>

<script src="../assets/js/watching-nested.js"></script>

<style lang="scss">
    @import "../assets/styles/watching-nested.scss";
</style>
