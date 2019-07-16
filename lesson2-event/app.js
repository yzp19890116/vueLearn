new Vue({
    el: "#app",
    data: {
        age: 20,
        x:0,
        y:0
    },
    methods: {
        addAge: function(inc){
            this.age += inc
        },
        subtractAge: function(inc){
            this.age -= inc
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopMove: function(event){
            event.stopPropagation();
        },
        alert: function(){
            alert("111");
        },
        enterKey: function(){
            console.log("press enter");
        },
        enterAltKey: function(){
            console.log("press alt and enter");
        }
    }
})