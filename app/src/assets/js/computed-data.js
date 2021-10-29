export default {
    data() {
        return {
            firstName: '',
            lastName: '',
        }
    },

    computed: {
        fullName(){
            return `${this.firstName} ${this.lastName}`
        }
    }
}