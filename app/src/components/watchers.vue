<template>
    <div class="container">
        <h1>Shop Watcher</h1>
        <div>
            Black Friday Sale
            <strike>Was {{ oldDiscount }}%</strike>
            <strong>Now {{ discount }}% OFF</strong>
        </div>
        <br>
        <a href="#" @click="updateDiscount()">Increase Discount!</a>
    </div>
</template>

<script src="../assets/js/watchers.js"></script>

<style lang="scss">
    @import "../assets/styles/watchers.scss";
</style>