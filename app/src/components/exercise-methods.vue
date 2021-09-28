// src/components/exercise-methods.vue
<template>
    <section>
        <div>
            <h1>Trigerring Vue Methods</h1>
            <ul>
                <li v-for="n in 5" :key="n">
                    <a href="#" @click="triggerAlert(n)">Trigger {{ n }}</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script src='../js/exercise-methods.js'></script>

<style lang="scss">
    @import "../styles/exercise-methods.scss";
</style>