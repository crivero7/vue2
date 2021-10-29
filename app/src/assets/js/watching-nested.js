export default {
    data() {
        return {
            discount: 0,
            product: {
                price: 25,
                label: "Blue juice",
            }
        }
    },

    watch: {
        'product.price'() {
            this.discount++
        }
    },

    methods: {
        updatePrice() {
            if (this.product.price > 1){
                return this.product.price--
            }
        }
    }
}