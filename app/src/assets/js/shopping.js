export default {
    data(){
        return {
            items: []
        }
    },

    methods: {
        addItem(item){
            this.items.push(item)
        },

        deleteAll(){
            this.items = []
        },

        removeItem(value){
            this.items = this.items.filter(item => item !== value)
        }
    }
}