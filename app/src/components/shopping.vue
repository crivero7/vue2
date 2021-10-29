<template>
    <section>
        <div>
            <h1>Shopping list</h1>
            <input class="inputForm" type="text" placeholder="Press enter to add new item" @keyup.enter="addItem(item)" v-model="item" /> <a class="addItem" @click="addItem(item)">Add item</a>
        </div>
        <div class="overview">
            <ul v-for="(item, n) in items" :key="n">
                <span>{{ item }}</span><a class="removeItem" @click="removeItem(item)">REMOVE</a>
            </ul>
        </div>
        <div>
            <a class="deleteAll" @click="deleteAll()">Delete all</a>
        </div>
    </section>
    
</template>

<script src='../assets/js/shopping.js'>

</script>

<style lang="scss">
    @import "../assets/styles/shopping.scss";
</style>