import axios from 'axios'

export default {

    data(){
        return {
            loading: false,
            axiosResponse: {},
        }
    },

    computed: {
        quote() {
            return this.axiosResponse && this.axiosResponse.slip ? this.axiosResponse.slip.advice : null
        }
    },

    methods: {
        async getApi(){
            this.loading = true
            return axios.get('https://api.adviceslip.com/advice').
            then( response => {
                
                setTimeout(() => {
                    this.axiosResponse = response.data
                    this.loading = false
                }, 2000);
                
            })
        }
    }
}