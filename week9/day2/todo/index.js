let vm = new Vue({
    el:'#app',
    data:{
        ary:[
            // isSelect 是控制 checkbox是否被选中
            // isShow 是控制 是否显示 输入框的
            {isSelect:true,text:'hello',isShow:false}
        ],
        todo:'',
        myHash:location.hash || '#/all'
    },
    created(){
        // 目标是把数据存储到localStorage中;
        // 那么我们使用数据时也应该从localStorage中获取
        let str = localStorage.getItem('zhufeng');//就是我们要从localStorage中获取的数据
        let arr = str ? JSON.parse(str) : [];
        this.ary = arr; 
        window.onhashchange = ()=>{
            // 监听hash的改变
            this.myHash = location.hash;
        }
    },
    methods: {
        add(){
            this.ary.push({
                isSelect:false,
                text:this.todo,
                isShow:false,
                id:Math.random()
            })
            this.todo = '';
            // 当我们改变数组时； 把改变后的数组保存到localStorage中
            // localStorage.setItem('zhufeng',JSON.stringify(this.ary))
        },
        remove(n){
            this.ary.splice(n,1);
            // localStorage.setItem('zhufeng',JSON.stringify(this.ary))
        },
        change(obj){
            // 显示输入框
            obj.isShow = true
        },
        blur(obj){
            obj.isShow = false;
        }
    },
    directives:{
        // 自定义指令
        focus123(el,obj){
            // 能执行focus的只有当给的值是true的时候才行
            console.log(obj)
            if(!obj.value)return;
            setTimeout(() => {
                //先让DOM渲染完 再去执行focus
                el.focus();
            }, 10);
        },
        color(el,obj){
            // obj.value 就是 v-color='xxxx' 中的xxxx
            el.style.color=obj.value;
        }
    },
    computed:{
        todoAry(){
            //当我们改变ary  或者修改 ary中的isSelect时
            // 都会触发该函数
            // 只要改动 this.ary 我们就要把改动后的ary存入localStorage中
            localStorage.setItem('zhufeng',JSON.stringify(this.ary))
            switch (this.myHash) {
                case '#/all':
                    return this.ary.filter(item=>{
                        if(item.isSelect){
                            return item
                        }
                        return item
                    })
                    break;
            
                case '#/finished':
                    return this.ary.filter(item=>item.isSelect)
                    break;

                case '#/unfinished':
                    return this.ary.filter(item=>!item.isSelect)
                    break;
            
            }
        },
        num(){
            // 数组中isSelect项的个数
            return this.ary.filter(item=>!item.isSelect).length;
        }
    }
})