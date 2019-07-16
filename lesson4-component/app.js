Vue.component("greeting",{
    template: '<div>' +
        '<p>{{name}}: 有一条没有意义上的发言</p>' +
        '<button @click="changeName">改名</button>' +
        '</div>',
    data: function(){
        return {
            name: "客服一线"
        }
    },
    methods: {
        changeName: function(){
            this.name = "客服二线"
        }
    }
});

new Vue({
    el: "#app1"
});

new Vue({
    el: "#app2"
});