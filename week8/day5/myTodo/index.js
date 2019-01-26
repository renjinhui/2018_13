let vm = new Vue({
    el:'#app',
    data:{
       ary:[
            {
                isSelect:true, // 是控制是否选中的
                text:'hello world',// 控制显示的文案
                isShow:true // 控制显示 输入框还是 打勾
            }
        ],
       // 若 isShow 是true  则显示 文本； 否则显示输入框 
       todo:'',
       hash:'#/all' // 页面的hash值
    },
    created() {
        let str = localStorage.getItem('myData');
        if(str){
            this.ary = JSON.parse(str);
        }
        window.onhashchange = ()=>{
            this.hash = location.hash;
            // 只要页面的hash 改变时；
            // 就会触发 data中的hash 更新
            console.log(this.hash) 
        }
        // this.ary = localStorage.getItem('todoList') || this.ary
    },
    methods: {
        change(obj,n){
            // 改变显示的内容为输入框
            obj.isShow = false;
            console.log(this.$refs.inp[n]);
            // this.$refs.inp[n].focus();
            // setTimeout(() => {
            //     this.$refs.inp[n].focus();
            // }, 100);
            this.$nextTick(()=>{
                this.$refs.inp[n].focus();
            })
        },
        remove(obj){
            // 从 ary 中过滤出 符和条件的项
            // 从 ary 中删除 obj 项
            this.ary = this.ary.filter(item=> item !== obj);

            // 把 删除后的 ary 重新赋给 localStorage 的 myData
           localStorage.setItem('myData',JSON.stringify(this.ary))
        },
        back(obj){
            obj.isShow = true;
        },
        add(){
           let obj = {
               isSelect:false,
               text:this.todo,
               isShow:true
           } ;
           this.ary.push(obj);
           this.todo = '';//清空input 

           // 把 ary 放到 localStorage 的 myData
           localStorage.setItem('myData',JSON.stringify(this.ary))
        }
    },
    computed: {
        todoAry(){
            // 要去渲染的 数组
            // 它依赖于 this.ary 和 this.hash
            console.log(this.ary);
            //
            localStorage.setItem('myData',JSON.stringify(this.ary))
            switch (this.hash) {
                case '#/all':
                    return this.ary
                    break;
                case '#/finished':
                    //若是 已完成  则显示 isSelect是true的项 
                    return this.ary.filter(item=>item.isSelect);
                    break;
                case '#/unfinished':
                    return this.ary.filter(item=> !item.isSelect);
                    break;
            }
            // return this.ary
        }
    },
})