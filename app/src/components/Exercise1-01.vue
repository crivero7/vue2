// src/components/Exercise1-01.vue
<template>
    <div>
        <h1 :class="$style.title">
            {{ isUpperCase ? title.toUpperCase() : title}}
        </h1>
        <h2 :class="$style.subtitle">
            {{ subtitle }}
        </h2>
        <ul>
            <li>{{ items[0] }}</li>
            <li>{{ items[1] }}</li>
            <li>{{ items[2] }}</li>
        </ul>
        <h1 :class="$style.title">
            {{ isUpperCase ? title.toUpperCase() : title}}
        </h1>
        <h2 :class="$style.subtitle">
            {{ subtitle }}
        </h2>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: "My list component",
                isUpperCase: true,
                subtitle: "Vue JS basics",
                items: ["Item 1", "Item 2", "Item 3"]
            }
        }
    }
</script>


<style lang="scss" module>
    @import "../styles/typography";
    @import "../styles/global";
    @import "../styles/module";

</style>