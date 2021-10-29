export default {
    data(){
        return {
            list: [
                "Apex Legends",
                "A Plague Tale: Innocence",
                "ART SQOOL",
                "Baba Is You",
                "Devil May Cry 5",
                "The Division 2",
                "Hypnospace Outlaw",
                "Katana ZERO"
            ]
        }
    },

    beforeCreate() {
        alert("beforeCreate: data is static, thats it")
    },

    created() {
        alert("cerated: data and events ready, but no DOM")
    },

    beforeMount() {
        alert("beforeMount: $el not ready")
    },

    mounted() {
        alert("mounted: DOM ready to use")
    },

    beforeUpdate() {
        alert("beforeUpdate: we know an update is about to happen, and have the data")
    },

    updated() {
        alert("updated: virtual DOM will update after you click OK")
    },

    methods: {
        deleteItem(value) {
            this.list = this.list.filter(item => item !== value)
        }
    }
}