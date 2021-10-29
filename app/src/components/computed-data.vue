<template>
    <section>
        <div>
            <input v-model="firstName" placeholder="First name">
            <input v-model="lastName" placeholder="Last name">
            <h3 class='output'>{{ fullName }}</h3>
        </div>
    </section>
    
</template>

<script src='../assets/js/computed-data.js'></script>

<style lang="scss">
    @import "../assets/styles/computed-data.scss";
</style>
