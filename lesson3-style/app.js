new Vue({
    el: "#app",
    data: {
       changeColor: false,
       changeLength: false
    },
    methods: {

    },
    computed: {
        compareClasses: function(){
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }
    }
});
