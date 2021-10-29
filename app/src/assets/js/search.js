export default {
    data() {
        return {
            frameworkList: [
                'Vue',
                'React',
                'Backbone',
                'Ember',
                'Knockout',
                'jQuery',
                'Angular',
            ],
            input: '',
            input2: '',
            input3: '',
            methodFilterList: [],
            watchFilterList: [],
        }
    },

    created(){
        this.searchMethod()
    },

    computed: {
        computedList() {
            return this.frameworkList.filter(item => item.toLowerCase().includes(this.input2.toLowerCase()))
        }
    },

    watch: {
        input3() {
            this.watchFilterList = this.frameworkList.filter(item => item.toLowerCase().includes(this.input3.toLowerCase()))
        },
        inmediate: true,
    },

    methods: {
        searchMethod(){
            this.methodFilterList = this.frameworkList.filter(item => item.toLowerCase().includes(this.input.toLowerCase()))
        }
    }
}