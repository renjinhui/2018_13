let vm = new Vue({
    el: '#app',
    data: {
        todo:'',
        hash:'all',
        // count:1,
        // flag:false,
        ary:[{title:'示例',isSelect:false,isShow:false}] // 任物列表 isShow控制input显示
    },
    created(){
        this.hash = location.hash.slice(2) || 'all';
        //一进页面 就把数据从localStorage中获取；赋给 this.ary
        let arr = JSON.parse(localStorage.getItem('myTodoData') || "[]");
        this.ary = arr;
        window.onhashchange = () => {
            // console.log(location.hash);// #/all
            this.hash = location.hash.slice(2);
        }
    },
    directives:{
        focus(el,obj){
            if(obj.value){
                el.focus();
            }
        }
    },
    computed:{
        count:{
           get(){
               //过滤出 ary 中未完成的 项；
               let arr = this.ary.filter((item)=>{
                   return !item.isSelect;
               });
               //count 是要的 未完成事务的 个数；
               return arr.length;
           },
           set(){}
        },
        todoAry:{
            // 这个数组 根据路由去返回不同列表
            get(){
                //需求 就是 只要ary发生改变  就要把 数据更新到 localStorage
                localStorage.setItem('myTodoData',JSON.stringify(this.ary));
                switch (this.hash){
                    case 'all':
                        //若是全部任务  则需要返回的数组包含所有的任务
                        return this.ary;
                        break;
                    case 'finished':
                        //若是完成的任务  则需要返回的数组包含所有的isSelect是true的项
                        return this.ary.filter((item)=>{
                            return item.isSelect;
                        });
                        break;
                    case 'unfinished':
                        return this.ary.filter((item)=>{
                            return !item.isSelect
                        });
                        break;
                }
            },
            set(){}
        },
        // localAry(){
        //     console.log(2222);
        //     return this.ary
        // }
    },
    methods: {
        add(){
            // 这是用来给任务列表添加任务
            let obj = {};
            // this.todo = this.todo.replace(/^ +| +$/g,'');
            this.todo = this.todo.trim();// 字符串原生的 去除首尾空格
            if(!this.todo)return;
            obj.title = this.todo;
            obj.isSelect = false;// 是否选中
            obj.isShow = false; // 是否显示input框
            this.ary.push(obj); //把新增的任务添加到 列表里
            this.todo = ''; // 把输入框清空
        },
        remove(cur){
            //删除当前任务
            this.ary = this.ary.filter((item)=>{
                return cur !== item;
            })
        },
        show(item){
            item.isShow = !item.isShow;
        }
    }
});