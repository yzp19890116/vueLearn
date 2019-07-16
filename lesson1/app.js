//实例化vue对象
new Vue({
    el: "#app",     //element的缩写，让uve接管页面的哪个元素，vue的根元素
    data: {         //数据
        name: "测试",
        job: "web开发",
        webSite: "http://www.baidu.com",
        webSiteTag: "<a href='http://www.baidu.com'>newTag</a>"
    },
    methods: {      //方法
        greet: function(name){
            return "Hello " + name + this.name + "!";
        }
    }
});