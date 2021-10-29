<template>
    <div class="container">
        <h1>Async Fetch</h1>
        <button @click="getApi()">{{ loading ? 'Loading...' : 'Learn something profound'}}</button>
        <blockquote v-if="quote">{{ quote }}</blockquote>
    </div>
</template>

<script src="../assets/js/async-fetch.js"></script>

<style lang="scss">
    @import "../assets/styles/async-fetch.scss";
</style>
