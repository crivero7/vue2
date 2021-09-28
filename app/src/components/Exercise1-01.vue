// src/components/Exercise1-01.vue
<template>
    <section>
        <div>
        <h1 class="title">
            {{ isUpperCase ? title.toUpperCase() : title}}
        </h1>
        <h2 class="subtitle">
            {{ subtitle }}
        </h2>
        <ul>
            <li>{{ items[0] }}</li>
            <li>{{ items[1] }}</li>
            <li>{{ items[2] }}</li>
        </ul>
        <h1 class="title">
            {{ isUpperCase ? title.toUpperCase() : title}}
        </h1>
        <h2 class="subtitle">
            {{ subtitle }}
        </h2>
        <h2 class="subtitle" v-text="text">Loading...</h2>        
    </div>
    <div class='form'>
        <label>
        Name
        <input type="text" v-model="name" />
        </label>
        <label>
            Preferred javascript style
            <select name="language" v-model="language">
                <option value="Javascript">Javascript</option>
                <option value="Typescript">Typescript</option>
                <option value="Coffeescript">Coffeescript</option>
                <option value="Dart">Dart</option>
            </select>
        </label>
    </div>
    <ul class="overview">
        <li><strong>Overview</strong></li>
        <li>Name: {{ name }}</li>
        <li>Language: {{ language }}</li>
    </ul>
    <div>
        <h1>Looping through arrays</h1>
        <ul class="overview">
            <li v-for="(item, n) in interests" :key="n" class="form">
                {{ item.title }}
                <ol>
                    <li v-for="(fav, m) in item.favorite" :key="m">
                        {{ fav }}
                    </li>
                </ol>
            </li>
        </ul>
    </div>

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

<script>
    export default {
        data(){
            return {
                title: "My list component",
                isUpperCase: true,
                subtitle: "Vue JS basics",
                items: ["Item 1", "Item 2", "Item 3"],
                text: "Directive text",
                name: "",
                language: "",
                interests: [
                    {
                        "title": "TV",
                        "favorite": ["Designated survivor", "Spongebob"]
                    },
                    {
                        "title": "Games",
                        "favorite": ["Mu", "CS:GO"]
                    },
                    {
                        "title": "Sports",
                        "favorite": []
                    }
                ]
            }
        },

        methods: {
            triggerAlert(n){
                alert(`${n} has been clicked`)
            }
        }
    }
</script>

<style lang="scss">
    @import "../styles/typography";
    .form {
        display: flex;
        justify-content: space-evenly;
        max-width: 800px;
        padding: 40px 20px;
        border-radius: 10px;
        margin: 0 auto;
        background: #a5a2a2;
    }

    .overview {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        max-width: 300px;
        margin: 40px auto;
        padding: 40px 20px;
        border-radius: 20px;
        border: 1px solid #ececec;

        > li {
            list-style: none;

            + li {
                margin-top: 20px;
            }
        }
    }
</style>