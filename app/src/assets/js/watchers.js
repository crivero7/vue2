export default {
    data() {
        return {
            oldDiscount: 0,
            discount: 5,
        }
    },

    watch: {
        discount(newValue, oldValue){
            this.oldDiscount = oldValue
        }
    },

    methods: {
        updateDiscount(){
            this.discount += 5
        }
    }
}