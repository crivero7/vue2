<template>
    <div class="container">
        <h1>Methods vs Watchers vs Computed props</h1>

        <div class="col">
            <input type="text" placeholder="Search with method" v-model="input" @keyup="searchMethod">
            <ul>
                <li v-for="(item, i) in methodFilterList" :key="i">
                    {{ item }}
                </li>
            </ul>
        </div>
        <div class="col">
            <input type="text" placeholder="Search with computed props" v-model="input2">
            <ul>
                <li v-for="(item, i) in computedList" :key="i">
                    {{ item }}
                </li>
            </ul>
        </div>

        <div class="col">
            <input type="text" placeholder="Search with watchers" v-model="input3">
            <ul>
                <li v-for="(item, i) in watchFilterList" :key="i">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="../assets/js/search.js"></script>

<style lang="scss">
    @import "../assets/styles/search.scss";
</style>
