import {createClient} from 'contentful'

const client = createClient({
    space: 'slexp6o485wx',
    accessToken: '7JSzyYhpYX291RITCQU8bZ9UE2nbfGHM8iJwmQJP_sU', 
})

export default {
    name: 'app',
    data() {
        return {
            authors: [],
            posts: {},
        }
    },

    async created() {
        this.authors = await this.getPeople()
        this.posts = await this.getBlogPosts()
    },

    methods: {
        async getPeople(){
            const entries = await client.getEntries({
                content_type: 'person'
            })
            return entries.items
        },

        async getBlogPosts(){
            const entries = await client.getEntries({
                content_type: 'blogPosts',
                order: 'fields.publishDate',
            })

            return entries.items
        }
    }
}