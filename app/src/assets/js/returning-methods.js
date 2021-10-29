// src/js/returning-methods.js
export default {
    data(){
        return {
            totalItems: 0,
            totalCost: 0,
        }
    },

    methods: {
        addToCart(n){
            this.totalItems ++
            this.totalCost += n
        },

        formatCurrency(val){
            return `$${val.toFixed(2)}`
        }
    }
}