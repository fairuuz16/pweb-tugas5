const {createApp} = Vue

createApp({
    data(){
        return{
            var1: 0,
            var2: 0,
            hasil: 0
        }
    },
    methods: {
        add: function () {
            this.hasil = parseFloat(this.var1) + parseFloat(this.var2);
        },
        subtract: function () {
            this.hasil = parseFloat(this.var1) - parseFloat(this.var2);
        },
        multiply: function () {
            this.hasil = parseFloat(this.var1) * parseFloat(this.var2);
        },
        divide: function () {
            this.hasil = parseFloat(this.var1) / parseFloat(this.var2);
        }
    }
}).mount('#app')