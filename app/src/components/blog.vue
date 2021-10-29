<template>
    <div id="app">
        <pre>{{ authors }}</pre>
        <pre>{{ posts }}</pre>
        <div class="articles">
            <hr/>
            <h2>Articles</h2>
            <section v-if="posts" class="articles-list">
                <article v-for="(post, i) in posts" :key="i">
                    <img class="thumbnail" src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'">
                </article>
            </section>
        </div>
    </div>
</template>

<script src="../assets/js/blog.js"></script>

<style lang="scss">
    @import "../assets/styles/blog.scss";
</style>
